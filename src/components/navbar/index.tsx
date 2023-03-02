import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { NavbarPropsType } from "@/shared/types/NavbarType";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavbarPropsType) => {
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMdScreen = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full  py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />

            <div className={`${flexBetween} w-full`}>
              {isAboveMdScreen ? (
                <DesktopMenu
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ) : (
                <button
                  className="ml-auto rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsToggleMenu(!isToggleMenu)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isAboveMdScreen={isAboveMdScreen}
        isToggleMenu={isToggleMenu}
        setIsToggleMenu={setIsToggleMenu}
      />
    </nav>
  );
};

export default Navbar;
