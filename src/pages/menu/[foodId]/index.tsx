import IData from "@/Types/Idata";
import FoodDetails from "@/containers/FoodDetails";

const FoodPage = ({ data }: { data: IData }) => {
  console.log(data);

  return <> {data?.id && <FoodDetails data={data} />}</>;
};

export default FoodPage;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food: IData) => ({
    params: {
      foodId: food.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: { params: { foodId: any } }) {
  const {
    params: { foodId },
  } = context;

  const res = await fetch(`http://localhost:4000/data/${foodId}`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 20, //seconds
  };
}
