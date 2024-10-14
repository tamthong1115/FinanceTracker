import SlideShow from "../../components/SlideShow/SlideShow.js";
import PropTypes from "prop-types";
import CommunitySlider from "../../components/SlideShow/SlickSlide-OurCommunity.js";

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
  <div className="bg-white shadow-lg rounded-lg p-6 text-left relative w-80 h-64">
    <div className="absolute -top-6 left-6 bg-white rounded-full bg-amber-200 p-2 shadow-md">
      <img src={imageSrc} alt="Feature icon" className="w-12 h-12" />
    </div>
    <h3 className="text-lg font-bold mb-2 mt-12">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const OurFeature = ({ imgSrc, ourTitle, ourDescription }: OurFeatureProps) => (
  <div className="text-left mb-4 mx-auto w-64 h-auto ">
    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border mb-2">
      <img src={imgSrc} alt={ourTitle} className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mb-2">{ourTitle}</h3>
    <p className="text-gray-600">{ourDescription}</p>
  </div>
);

const Home = () => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   };

  return (
    <div className="text-center h-max mx-0 px-0">
      <div className="text-center h-screen">
        <SlideShow />
      </div>

      <div className="flex flex-col md:flex-row justify-between text-left items-center md md:items-start p-8 w-lvw">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-professional-100-basic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-professional-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              Professional Consultants
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              The team of professional consultants provides in-depth and
              tailored advice based on your financial situation, helping you
              make smart and secure investment decisions.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-chart-100-colorBasic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-chart-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              Comprehensive Services
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              With comprehensive services, you can automate financial
              management, optimize savings, and receive detailed reports on your
              financial situation anytime, anywhere.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-add-dollar-100-colorBasic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-add-dollar-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              A Culture that Delivers
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              A culture committed to delivering financial results in our
              services helps customers feel secure and confident in their
              personal financial management process.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-4 scale-150 rounded-full relative  items-center justify-center flex group-hover:bg-gray-100">
                <img
                  src="/img/icons8-company-100-colorBasic.png"
                  alt="First Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src="/img/icons8-related-companies-100-colorBlue.png"
                  alt="Second Img"
                  className="absolute top-1 left-1 inset-0 w-6 h-6 object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white ">
              Industry Experience
            </h3>
            <p className="text-gray-600 group-hover:text-white ">
              With many years of experience in the financial industry, we
              understand the challenges our clients face and are always ready to
              provide the most suitable solutions.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 hidden md:block">
          <h2 className="text-gray-600 text-sm uppercase mb-2">
            About Our Corporation
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            More than 40M+ Trusted Our Financial & Consultation Institution
          </h1>
          <p className="text-gray-600 mb-4">
            At Our Corporation, we pride ourselves on over a decade of
            experience in the financial and consultation industry. Our dedicated
            team of experts is committed to providing personalized solutions
            tailored to meet the unique needs of each client.
          </p>
          <p className="text-gray-600 mb-4">
            With a focus on integrity and transparency, we have earned the trust
            of millions who rely on us for sound financial advice and strategic
            planning.
          </p>
          <p className="text-gray-600 mb-4">
            {" "}
            Whether you're looking to optimize your investments, manage your
            budget, or navigate complex financial landscapes, we are here to
            guide you every step of the way.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-screen min-h-screen bg-gradient-to-b from-white to-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28 justify-evenly flex">
          <FeatureCard
            imageSrc="img/icons8-in-progress.gif"
            title="Have perfect control"
            description="over all your cash expenses, bank accounts, E-Wallets and crypto wallets."
          />
          <FeatureCard
            imageSrc="img/icons8-chart-100.png"
            title="Get a quick overview"
            description="about your total incomes and expenses at a glance and in one place."
          />
          <FeatureCard
            imageSrc="img/icons8-money-bag-100.png"
            title="Use our smart budgets"
            description="to save money for a new car, dreamy vacation or top university."
          />
        </div>
      </div>

      <div className="bg-white p-8 w-screen h-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Features <span className="font-normal">our users love</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OurFeature
            imgSrc="img/icons8-wallet-100.png"
            ourTitle="Shared wallets"
            ourDescription="are popular among couples, families and roommates who handle their finances in Spendee."
          />
          <OurFeature
            imgSrc="img/icons8-bank-100.png"
            ourTitle="Connecting bank accounts"
            ourDescription="to Spendee is preferred by people paying mostly by card."
          />
          <OurFeature
            imgSrc="img/icons8-user-100.png"
            ourTitle="Customize Spendee"
            ourDescription="Customize your categories, add a picture or a location to every expense."
          />
          <OurFeature
            imgSrc="img/icons8-currencies-100.png"
            ourTitle="Multiple currencies"
            ourDescription="are favoured by travellers and digital nomads managing money in more currencies."
          />
          <OurFeature
            imgSrc="img/icons8-google-alerts-100.png"
            ourTitle="Alerts and reminders"
            ourDescription="will notify you to pay the bill or not to exceed the budget."
          />
          <OurFeature
            imgSrc="img/icons8-sync-100.png"
            ourTitle="Sync and backup"
            ourDescription="is valuable for everyone using Spendee across devices and sharing Spendee with others."
          />
        </div>
      </div>

      <div className="w-screen mx-auto py-16 w-screen ">
        <div className="text-center mb-12">
          <h2 className="text-sm text-gray-400 uppercase">Testimonial</h2>
          <h1 className="text-4xl font-bold text-gray-800">Happy Customers</h1>
        </div>

        <CommunitySlider />
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
