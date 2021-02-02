import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const navbarData = [
  {
    title: "News",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Policy",
    path: "/policy",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Commentary",
    path: "/commentary",
    icon: <FaIcons.FaCartPlus />,
    className: "nav-text",
  },
  {
    title: "Sports",
    path: "/sports",
    icon: <IoIcons.IoMdPeople />,
    className: "nav-text",
  },
  {
    title: "Reports",
    path: "/specialReports",
    icon: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text",
  },
  {
    title: "Podcasts",
    path: "/podcasts",
    icon: <IoIcons.IoMdHelp />,
    className: "nav-text",
  },
  {
    title: "Games",
    path: "/games",
    icon: <IoIcons.IoMdHelp />,
    className: "nav-text",
  },
];
