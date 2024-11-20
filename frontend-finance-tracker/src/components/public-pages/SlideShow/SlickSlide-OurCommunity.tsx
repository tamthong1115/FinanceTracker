import React from "react";
import Slider from "react-slick";

interface Testimonial {
  name: string;
  img: string;
  review: string;
}

const CommunityData: Testimonial[] = [
  {
    name: `Minh Anh`,
    img: `dd6.jpg`,
    review: `Tôi đã sử dụng ứng dụng này hơn hai năm và tôi rất hài lòng với dịch vụ mà tôi nhận được.`,
  },
  {
    name: `Ngọc Trân`,
    img: `dd5.jpg`,
    review: `Ứng dụng này đã thay đổi hoàn toàn cách tôi quản lý tài chính! Các công cụ lập ngân sách rất trực quan và giúp tôi tiết kiệm nhiều hơn những gì tôi nghĩ là có thể.`,
  },
  {
    name: `Đức Nguyễn`,
    img: `dd4.jpg`,
    review: `Tôi thích giao diện đơn giản và dễ sử dụng. Nó giúp việc theo dõi chi tiêu của tôi dễ dàng hơn rất nhiều. Tôi không thể tưởng tượng quay lại phương pháp cũ!`,
  },
  {
    name: `Thu Lê`,
    img: `dd3.jpg`,
    review: `Những phân tích tài chính cá nhân thật tuyệt vời! Tôi đã học được rất nhiều về thói quen chi tiêu của mình, và tôi đang trên đường đạt được mục tiêu tài chính!`,
  },
  {
    name: `Minh Phạm`,
    img: `dd1.jpg`,
    review: `Ứng dụng này thực sự là một bước đột phá! Tính năng ví chung rất hoàn hảo để quản lý chi tiêu với bạn đời. Nó giúp chúng tôi luôn đồng bộ với nhau!`,
  },
  {
    name: `Ánh Vũ`,
    img: `dd2.jpg`,
    review: `Tôi đánh giá cao các tính năng báo cáo chi tiết. Tôi có thể dễ dàng theo dõi tiền của mình đã chi tiêu như thế nào mỗi tháng, và nó thúc đẩy tôi tuân thủ ngân sách!`,
  },
];

const CommunitySlider: React.FC = () => {
  const settings: import("react-slick").Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: CommunityData.length < 3 ? CommunityData.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/4 mx-auto mt-16">
      <Slider {...settings}>
        {CommunityData.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div
              className="bg-white rounded-2xl shadow-lg p-8 mx-2 my-4 
                          transform hover:scale-105 transition-all duration-300 
                          hover:shadow-xl border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 
                              flex items-center justify-center shadow-md"
                >
                  <img
                    src="/img/icons8-get-quote-100-colorWhite.png"
                    className="w-8 h-8 opacity-90"
                    alt="Quote icon"
                  />
                </div>
              </div>

              {/* Review Text */}
              <p
                className="text-gray-700 text-lg leading-relaxed mb-8 
                          font-normal italic"
              >
                "{testimonial.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center border-t pt-6 mt-6">
                <div className="relative">
                  <img
                    src={`/img/${testimonial.img}`}
                    alt={`Profile picture of ${testimonial.name}`}
                    className="w-14 h-14 rounded-full object-cover border-2 
                              border-blue-100 shadow-sm"
                  />
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 
                                bg-blue-500 rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">Người dùng</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommunitySlider;
