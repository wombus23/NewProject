import QanoonBot from "@/assets/qanoon-bot.svg";
import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const Default = ({ children }: { children: JSX.Element | ReactNode }) => {
  return (
    <>
      <header className="bg-[#BCDAE1] border-b border-b-accent">
        <nav className="container mx-auto px-4 h-[72px] flex items-center justify-between">
          <NavLink to="/">
            <img src={QanoonBot} alt="Qanoon Bot" />
          </NavLink>
          <div className="nav-links flex gap-[4px]">
            <SiteLink to="/">Home</SiteLink>
            <SiteLink to="/about">About Us</SiteLink>
            <SiteLink to="/contact">Contact Us</SiteLink>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
};

const SiteLink = (
  props: NavLinkProps & React.RefAttributes<HTMLAnchorElement>
) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive, isPending }) => {
        const _class = "py-1 px-3 rounded-full hover:bg-accent/10 font-normal";
        return isPending
          ? `${_class} text-gray-600`
          : isActive
          ? `${_class} text-accent`
          : _class;
      }}
    >
      {props.children}
    </NavLink>
  );
};

export default Default;
