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
  ];
  return (
    <div>
      <li className="flex justify-center items-center space-x-5 bg-red-500 rounded p-5">
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
      </li>
    </div>
  );
};

export default Navbar;
