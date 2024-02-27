import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <SideBar></SideBar>
      </div>
      <main className="md:pl-72">
        <NavBar></NavBar>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
