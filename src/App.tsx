import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import TipForms from "./components/TipForms";
import Totales from "./components/Totales";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center font-black text-4xl">
          Calculadora de consumos y propinas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto grid md:grid-cols-2 py-20 gap-5">
        <div>
          <h2 className="text-4xl font-black mt-5">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-5">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />

              <TipForms setTip={setTip} tip={tip} />

              <Totales order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden esta Vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
