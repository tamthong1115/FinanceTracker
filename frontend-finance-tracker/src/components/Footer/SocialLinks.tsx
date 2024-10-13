import React from "react";
import { FacebookIcon, TwitterIcon, GitHubIcon } from "./Icons";

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, ariaLabel, icon }) => (
  <a href={href} className="social-link" aria-label={ariaLabel}>
    {icon}
  </a>
);

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      href: "#",
      ariaLabel: "Facebook",
      icon: <FacebookIcon />,
    },
    {
      href: "#",
      ariaLabel: "Twitter",
      icon: <TwitterIcon />,
    },
    {
      href: "#",
      ariaLabel: "GitHub",
      icon: <GitHubIcon />,
    },
  ];

  return (
    <div className="flex space-x-6 md:order-2">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;
