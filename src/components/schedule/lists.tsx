import { format } from "date-fns";
import { userData } from "../../data";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { cn } from "../../utils/helper";

export default function SessionLists() {
  return (
    <ul role='list' className='divide-y divide-gray-100 mb-5'>
      {userData.sessions.map((session) => (
        <li key={session.id} className='flex items-center justify-between gap-x-6 py-3'>
          <div className='min-w-0'>
            <div className='flex items-start gap-x-3'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                {session.activity}
              </p>
            </div>
            <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
              <p className='whitespace-nowrap'>
                {format(new Date(session.date), "MMM dd")} at {session.time}
              </p>
            </div>
          </div>
          <div className='flex flex-none items-center gap-x-4'>
            <Menu as='div' className='relative flex-none'>
              <MenuButton className='-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900'>
                <span className='sr-only'>Open options</span>
                <EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
              </MenuButton>
              <MenuItems
                transition
                className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
              >
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href='#'
                      className={cn(
                        focus ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900",
                      )}
                    >
                      Mark as complete
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href='#'
                      className={cn(
                        focus ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900",
                      )}
                    >
                      Cancel
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  );
}
