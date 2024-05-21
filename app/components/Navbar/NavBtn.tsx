import { FC } from "react";
const NavBtn: FC<{ title: string; href: string }> = ({ title, href }) => {
  return <a href={href}>{title}</a>;
};

export default NavBtn;
