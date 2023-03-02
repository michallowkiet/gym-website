import { SelectedPage } from "./types";

export type BenefitType = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export type SetSelectedPageType = {
  setSelectedPage: (val: SelectedPage) => void;
};

export type LearnMoreType = BenefitType & SetSelectedPageType;
