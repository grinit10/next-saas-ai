import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "./mobile-sidebar";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center p-4">
      <MobileSideBar></MobileSideBar>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </div>
  );
};

export default NavBar;
