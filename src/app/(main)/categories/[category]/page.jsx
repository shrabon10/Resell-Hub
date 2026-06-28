import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";
import { getUserSession } from "@/lib/core/session";
import { Package, ArrowLeft, SearchX } from "lucide-react";
import categories from "@/lib/data/categories";

// ব্যাকএন্ড থেকে ডাটা আনার জন্য ডাইনামিক ফাংশন
async function fetchProductsByCategory(categoryName) {
    try {
        // আপনার env অনুযায়ী http://localhost:5000 ব্যবহার করা হয়েছে
        const baseUrl = process.env.NEXT_PUBLIC_SERVER || "http://localhost:5000";
        
        const res = await fetch(`${baseUrl}/api/products?category=${encodeURIComponent(categoryName)}`, {
            cache: "no-store", // প্রতিবার রিয়েলটাইম ডাটাবেস থেকে ডাটা আনবে
        });

        if (!res.ok) {
            return [];
        }

        const data = await res.json();
        // আপনার ব্যাকএন্ড { products: result } আকারে ডাটা পাঠায়, তাই data.products রিটার্ন করছি
        return data.products || [];
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
}

export default async function CategoryProductsPage({ params }) {
    // Next.js-এর নিয়ম অনুযায়ী params-কে await করে নিতে হবে
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);

    // লোকাল ফাইলের সাথে ক্যাটাগরির নাম মেলানো (Case-Insensitive)
    const validCategory = categories.find(
        (c) => c.title.toLowerCase() === decodedCategory.toLowerCase()
    );

    // ১. যদি ক্যাটাগরি লোকাল ফাইলে না থাকে
    if (!validCategory) {
        return (
            <div className="container mx-auto py-20 px-4">
                <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
                    <div className="p-4 rounded-full mb-4" style={{ background: "rgba(62,95,71,0.08)" }}>
                        <SearchX className="w-10 h-10" style={{ color: "#3E5F47" }} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Category Not Found
                    </h1>
                    <p className="text-muted-foreground text-sm mb-8">
                        We couldn&apos;t find the category &quot;{decodedCategory}&quot;. Browse all categories to find what you&apos;re looking for.
                    </p>
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all active:scale-95"
                        style={{
                            background: "linear-gradient(135deg, #3E5F47 0%, #2c4534 100%)",
                            boxShadow: "0 4px 16px rgba(62,95,71,0.3)",
                        }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Browse Categories
                    </Link>
                </div>
            </div>
        );
    }

    // ব্যাকএন্ড থেকে সরাসরি ডাটা ফেচ করা হচ্ছে
    const products = await fetchProductsByCategory(validCategory.title);
    const user = await getUserSession();

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl" style={{ background: "rgba(62,95,71,0.1)" }}>
                    <Package className="w-5 h-5" style={{ color: "#3E5F47" }} />
                </div>
                <h1 className="text-3xl font-bold tracking-tight capitalize">
                    {validCategory.title}
                </h1>
            </div>
            <p className="text-muted-foreground mb-8">
                {products.length} {products.length === 1 ? "product" : "products"} found
            </p>

            {/* ২. যদি ডাটাবেসে ওই ক্যাটাগরির কোনো প্রোডাক্ট না থাকে */}
            {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
                    <div className="p-4 rounded-full mb-4" style={{ background: "rgba(62,95,71,0.08)" }}>
                        <Package className="w-10 h-10" style={{ color: "#3E5F47" }} />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        No Products Found
                    </h2>
                    <p className="text-muted-foreground text-sm mb-8">
                        There are no products in &quot;{validCategory.title}&quot; yet. Check back later or browse other categories.
                    </p>
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all active:scale-95"
                        style={{
                            background: "linear-gradient(135deg, #3E5F47 0%, #2c4534 100%)",
                            boxShadow: "0 4px 16px rgba(62,95,71,0.3)",
                        }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Browse Categories
                    </Link>
                </div>
            ) : (
                // ৩. প্রোডাক্ট থাকলে গ্রিড আকারে দেখাবে
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            user={user}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}