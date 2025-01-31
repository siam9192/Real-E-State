import NavbarRoutesData from "@/data/navbar-routes.data";
import Container from "../container/Container";
import Link from "next/link";
import { GoBell } from "react-icons/go";
import { CgMenuLeftAlt } from "react-icons/cg";

const Header = async () => {
  return (
    <div className=" py-3 md:py-5 border-b shadow-sm ">
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-2 pr-5 border-r-2 w-fit">
          <img src="images/logo.png" alt="" className=" size-10 md:size-12 rounded-full" />
          <h1 className=" text-2xl md:text-3xl font-bold font-jost ">Blogi</h1>
        </div>
        <div className="md:flex items-center gap-4  text-[1.rem] font-medium md:block hidden">
          {NavbarRoutesData.map((item) => (
            <Link href={item.path} className="hover:text-blue-600 ">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:flex items-center gap-4 md:block hidden">
          <div className="border-r-2 pr-4">
            <img
              src="https://nonprofitquarterly.org/wp-content/uploads/2021/10/mubarak-showole-Ve7xjKImd28-unsplash-1024x683.jpg"
              className="size-12  rounded-full"
              alt=""
            />
          </div>
          <button className="text-3xl">
            <GoBell />
          </button>
          <button className="font-semibold font-jost">Login</button>
          <button className="px-6 py-3 bg-primary_color text-white hover:bg-secondary_color duration-75 hover:text-black font-semibold font-jost">
            Sign Up
          </button>
        </div>
        <div className="sm:flex  items-center gap-2 md:hidden block ">
          <button className="text-3xl text-primary_color p-2 border rounded-full">
            <CgMenuLeftAlt />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
