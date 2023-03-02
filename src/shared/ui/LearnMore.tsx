import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/types";

type Props = {
  setSelectedPage: (val: SelectedPage) => void;
};

const LearnMore = ({ setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p>Learn More</p>
    </AnchorLink>
  );
};

export default LearnMore;
