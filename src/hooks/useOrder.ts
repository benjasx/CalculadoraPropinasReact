import { useState } from "react";
import type { MenuItems, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItems) => {
    const itemExist = order.find((orderitem) => orderitem.id === item.id);
    if (itemExist) {
      const updateOrder = order.map((orderitem) =>
        orderitem.id === item.id
          ? { ...orderitem, quantity: orderitem.quantity + 1 }
          : orderitem
      )
      setOrder(updateOrder)
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  return {
    order,
    addItem,
  };
}
