import { Disclosure } from "@headlessui/react";
import { GoTriangleUp } from "react-icons/go";

export default function ClassesList({ bg }) {
  return (
    <div className='w-full'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full justify-between border-b border-gray-300 ${bg} px-4 py-2 text-left text-sm font-medium text-primary-text`}>
              <span>Class 01</span>
              <GoTriangleUp
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-primary-text`}
              />
            </Disclosure.Button>
            <Disclosure.Panel
              className={`px-4 pt-4 pb-2 text-sm text-gray-500  ${bg}`}>
              <div className='flex justify-start px-10 mx-auto items-center flex-wrap gap-3'>
                <p className=''>Section A</p>
                <p>|</p>
                <p className=''>Section B</p>
                <p>|</p>
                <p className=''>Section C</p>
                <p>|</p>
                <p className=''>Section D</p>
                <p>|</p>
                <p className=''>Section E</p>
                <p>|</p>
                <p className=''>Section F</p>
                <p>|</p>
                <p className=''>Section G</p>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
