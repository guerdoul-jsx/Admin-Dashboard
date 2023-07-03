import NotificationIcon from "../../Icons/Notification";
import { Popover } from "@headlessui/react";

const Notification = (props: any) => {
  const { Notifications } = props;
  return (
    <>
      <Popover className="relative ">
        <Popover.Button className="bg-bgNotification focus:border-orange focus:outline-orange w-[40px] h-[40px] flex items-center justify-center rounded-md relative">
          <span className="absolute w-2 h-2 rounded-full top-1 right-1 bg-red"></span>
          <NotificationIcon />
        </Popover.Button>

        <Popover.Panel className="absolute -left-[100px] top-full p-4 rounded-md z-10 bg-bgNotification">
          <div className="text-sm">No Notification</div>
        </Popover.Panel>
      </Popover>
    </>
  );
};

export default Notification;
