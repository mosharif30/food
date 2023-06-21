import IData from "@/Types/Idata";
import Link from "next/link";

const FoodItem = ({ food }: { food: IData }) => {
  const { id, name, price, discount, details } = food;
  const discountedPrice = (price * (100 - discount)) / 100;
  const showDiscount = discount !== 0;

  return (
    <tr key={id} className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{id}</td>
      <td className="whitespace-nowrap px-6 py-4">{name}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {showDiscount ? (
          <div className="text-red-400 text-xl font-extrabold">
            <del className="pr-2 text-blue-950">{price}</del>
            {discountedPrice}
          </div>
        ) : (
          price
        )}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{details[0].Cuisine}</td>
      <td className="whitespace-nowrap px-6 py-4">{details[2].Difficulty}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {details[4]["Cooking Time"]}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <Link href={`/menu/${id}`}>see more...</Link>
      </td>
    </tr>
  );
};
export default FoodItem;
