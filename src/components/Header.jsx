import React from "react";

function Header({ updatePage }) {
  const navs = [
    {
      name: "counter",
      onclick: () => updatePage("counter"),
    },
    {
      name: "User Management",
      onclick: () => updatePage("user management"),
    },
  ];
  return (
    <div className="sticky bg-white top-0 flex h-15 items-center w-full justify-between p-4 px-10 shadow-sm z-10">
      <h1 className="text-xl font-semibold">Redux</h1>
      <div className="flex gap-4 cursor-pointer">
        {navs.map((nav) => (
          <p
            key={nav.name}
            onClick={nav.onclick}
            className="hover:underline transition"
          >
            {nav.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Header;
