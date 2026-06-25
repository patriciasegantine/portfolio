import { BookOpen, Headphones, Plane, UsersRound, type LucideIcon } from "lucide-react";

export type BeyondCodeInterest = {
  name: string;
  icon: LucideIcon;
  subtitle: string;
};

export const beyondCodeInterests: BeyondCodeInterest[] = [
  { name: "Books", icon: BookOpen, subtitle: "quiet time" },
  { name: "Music", icon: Headphones, subtitle: "reset mode" },
  { name: "Travel", icon: Plane, subtitle: "new perspectives" },
  { name: "Family Time", icon: UsersRound, subtitle: "time together"},
];
