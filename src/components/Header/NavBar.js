import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "About", path: "/about" },
  ];
  return (
    <nav className="bg-slate-900 text-white w-full py-5">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 pl-1 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul
        className={`md:flex gap-8 justify-center items-center absolute md:static duration-500 ease-in-out bg-slate-900 w-full text-center ${
          open ? "top-12" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
