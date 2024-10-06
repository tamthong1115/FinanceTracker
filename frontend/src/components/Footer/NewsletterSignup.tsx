import React, { useState, FormEvent, ChangeEvent } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý logic đăng ký nhận bản tin ở đây
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

export default NewsletterSignup;
