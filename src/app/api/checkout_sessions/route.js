import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";
import { serverFetch } from "@/lib/core/server";
import { getUserSession } from "@/lib/core/session";

// ভার্সেল বিল্ড টাইম ক্র্যাশ রুখতে এবং প্রতিবার লাইভ রিকোয়েস্ট নিশ্চিত করতে
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    // Get product id from frontend
    const formData = await req.formData();
    const productId = formData.get('productId');
    const product = await serverFetch(`/api/product/${productId}`);

    const user = await getUserSession();

    if (!user) {
      return NextResponse.redirect(new URL("/signIn", origin));
    }

    // স্ট্রাইপ অবজেক্ট বা এপিআই কি চেক করার সেফটি গার্ড
    if (!stripe) {
      throw new Error("Stripe is not properly initialized due to missing API Key");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "bdt",
            // price in cents
            unit_amount: product.price * 100,
            product_data: {
              name: product.title,
              description: product.description,
              images: product.images.length ? [product.images[0]] : [],
            },
          },
        },
      ],
      customer_email: user?.email,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        productId,
        // buyerId: "",
        // sellerId: "",
      },
    });

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.error("Stripe Checkout Error: ", err.message);
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: err.statusCode || 500,
      }
    );
  }
}