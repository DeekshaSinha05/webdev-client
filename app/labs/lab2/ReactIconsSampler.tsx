
import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdStar } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { IoHeart } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <MdStar className="text-4xl text-blue-600" />
        <HiHome className="text-4xl text-blue-600" />
        <IoHeart className="text-4xl text-blue-600" />
        <LuSettings className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
