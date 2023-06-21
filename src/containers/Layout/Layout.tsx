import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const header = [
    { id: 1, name: "Menu", href: "/menu" },
    { id: 2, name: "Categories", href: "/categories" },
  ];
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between">
        <header className="bg-gray-200 top-0 w-full text-center p-5">
          <div className="flex flex-row">
            <Link href="/">
              <h1 className="p-5 border-r-2">food application</h1>
            </Link>
            <ul className="flex flex-row  ml-3">
              {header.map((item, i) => {
                return (
                  <Link key={i} href={item.href}>
                    {" "}
                    <li className="mr-9 p-5 hover:bg-gray-50 cursor-pointer ">
                      {item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </header>
        <section className="">{children}</section>
        <footer className="bg-gray-200 w-full text-center p-5 ">
          Food Apllication by MohammadReza
        </footer>
      </main>
    </>
  );
};

export default Layout;
