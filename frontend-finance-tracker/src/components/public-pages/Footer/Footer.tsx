import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
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
        { text: "Câu hỏi thường gặp", url: "/faq" },
        { text: "Trung tâm trợ giúp", url: "/help" },
        { text: "Liên hệ", url: "/contact" },
      ],
    },
    {
      title: "Công ty",
      links: [
        { text: "Về chúng tôi", url: "/about-us" },
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

// Newsletter component
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Đăng ký với email:", email);
    setEmail("");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h3 className="footer-heading">Đăng ký nhận bản tin</h3>
      <p className="mt-4 text-base text-gray-300">
        Nhận các mẹo tài chính mới nhất và cập nhật sản phẩm.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Địa chỉ email
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          value={email}
          onChange={handleEmailChange}
          className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
          placeholder="Nhập email của bạn"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
          >
            Đăng ký
          </button>
        </div>
      </form>
    </div>
  );
};

const Copyright: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
      &copy; {currentYear} FinanceTracker. Đã đăng ký bản quyền.
    </p>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <FooterLinks />
          <div className="mt-8 xl:mt-0">
            <NewsletterSignup />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <SocialLinks />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
