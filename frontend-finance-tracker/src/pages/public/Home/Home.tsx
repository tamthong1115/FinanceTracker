import SlideShow from "../../../components/public-pages/SlideShow/SlideShow.js";
import PropTypes from "prop-types";
import CommunitySlider from "../../../components/public-pages/SlideShow/SlickSlide-OurCommunity.js";
import useDocumentTitle from '../../../hooks/useDocumentTitle';

type FeatureCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

type OurFeatureProps = {
  imgSrc: string;
  ourTitle: string;
  ourDescription: string;
};

const FeatureCard = ({ imageSrc, title, description }: FeatureCardProps) => (
  <div className="bg-white shadow-lg rounded-xl p-8 text-left relative w-full transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
    <div className="absolute -top-8 left-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-4 shadow-lg">
      <img src={imageSrc} alt="Feature icon" className="w-12 h-12 filter invert" />
    </div>
    <h3 className="text-xl font-bold mb-4 mt-12 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const OurFeature = ({ imgSrc, ourTitle, ourDescription }: OurFeatureProps) => (
  <div className="text-left p-6 rounded-xl hover:bg-blue-50 transition-all duration-300">
    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform duration-300">
      <img src={imgSrc} alt={ourTitle} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800">{ourTitle}</h3>
    <p className="text-gray-600 leading-relaxed">{ourDescription}</p>
  </div>
);

const Home = () => {
  useDocumentTitle('Home');
  return (
    <div className="text-center min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="text-center h-screen">
        <SlideShow />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Tính năng <span className="text-blue-600">nổi bật</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            imageSrc="img/icons8-in-progress.gif"
            title="Kiểm soát hoàn hảo"
            description="Quản lý mọi chi tiêu tiền mặt, tài khoản ngân hàng, ví điện tử và ví tiền mã hóa của bạn."
          />
          <FeatureCard
            imageSrc="img/icons8-chart-100.png"
            title="Tổng quan nhanh chóng"
            description="Xem tổng quan về thu nhập và chi tiêu của bạn một cách nhanh chóng và tập trung tại một nơi."
          />
          <FeatureCard
            imageSrc="img/icons8-money-bag-100.png"
            title="Ngân sách thông minh"
            description="Tiết kiệm tiền cho xe mới, kỳ nghỉ mơ ước hoặc trường đại học hàng đầu."
          />
        </div>
      </div>

      {/* Our Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tính năng <span className="text-blue-600">người dùng yêu thích</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OurFeature
              imgSrc="img/icons8-wallet-100.png"
              ourTitle="Ví chung"
              ourDescription="Phổ biến trong các cặp đôi, gia đình và bạn cùng phòng quản lý tài chính chung."
            />
            <OurFeature
              imgSrc="img/icons8-bank-100.png"
              ourTitle="Liên kết tài khoản ngân hàng"
              ourDescription="Được ưa chuộng bởi những người thường xuyên thanh toán bằng thẻ."
            />
            <OurFeature
              imgSrc="img/icons8-user-100.png"
              ourTitle="Tùy chỉnh cá nhân hóa"
              ourDescription="Tùy chỉnh danh mục, thêm hình ảnh hoặc vị trí cho mọi khoản chi."
            />
            <OurFeature
              imgSrc="img/icons8-currencies-100.png"
              ourTitle="Đa tiền tệ"
              ourDescription="Lý tưởng cho người đi du lịch và người hay di chuyển quản lý tiền nhiều loại tiền tệ."
            />
            <OurFeature
              imgSrc="img/icons8-google-alerts-100.png"
              ourTitle="Cảnh báo và nhắc nhở"
              ourDescription="Thông báo khi đến hạn thanh toán hoặc vượt quá ngân sách."
            />
            <OurFeature
              imgSrc="img/icons8-sync-100.png"
              ourTitle="Đồng bộ và sao lưu"
              ourDescription="Hữu ích cho người dùng nhiều thiết bị và chia sẻ tài khoản với người khác."
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm text-blue-600 uppercase font-bold tracking-wider mb-2">Đánh giá</h2>
            <h1 className="text-4xl font-bold text-gray-800">Khách hàng hài lòng</h1>
          </div>
          <CommunitySlider />
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
OurFeature.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  ourTitle: PropTypes.string.isRequired,
  ourDescription: PropTypes.string.isRequired,
};

export default Home;
