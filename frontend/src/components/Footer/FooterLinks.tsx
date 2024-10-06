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
      title: "Giải pháp",
      links: [
        { text: "Quản lý ngân sách", url: "/budget" },
        { text: "Đầu tư", url: "/investments" },
        { text: "Tiết kiệm", url: "/savings" },
      ],
    },
    {
      title: "Hỗ trợ",
      links: [
        { text: "FAQ", url: "/faq" },
        { text: "Trung tâm trợ giúp", url: "/help" },
        { text: "Liên hệ", url: "/contact" },
      ],
    },
    {
      title: "Công ty",
      links: [
        { text: "Về chúng tôi", url: "/about" },
        { text: "Blog", url: "/blog" },
        { text: "Tuyển dụng", url: "/careers" },
      ],
    },
    {
      title: "Pháp lý",
      links: [
        { text: "Chính sách bảo mật", url: "/privacy" },
        { text: "Điều khoản sử dụng", url: "/terms" },
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
