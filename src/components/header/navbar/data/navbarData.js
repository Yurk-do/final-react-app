import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as RiIcons from "react-icons/ri";

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
    icon: <BiIcons.BiWorld />,
    className: "nav-text",
  },
  {
    title: "Commentary",
    path: "/commentary",
    icon: <FaIcons.FaComments />,
    className: "nav-text",
  },
  {
    title: "Sports",
    path: "/sports",
    icon: <FaIcons.FaFootballBall />,
    className: "nav-text",
  },
  {
    title: "Reports",
    path: "/specialReports",
    icon: <HiIcons.HiOutlineDocumentReport />,
    className: "nav-text",
  },
  {
    title: "Podcasts",
    path: "/podcasts",
    icon: <ImIcons.ImPodcast />,
    className: "nav-text",
  },
  {
    title: "Games",
    path: "/games",
    icon: <RiIcons.RiGameLine />,
    className: "nav-text",
  },
];
