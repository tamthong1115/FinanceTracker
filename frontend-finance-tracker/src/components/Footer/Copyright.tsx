import React from "react";

const Copyright: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
      &copy; {currentYear} FinanceTracker. All rights reserved.
    </p>
  );
};

export default Copyright;
