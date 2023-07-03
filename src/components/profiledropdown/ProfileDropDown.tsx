import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { ProfileDropDownProps } from "../../types";

const ProfileDropDown = (props: ProfileDropDownProps) => {
  const { name, role, imgProfile } = props;
  return (
    <Menu>
      <Menu.Button className="flex items-center justify-start w-full xl:ml-auto xl:justify-end md:items-start">
        <img
          src={imgProfile}
          alt="Profile image"
          className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]"
        />
        <div className="mx-3 text-left profile-info">
          <h3 className="font-semibold profile-name">{name}</h3>
          <h4 className="profile-role text-secondary">{role}</h4>
        </div>
        <ChevronDownIcon className="w-6 h-6" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 flex flex-col mt-2 w-[180px] origin-top-right bg-white divide-y divide-body top-[90%]">
          <Menu.Item>
            {({ active }) => (
              <Link
                className={`${active && "bg-blue-500"} px-4 py-2 text-sm`}
                to="/"
              >
                Account settings
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                className={`${active && "bg-blue-500"} px-4 py-2 text-sm`}
                to="/"
              >
                Documentation
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropDown;
