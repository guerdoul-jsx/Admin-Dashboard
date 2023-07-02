import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Usa from "../../../Icons/Usa";
import Fr from "../../../Icons/Fr";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const people = [
  {
    id: 1,
    name: "Eng (US)",
    avatar: <Usa />,
  },
  {
    id: 2,
    name: "Fra (FR)",
    avatar: <Fr />,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Languages = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative hidden md:flex">
            <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="flex-shrink-0 w-5 h-5 rounded-full">
                  {selected.avatar}
                </span>
                <span className="block ml-3 truncate">{selected.name}</span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                <ChevronDownIcon
                  className="w-5 h-5 text-secondary"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600" : "text-gray-900",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {person.avatar}
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Languages;
