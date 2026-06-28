import EmptyOrders from "@/components/dashboard/EmptyOrders";
import OrdersClient from "@/components/dashboard/OrdersClient";
import { getUserSession } from "@/lib/core/session";
import { protectedFetch, serverFetch } from "@/lib/core/server";

export default async function OrdersPage() {
  const user = await getUserSession();

  const response = await protectedFetch(`/api/orders?userId=${user.id}`);
  
  const orders = Array.isArray(response) ? response : response?.data || [];

  if (!orders || orders.length === 0) {
    return <EmptyOrders />;
  }

  return <OrdersClient orders={orders} />;
}