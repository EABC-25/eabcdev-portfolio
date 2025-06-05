import { type JSX } from "react";
// import { type IconType } from "react-icons";

export type ContentTypes = {
  id: string;
  tabName?: string;
  icon?: JSX.Element;
  component: JSX.Element;
};

export type WorkTypes = {
  id: string;
  title: string;
};
