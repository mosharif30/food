import IData from "../../Types/Idata";
import Menu from "@/containers/Menu/Menu";
const MenuPage = ({ data }: { data: IData[] }) => {
  return (
    <>
      <Menu menu={data} />
    </>
  );
};

export default MenuPage;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 20, //seconds
  };
}
