import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { NavbarPropsType } from "@/shared/types/NavbarType";

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavbarPropsType) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMdScreen = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
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
                <MobileMenu
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isAboveMdScreen={isAboveMdScreen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
