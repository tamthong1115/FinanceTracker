const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">
            Finance Tracker giúp bạn kiểm soát tài chính tốt hơn
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chúng tôi giúp bạn quản lý tài chính một cách thông minh và hiệu quả
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              Tại Finance Tracker, chúng tôi làm việc mỗi ngày để
              <span className="text-blue-600">
                {" "}
                giúp mọi người đưa ra quyết định tài chính thông minh
              </span>
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Chúng tôi tin rằng quản lý tài chính nên đơn giản như mua sắm
                trực tuyến. Nó có thể được thực hiện mọi lúc, mọi nơi chỉ với vài
                cú nhấp chuột.
              </p>
              <p>
                Khởi đầu từ một công cụ theo dõi chi tiêu đơn giản cho một nhóm
                nhỏ, giờ đây chúng tôi đã phát triển thành ứng dụng tài chính cá
                nhân phục vụ hàng nghìn người dùng từ hầu hết các quốc gia trên
                thế giới.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/dd1.jpg"
              alt="team"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Gặp gỡ <span className="text-blue-600">đội ngũ</span> của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Card Template */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd3.jpg"
                alt="Tam Thông"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Tam Thông
              </h3>
              <p className="text-blue-600 text-center mb-4">Trưởng nhóm</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:david@example.com"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd4.jpg"
                alt="Gia Bảo"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Gia Bảo
              </h3>
              <p className="text-blue-600 text-center mb-4">Người đóng góp</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:2251120334@ut.edu.vn"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd5.jpg"
                alt="Ngọc Đặng"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Ngọc Đặng
              </h3>
              <p className="text-blue-600 text-center mb-4">Người đóng góp</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:ndang2319@gmail.com"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
              <img
                src="/img/dd6.jpg"
                alt="Vũ Hoàng"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 text-center">
                Vũ Hoàng
              </h3>
              <p className="text-blue-600 text-center mb-4">Người đóng góp</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:pavla@example.com"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
