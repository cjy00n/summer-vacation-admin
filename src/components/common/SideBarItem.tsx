import { NavLink } from "react-router-dom";
import PlusIcon from "../../assets/icons/PlusIcon";

interface SideBarItemProps {
  to: string;
  title: string;
  haveSubItems?: boolean;
  isSubItem?: boolean;
}

const SideBarItem = ({
  to,
  title,
  haveSubItems,
  isSubItem,
}: SideBarItemProps) => {
  return (
    <nav className="mx-2 px-1 py-2 border-b border-gray-70 border-solid">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-orange-300" : "")}
      >
        <span
          className={`
            w-full flex justify-between items-center  ${
              isSubItem ? "font-normal" : "font-medium"
            }`}
        >
          {title}
          {haveSubItems && <PlusIcon />}
        </span>
      </NavLink>
    </nav>
  );
};

export default SideBarItem;
