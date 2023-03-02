import { NavbarPropsType } from "@/shared/types/NavbarType";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";

function MobileMenu({
  selectedPage,
  setSelectedPage,
  isAboveMdScreen,
}: NavbarPropsType) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      <button
        className="ml-auto rounded-full bg-secondary-500 p-2"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <Bars3Icon className="h-6 w-6 text-white" />
      </button>

      {!isAboveMdScreen && toggleMenu && (
        <div className="z-90 fixed right-0 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <XMarkIcon className="h-6 w-6  text-gray-400" />
            </button>
          </div>
          <div className={`ml-[33%] flex flex-col gap-8 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
