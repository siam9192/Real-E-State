import { CgProfile } from "react-icons/cg";
import { CiGrid41 } from "react-icons/ci";
import { FaChildReaching } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { MdOutlineReviews } from "react-icons/md";

export const agentDashboardRoutes = [
  {
    title: "Overview",
    icon: CiGrid41,
    path: "",
  },
  {
    title: "My Properties",
    icon: GoHome,
    path: "agent/my-properties",
  },
  {
    title: "Inquiries",
    icon: FaChildReaching,
    path: "",
  },
  {
    title: "Reviews",
    icon: MdOutlineReviews,
    path: "",
  },
  {
    title: "My Profile",
    icon: CgProfile,
    path: "",
  },
];
