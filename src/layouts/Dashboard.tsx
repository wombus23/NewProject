import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import QanoonBot from "@/assets/qanoon-bot-gray.svg";
import { UploadIcon } from "@/components/icons";

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-stretch min-h-screen">
      <nav className="left-nav bg-neutral-800 w-[240px] p-4 text-white flex flex-col gap-2">
        <NavLink to="/">
          <img
            src={QanoonBot}
            alt="Qanoon Bot"
            className="max-w-[160px] mx-auto mb-4"
          />
        </NavLink>
        <DashboardLink icon={<UploadIcon className="w-[20px] h-[20px]" />} to="/dashboard/chat">
          New Chat
        </DashboardLink>
        <DashboardLink icon={<UploadIcon className="w-[20px] h-[20px]" />} to="/dashboard/chats">
          Chats
        </DashboardLink>
        <DashboardLink icon={<UploadIcon className="w-[20px] h-[20px]" />} to="/dashboard/saved">
          Saved
        </DashboardLink>
        <DashboardLink icon={<UploadIcon className="w-[20px] h-[20px]" />} to="/dashboard/saved">
          Search
        </DashboardLink>
      </nav>
      <main className="main-content min-h-screen w-full">{children}</main>
    </div>
  );
};

const DashboardLink = (
  props: NavLinkProps & React.RefAttributes<HTMLAnchorElement> & any
) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive, isPending }) => {
        const _class =
          "py-2 px-3 rounded-full font-medium hover:bg-accent/10 transition-all duration-100 flex items-center gap-2";
        return isPending
          ? `${_class} text-gray-600`
          : isActive
          ? `${_class} bg-accent text-main hover:bg-accent/90`
          : _class;
      }}
    >
      {props?.icon}
      <span>{props.children}</span>
    </NavLink>
  );
};

export default Dashboard;
