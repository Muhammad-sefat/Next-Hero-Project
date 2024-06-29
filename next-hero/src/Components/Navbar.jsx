"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/About",
    },
    {
      title: "Contact",
      path: "/Contact",
    },
    {
      title: "Blog",
      path: "/Blog",
    },
    {
      title: "Post",
      path: "/Post",
    },
  ];
  if (pathName.includes("Dashboard")) return <div>dashboard layout</div>;
  return (
    <div>
      <li className="flex justify-between items-center  bg-red-500 rounded p-5">
        <p className="text-xl font-semibold">Next Hero</p>
        <div className="space-x-5">
          {links?.map((link) => (
            <Link
              className={`${
                pathName === link.path && "text-gray-400 font-semibold"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button className="bg-white p-2 rounded">Login</button>
      </li>
    </div>
  );
};

export default Navbar;
