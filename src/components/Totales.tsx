import { useMemo } from "react";
import { OrderItem } from "../types";
import formatcurrency from "../helpers";

type TotalesProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void
};

export default function Totales({ order, tip, placeOrder}: TotalesProps) {
  const subTotal = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipTotal = useMemo(() => subTotal * tip, [tip, order]);
  const total = useMemo(() => subTotal * tip + subTotal, [tip, order]);
  return (
    <>
      <div>
        <h3 className="font-black text-4xl ">Totales</h3>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-black">{formatcurrency(subTotal)}</span>
        </p>
        <p>
          Total propina:{" "}
          <span className="font-black">{formatcurrency(tipTotal)}</span>
        </p>
        <p className="border-t border-gray-600 mt-1">
          Total a pagar:{" "}
          <span className="font-black">{formatcurrency(total)}</span>
        </p>
      </div>
      <button
        className="bg-black w-full p-3 text-white uppercase disabled:opacity-10"
        disabled={total === 0}
        onClick={placeOrder}
      >
        Guardar
      </button>
    </>
  );
}
