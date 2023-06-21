import IData from "@/Types/Idata";
import Image from "next/image";

const FoodDetails = ({ data }: { data: IData }) => {
  const { id, name, price, discount, details, introduction, ingredients } =
    data;

  const Array = [
    { ID: id },
    { Name: name },
    { Price: price },
    { Discount: discount },
    { Introduction: introduction },
  ];
  return (
    <>
      <div className="w-full p-5">
        <div className="grid grid-cols-3 gap-4 py-3">
          <div className="flex flex-col">
            <div className="bg-gray-200 py-2 px-4">image</div>
            <div className="bg-white py-2 px-4 border border-gray-300">
              <Image
                height={500}
                width={500}
                alt={name}
                src={`/images/${id}.jpeg`}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Array.map((item) => (
            <>
              <div className="flex flex-col">
                <div className="bg-gray-200 py-2 px-4">
                  {Object.keys(item)[0]}
                </div>
                <div className="bg-white py-2 px-4 border border-gray-300">
                  {Object.values(item)[0]}
                </div>
              </div>
            </>
          ))}

          <div className="flex flex-col">
            <div className="bg-gray-200 py-2 px-4">Ingredients</div>
            <div className="bg-white py-2 px-4 border border-gray-300">
              {ingredients.map((item, i) => (
                <>
                  <li key={i}>{item}</li>
                </>
              ))}
            </div>
          </div>
          {details.map((detail) => (
            <>
              <div className="flex flex-col">
                <div className="bg-gray-200 py-2 px-4">
                  {Object.keys(detail)[0]}
                </div>
                <div className="bg-white py-2 px-4 border border-gray-300">
                  {Object.values(detail)[0]}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default FoodDetails;
