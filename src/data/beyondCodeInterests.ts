import { IconType } from "react-icons";
import { FaBook, FaMusic, FaPlaneDeparture, FaUsers } from "react-icons/fa";

export type BeyondCodeInterest = {
  name: string;
  icon: IconType;
  subtitle: string;
};

export const beyondCodeInterests: BeyondCodeInterest[] = [
  { name: "Books", icon: FaBook, subtitle: "quiet time" },
  { name: "Music", icon: FaMusic, subtitle: "reset mode" },
  { name: "Travel", icon: FaPlaneDeparture, subtitle: "new perspectives" },
  { name: "Family Time", icon: FaUsers, subtitle: "time together"},
];
