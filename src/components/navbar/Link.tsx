import { NavbarPropsType } from "@/shared/types/NavbarType";
import { SelectedPage } from "@/shared/types/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }: NavbarPropsType) => {
  const lowerCasePage = page?.toLowerCase().replace(/ /g, "") as SelectedPage;
  const selectedElementClasses =
    selectedPage === lowerCasePage ? "text-primary-500" : "";

  return (
    <AnchorLink
      className={`${selectedElementClasses} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
