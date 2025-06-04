import { type JSX } from "react";

export type SectionTypes = {
  id: number;
  className: string;
  title: string;
  component: JSX.Element | null;
};
