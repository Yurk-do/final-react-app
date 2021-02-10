import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";

export const navbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Techcrunch",
    path: "/techcrunch",
    icon: <GiIcons.GiMechaHead />,
    className: "nav-text",
  },
  {
    title: "Tesla",
    path: "/tesla",
    icon: <SiIcons.SiTesla />,
    className: "nav-text",
  },
  {
    title: "USANews",
    path: "/usaNews",
    icon: <FaIcons.FaFlagUsa />,
    className: "nav-text",
  },
  {
    title: "Apple",
    path: "/apple",
    icon: <GrIcons.GrApple />,
    className: "nav-text",
  },
  {
    title: "WSjournal",
    path: "/wsjournal",
    icon: <FaIcons.FaBusinessTime />,
    className: "nav-text",
  },
  {
    title: "Comments",
    path: "/comments",
    icon: <RiIcons.RiContactsBookFill />,
    className: "nav-text",
  },
];
