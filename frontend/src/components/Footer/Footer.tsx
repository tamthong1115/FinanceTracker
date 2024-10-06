import React from "react";
import FooterLinks from "./FooterLinks";
import NewsletterSignup from "./NewsletterSignup";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";

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
