import { MobileMenuType } from "@/shared/types/NavbarType";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";

function MobileMenu({
  selectedPage,
  setSelectedPage,
  isAboveMdScreen,
  isToggleMenu,
  setIsToggleMenu,
}: MobileMenuType) {
  return (
    <>
      {!isAboveMdScreen && isToggleMenu && (
        <div className="fixed right-0 bottom-0 top-0 z-50 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsToggleMenu(!isToggleMenu)}>
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
