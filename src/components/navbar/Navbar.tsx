import { Bars3Icon } from "@heroicons/react/20/solid";
import SearchIcon from "../../Icons/SearchIcon";
import Languages from "../languages/components/Languages";
import Notification from "../notification/Notification";
import ProfileDropDown from "../profiledropdown/ProfileDropDown";
import ProfileImage from "../../assets/images/ProfileImage.png";
import { SidebarProps } from "../../types";

type NavbarProps = SidebarProps & {
  brandText: string;
};
const index = (props: NavbarProps) => {
  const { setOpen, open, brandText } = props;
  return (
    <nav className="sticky top-0 bg-white shadow-sm">
      <main className="flex flex-col-reverse flex-wrap p-4 md:space-y-0 md:flex-nowrap md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold basis-1/2 md:basis-1/4">
          {brandText}
        </h1>
        <form className="relative flex w-full my-4 basis-1/2 md:basis-1/3">
          <button className="absolute left-[16px] -translate-x-1/2 -translate-y-1/2 top-1/2">
            <SearchIcon className="h-[22px] w-[22px]" />
          </button>
          <input
            type="search"
            name="search"
            id="search"
            className="w-full py-2 pl-8 pr-4 rounded-md focus:border-none focus:outline-none bg-input"
            placeholder="Search here..."
          />
        </form>
        <div className="flex flex-row-reverse items-center flex-1 xl:flex-row lg:basis-1/2 gap-x-4">
          <div className="flex items-center justify-end cursor-pointer xl:hidden">
            <Bars3Icon className="w-8 h-8 " onClick={() => setOpen(!open)} />
          </div>
          <div className="relative z-50 hidden desktop-languages xl:flex">
            <Languages />
          </div>
          <div className="flex flex-row-reverse items-center justify-end w-full space-x-2 xl:flex-row">
            {/* Notification Components */}
            <div className="mx-auto notification-container">
              <Notification />
            </div>
            {/* Profile dropdown */}
            <div className="relative basis-1/2 md:basis-3/4">
              <ProfileDropDown
                name="Mustafiq"
                role="admin"
                key={1}
                imgProfile={ProfileImage}
              />
            </div>
          </div>
        </div>
      </main>
    </nav>
  );
};

export default index;
