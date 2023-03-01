import { SelectedPage } from "./types";

export type NavbarPropsType = {
  page?: string;
  selectedPage: SelectedPage;
  setSelectedPage: (val: SelectedPage) => void;
  isAboveMdScreen?: boolean;
  isTopOfPage?: boolean;
};
