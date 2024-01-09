import { FaSquareXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
interface Icon {
  id: number;
  icon: React.ComponentType;
}

export const Icons: Icon[] = [
  {
    id: 1,
    icon: FaFacebookF,
  },
  {
    id: 2,
    icon: FaInstagram,
  },
  {
    id: 3,
    icon: FaSquareXTwitter,
  },
];
