import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import { BiDonateHeart } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left pattern - Star shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="12.5" height="12.5" patternUnits="userSpaceOnUse">
                {/* Center diamond */}
                <rect x="5" y="5" width="2.5" height="2.5" fill="currentColor" className="text-blue-600" transform="rotate(45 6.25 6.25)" />

                {/* Corner squares */}
                <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />
                <rect x="11" y="0" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />
                <rect x="0" y="11" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />
                <rect x="11" y="11" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />

                {/* Connecting lines */}
                <line x1="1.5" y1="0.75" x2="4.4" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11" y1="0.75" x2="8.1" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="0.75" y1="1.5" x2="4.4" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11.5" y1="1.5" x2="8.1" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />

                <line x1="1.5" y1="11.5" x2="4.4" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11" y1="11.5" x2="8.1" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="0.75" y1="11" x2="4.4" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11.5" y1="11" x2="8.1" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#islamic-pattern)" />
          </svg>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="12.5" height="12.5" patternUnits="userSpaceOnUse">
                {/* Center diamond */}
                <rect x="5" y="5" width="2.5" height="2.5" fill="currentColor" className="text-blue-600" transform="rotate(45 6.25 6.25)" />

                {/* Corner squares */}
                <rect x="0" y="0" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />
                <rect x="11" y="0" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />
                <rect x="0" y="11" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />
                <rect x="11" y="11" width="1.5" height="1.5" fill="currentColor" className="text-blue-600" />

                {/* Connecting lines */}
                <line x1="1.5" y1="0.75" x2="4.4" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11" y1="0.75" x2="8.1" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="0.75" y1="1.5" x2="4.4" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11.5" y1="1.5" x2="8.1" y2="4.4" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />

                <line x1="1.5" y1="11.5" x2="4.4" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11" y1="11.5" x2="8.1" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="0.75" y1="11" x2="4.4" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
                <line x1="11.5" y1="11" x2="8.1" y2="8.1" stroke="currentColor" strokeWidth="0.3" className="text-blue-600" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#islamic-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          {siteConfig.banglaName}
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          {siteConfig.description}
        </div>

      </div>

      <div className="flex gap-3 pb-6 md:pb-16">
        <Link
          isExternal
          className={`${buttonStyles({ variant: "bordered", radius: "full" })} p-4, md:p-6 border-success hover:bg-success/10 `}
          href={siteConfig.links.github}
        >
          আমাদের সম্পর্কে জানুন
        </Link>

        <Link
          isExternal
          className={`${buttonStyles({
            color: "success",
            radius: "full",
            variant: "shadow",
          })} py-5 md:py-7`}
          href={siteConfig.links.docs}
        >
          <BiDonateHeart className="group-hover:animate-bounce text-2xl md:text-5xl text-white " /> <span className="text-md md:text-lg text-white" >মাসিক দাতা হোন</span>
        </Link>

      </div>
    </>
  );
};

export default Hero;