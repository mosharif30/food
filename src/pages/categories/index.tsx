import IData from "@/Types/Idata";
import Menu from "@/containers/Menu/Menu";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Categories = ({ data }: { data: IData[] }) => {
  console.log(data);

  const router = useRouter();

  const [query, setQuery] = useState({
    difficulty: router.query.difficulty || "",
    time: router.query.time || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (query.difficulty != "" || query.time != "") {
      router.push({ pathname: "/categories", query });
    } else {
      router.push({ pathname: "/categories" });
    }
  }, [query]);

  return (
    <>
      <div className=" flex flex-row w-full">
        <div className="  w-50 bg-slate-300 h-screen">
          <div className="flex flex-col p-5 justify-center space-y-4 ">
            <div>
              <label
                htmlFor="difficulty"
                className="block text-sm font-medium text-gray-700"
              >
                Difficulty
              </label>
              <select
                value={query.difficulty}
                id="difficulty"
                name="difficulty"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Coocking Time
              </label>
              <select
                value={query.time}
                id="time"
                name="time"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select</option>

                <option value="more">More than 30 min</option>
                <option value="less">Less Than 30 min</option>
              </select>
            </div>
          </div>
        </div>
        <div className="  w-50 mr-auto ml-auto h-screen mt-10">
          {data.length ? (
            <Menu menu={data} />
          ) : (
            <>
              <div className="mr-auto ml-auto">
                <Image
                  alt="search image"
                  src={"/images/search.png"}
                  width={200}
                  height={200}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`http://localhost:4000/data`);
  const data = await res.json();

  const filteredData = data.filter((item: IData) => {
    const difficultyResult = item.details.some(
      (detail: any) => detail.Difficulty === difficulty
    );

    const timeResult = item.details.some((detail: any) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return true;
      } else if (time === "more" && +timeDetail > 30) {
        return true;
      }
      return false;
    });

    if (time && difficulty && timeResult && difficultyResult) {
      return true;
    } else if (!time && difficulty && difficultyResult) {
      return true;
    } else if (time && !difficulty && timeResult) {
      return true;
    }

    return false;
  });

  return {
    props: {
      data: filteredData,
    },
  };
};
