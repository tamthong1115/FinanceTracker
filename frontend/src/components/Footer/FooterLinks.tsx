import React from "react";
import { Link } from "react-router-dom";

interface LinkItem {
  text: string;
  url: string;
}

interface FooterSectionProps {
  title: string;
  links: LinkItem[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="footer-heading">{title}</h3>
    <ul className="mt-4 space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.url} className="footer-link">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterLinks: React.FC = () => {
  const sections: FooterSectionProps[] = [
    {
      title: "Solutions",
      links: [
        { text: "Budget Management", url: "/budget" },
        { text: "Investments", url: "/investments" },
        { text: "Savings", url: "/savings" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "FAQ", url: "/faq" },
        { text: "Help Center", url: "/help" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/about" },
        { text: "Blog", url: "/blog" },
        { text: "Careers", url: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms of Use", url: "/terms" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} links={section.links} />
      ))}
    </div>
  );
};

export default FooterLinks;
