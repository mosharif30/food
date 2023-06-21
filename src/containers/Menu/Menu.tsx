import React from "react";
import IData from "@/Types/Idata";
import FoodItem from "../FootItem";

const Menu = ({ menu }: { menu: IData[] }) => {
  const menuHeader = [
    "#",
    "Name",
    "Price",
    "Details",
    "Difficulty",
    "Coocking Time",
    "Action",
  ];
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {menuHeader.map((item) => (
                    <th key={item} scope="col" className="px-6 py-4">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {menu.map((food) => (
                  <FoodItem key={food.id} food={food} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
