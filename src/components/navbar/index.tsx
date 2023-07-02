import { Bars3Icon } from "@heroicons/react/20/solid";
import SearchIcon from "../../Icons/SearchIcon";
import Languages from "../languages/components/Languages";
import Notification from "../notification/Notification";
import ProfileDropDown from "../profiledropdown/ProfileDropDown";

const index = (props: any) => {
  const { setOpen, open } = props;
  return (
    <nav className="sticky top-0 bg-white shadow-sm">
      <main className="flex flex-col-reverse flex-wrap p-4 md:space-y-0 md:flex-nowrap md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold basis-1/2 md:basis-1/4">
          {props.brandText}
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
        <div className="flex items-center md:flex-row lg:basis-1/2">
          <div className="md:hidden basis-1/3">
            <Bars3Icon className="w-8 h-8 " onClick={() => setOpen(!open)} />
          </div>
          <Languages />
          <div className="flex items-center justify-end w-full space-x-2">
            {/* Notification Components */}
            <Notification />
            {/* Profile dropdown */}
            <div className="relative basis-1/2 md:basis-3/4">
              <ProfileDropDown />
            </div>
          </div>
        </div>
      </main>
    </nav>
  );
};

export default index;
