import React from "react";
import cln from "classnames";
import Link from "next/link";
interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}
const Menu = (props: Partial<MenuProps>) => {
  const { title, active, href = "/" } = props;
  const titleClass = cln({
    "nav-link": true,
    active,
  });
  return (
    <>
      <li className="nav-item my-auto">
        <Link href={href}>
          <a className={titleClass} aria-current="page">
            {title}
          </a>
        </Link>
      </li>
    </>
  );
};

export default Menu;
