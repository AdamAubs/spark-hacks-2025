import {useState} from "react";
import {Link} from "react-router-dom";
import {Home, Users, ClipboardList, BarChart3, ChevronLeft, ChevronRight} from "lucide-react";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } flex flex-col relative`}
    >
      {/* Toggle Button (Aligned Right) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-4 right-2 p-2 hover:bg-gray-700 rounded-md transition"
      >
        {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2 mt-16">
        <NavItem to="/" icon={<Home size={24} />} label="Home" isCollapsed={isCollapsed} />
        <NavItem to="/contacts" icon={<Users size={24} />} label="Contacts" isCollapsed={isCollapsed} />
        <NavItem to="/assignments" icon={<ClipboardList size={24} />} label="Assignments" isCollapsed={isCollapsed} />
        <NavItem to="/grades" icon={<BarChart3 size={24} />} label="Grades" isCollapsed={isCollapsed} />
      </nav>
    </div>
  );
}

const NavItem = ({to, icon, label, isCollapsed}) => (
  <Link
    to={to}
    className={`flex items-center p-3 hover:bg-gray-700 transition-all ${isCollapsed ? "justify-center" : "space-x-2"}`}
  >
    {icon}
    {!isCollapsed && <span className="text-white">{label}</span>}
  </Link>
);
