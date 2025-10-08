import { GrSecure } from "react-icons/gr";
import { MdQueryStats } from "react-icons/md";
import { PiChatsCircleBold } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IconType } from "react-icons";

export interface ServiceItem {
  title: string;
  description: string;
  icon: IconType; // store the component, not JSX
}

const ServicesData: ServiceItem[] = [
  {
    title: "Live Chats with Lawyers",
    description:
      "Real-time Solutions, Right at Your Fingertips! Real-time Solutions, Right at Your Fingertips! Real-time Solutions, Right at Your Fingertips!",
    icon: PiChatsCircleBold,
  },
  {
    title: "Watch Status of Your Case",
    description:
      "Stay Informed, Stay Confident! Stay Informed, Stay Confident! Stay Informed, Stay Confident!",
    icon: MdQueryStats,
  },
  {
    title: "Hiring Available Lawyers",
    description:
      "Your Perfect Legal Match Awaits. Your Perfect Legal Match Awaits.",
    icon: FaUserTie,
  },
  {
    title: "Manage Your Account in Secure Form",
    description: "Your Data, Your Control. Your Data, Your Control.",
    icon: GrSecure,
  },
  {
    title: "Payments Method Integration",
    description:
      "Hassle-free Transactions, Total Peace of Mind Hassle-free Transactions",
    icon: GiPayMoney,
  },
  {
    title: "Customer Support",
    description: "Our Team, Your Advocates, Always by Your Side ",
    icon: TfiHeadphoneAlt,
  },
];

export default ServicesData;
