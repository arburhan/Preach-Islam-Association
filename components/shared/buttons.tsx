import Link from "next/link";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@heroui/theme";
import { BiDonateHeart } from "react-icons/bi";

export const JoinUs = () => (
    <Link
        className="px-8 py-2 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        href={"/about"}
    >আমাদের সাথে যোগ দিন
    </Link>
);

export const Donate = () => (
    <Link
        rel="noopener noreferrer"
        className={`${buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
        })} px-8  py-5 md:py-7`}
        href={"/donation"}
    >
        <BiDonateHeart className="group-hover:animate-bounce text-2xl md:text-5xl text-white " />
        <span className="text-md md:text-lg text-white font-semibold">মাসিক দাতা হোন</span>
    </Link>
);