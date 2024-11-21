import { MenuItems } from "../types";
type MenuItemProps = {
  item: MenuItems;
  addItem: (item:MenuItems) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="w-full flex border-2 justify-between border-cyan-400 p-3 hover:bg-teal-200 rounded-xl"
      onClick={() => addItem(item)}
    >
      <p className="text-xl">{item.name}</p>
      <p className="text-xl font-black">${item.price}</p>
    </button>
  );
}
