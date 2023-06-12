import {
  BsPeopleFill,
  BsListUl,
  BsFillBellFill,
  BsThreeDotsVertical,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { HiOutlineViewGrid, HiOutlineCamera } from "react-icons/hi";
import {
  AiOutlineEye,
  AiFillFacebook,
  AiFillClockCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import {
  MdEdit,
  MdOutlineAddCircleOutline,
  MdDelete,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdEmail,
} from "react-icons/md";
import { FaTimes, FaRegTimesCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

export const Grid = ({ className }) => {
  return <HiOutlineViewGrid className={className} />;
};

export const Peoples = ({ className }) => {
  return <BsPeopleFill className={className} />;
};

export const List = ({ className }) => {
  return <BsListUl className={className} />;
};

export const Eye = ({ className }) => {
  return <AiOutlineEye className={className} />;
};

export const Search = ({ className }) => {
  return <FiSearch className={className} />;
};

export const Bell = ({ className }) => {
  return <BsFillBellFill className={className} />;
};

export const Pencil = ({ className }) => {
  return <MdEdit className={className} />;
};

export const Cross = ({ className }) => {
  return <FaTimes className={className} />;
};

export const Add = ({ className }) => {
  return <MdOutlineAddCircleOutline className={className} />;
};

export const Delete = ({ className }) => {
  return <MdDelete className={className} />;
};

export const ArrowRight = ({ className }) => {
  return <MdOutlineKeyboardArrowRight className={className} />;
};

export const ThreeDots = ({ className }) => {
  return <BsThreeDotsVertical className={className} />;
};

export const Edit = ({ className }) => {
  return <BiEdit className={className} />;
};

export const RoundCross = ({ className }) => {
  return <FaRegTimesCircle className={className} />;
};

export const ArrowDown = ({ className }) => {
  return <MdOutlineKeyboardArrowDown className={className} />;
};

export const FacebookSquare = ({ className }) => {
  return <AiFillFacebook className={className} />;
};

export const Instagram = ({ className }) => {
  return <BsInstagram className={className} />;
};

export const Twitter = ({ className }) => {
  return <BsTwitter className={className} />;
};

export const Youtube = ({ className }) => {
  return <BsYoutube className={className} />;
};

export const Telephone = ({ className }) => {
  return <BsFillTelephoneFill className={className} />;
};

export const Camera = ({ className }) => {
  return <HiOutlineCamera className={className} />;
};

export const Email = ({ className }) => {
  return <MdEmail className={className} />;
};

export const Clock = ({ className }) => {
  return <AiFillClockCircle className={className} />;
};

export const Linkedin = ({ className }) => {
  return <AiFillLinkedin className={className} />;
};
