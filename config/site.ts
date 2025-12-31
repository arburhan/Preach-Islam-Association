const logoSrc = '/logo.png';
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Preach Islam Association",
  banglaName: "প্রিচ ইসলাম অ্যাসোসিয়েশন",
  description: "অসহায়-প্রান্তিক-গরীব-দুঃখী সকল জাতি-ধর্মের মানুষের কল্যাণে নিবেদিত একটি সমাজকল্যাণমূলক স্বেচ্ছাসেবী সংস্থা।",
  mobile: "+8801772-084789",
  email: "info@preach-islam.org",
  location: "বাসা নং ১৬১, সেক্টর-৩, উপশহর, সপুরা-৬২০৩, রাজশাহী ।",
  logoSrc: logoSrc,
  navItems: [
    {
      label: "আমাদের সম্পর্কে",
      href: "/about",
    },
    {
      label: "লক্ষ্য ও উদ্দেশ্য",
      href: "/vission-mission",
    },
    {
      label: "পরিচালনা প্রকল্প",
      href: "/project-management",
    },
    {
      label: "বিবাহ প্লাটফর্ম",
      href: "/marriage",
    },
    {
      label: "ইভেন্টস",
      href: "/events",
    },
    {
      label: "যোগাযোগ",
      href: "/contacts",
    },
    {
      label: "আরও দেখুন",
      href: "#",
      children: [
        { label: "ভলান্টিয়ার", href: "/volunteer" },
        { label: "লগ ইন", href: "/auth/login" },
        { label: "শিক্ষা", href: "/services/education" },
        { label: "আর্থিক সহায়তা", href: "/services/aid" },

      ],
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
