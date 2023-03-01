import { SelectedPage } from "@/shared/types/types";
import ActionButton from "@/shared/ui/ActionButton";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (val: SelectedPage) => void;
};

const DesktopMenu = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <>
      <div className={`${flexBetween} gap-8 text-sm`}>
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
      <div className={`${flexBetween} gap-8`}>
        <p>Sing In</p>
        <ActionButton setSelectedPage={setSelectedPage}>
          Become a member
        </ActionButton>
      </div>
    </>
  );
};

export default DesktopMenu;
