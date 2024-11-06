import ContactForm from "../../components/ContactForm/ContactForm";

const AboutUs = () => {
  return (
    <div>
    
    <div className="container mx-auto p-8 flex items-center justify-center">
      <div className="text-center text-5xl w-full lg:w-2/3 text-gray-700">
      Finance Tracker helps <b>you <br></br> to get your money into shape.</b>
      </div>
    </div>
    <div className="green-circle right-0"></div>
    <div className="story circle">
      <div className="container mx-auto p-8">
      <div className="row flex flex-wrap">
          <div className="col-12 lg:col-6">
            <div className="story__content flex flex-col lg:flex-row items-start">
              <div className="flex-1">
                <h3 className="story__title text-2xl font-bold mb-4 text-gray-700">
                  In Finance Tracker, we all come to work every day to <b>enable people make smart decisions about their money every day.</b>
                </h3>
                <p className="mb-4 text-gray-700">
                  We believe that managing finance should be as effortless as shopping online. It should be done anytime, anywhere and in few clicks.
                </p>
                <p className="mb-4 text-gray-700">
                  What started as a simple expense tracker for a small group of people has grown into personal finance app that brings beauty to finance of thousands users from almost every country in the world.
                </p>
              </div>
              <img src="/img/dd1.jpg" alt="team" className="story__team w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4" />
            </div>
          </div>
        </div>
         <div className="green-circle left-0"></div>
        <div className="row flex flex-wrap items-center">
        <div className="col-12 lg:col-6">
            <div className="story__content ml-auto flex flex-col lg:flex-row items-center lg:items-start">
            <img src="/img/dd2.jpg" alt="team" className="story__team w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4 lg:mr-2" />
              <div className="flex-1">
                <h3 className="story__title  text-2xl font-bold mb-4 text-gray-700">
                  We want to make your <b>financial life stress-free.</b>
                </h3>
                <p className=" mb-4 text-gray-700">
                  Finance Tracker helps you to get your finances into the shape so that you don't need to stress about every dollar that you spend. If you know how much and what on you spend, it is easier to change your financial habits, if you feel like that's what you need.
                </p>
                <p className=" mb-4 text-gray-700">
                  Having a complete picture of your finances in one place, make them easier to manage. Our mission here is to help you leave your financial ghosts behind, overcome your financial fears and treat yourself with financial wisdom instead.
                </p>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="team-section">
  <h2>Meet the team</h2>
   
  <div className="team-cards">
    <div className="team-card">
      <img src="/img/dd3.jpg" alt="Tam Thông" />
      <h3>Tam Thông</h3>
      <p>Leader</p>
      <div className="social-links">
        <a href="mailto:david@example.com">✉</a>
      </div>
    </div>

    <div className="team-card">
      <img src="/img/dd4.jpg" alt="Gia Bảo" />
      <h3>Gia Bảo</h3>
      <p>Contributor</p>
      <div className="social-links">
        <a href="mailto:2251120334@ut.edu.vn">✉</a>
      </div>
    </div>

    <div className="team-card">
      <img src="/img/dd5.jpg" alt="Ngọc Đặng" />
      <h3>Ngọc Đặng</h3>
      <p>Contributor</p>
      <div className="social-links">
        <a href="mailto:ndang2319@gmail.com">✉</a>
      </div>
    </div>
    <div className="team-card">
      <img src="/img/dd6.jpg" alt="Vũ Hoàng" />
      <h3>Vũ Hoàng</h3>
      <p>Contributor</p>
      <div className="social-links">
        <a href="mailto:pavla@example.com">✉</a>
      </div>
    </div>
    <div className="green-circle right-0"></div>
    </div>
      
  </div>
  <ContactForm />
</div>

  );
};

export default AboutUs;
