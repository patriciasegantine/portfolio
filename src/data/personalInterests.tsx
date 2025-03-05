import { Book, Coffee, LucideIcon, Music, Plane, Tent, Users } from "lucide-react";

export type PersonalInterest = {
  icon: LucideIcon
  name: string
}

export const personalInterests: PersonalInterest[] = [
  {icon: Coffee, name: 'Coffee'},
  {icon: Music, name: 'Music'},
  {icon: Book, name: 'Book'},
  {icon: Plane, name: 'Travel'},
  {icon: Tent, name: 'Camping'},
  {icon: Users, name: 'Family Time'},
]
