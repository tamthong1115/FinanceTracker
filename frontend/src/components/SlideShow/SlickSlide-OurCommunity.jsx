import React from 'react';
import Slider from "react-slick";

const CommunityData = [
    {
        name: `John Smith`,
        img: `dd6.jpg`,
        review: `I am using this app for more than two years and I could not be happier with the service I got.`
    },
    {
        name: `Emily Tran`,
        img: `dd5.jpg`,
        review: `This app has transformed the way I manage my finances! The budgeting tools are intuitive and
         have helped me save more than I ever thought possible.`
    },
    {
        name: `David Nguyen`,
        img: `dd4.jpg`,
        review: `I love the clean interface and the ease of use. It's made tracking my spending so much simpler. I can't imagine going back to my old methods!`
    },
    {
        name: `Sophia Le`,
        img: `dd3.jpg`,
        review: `The personalized financial insights are incredible! I've learned so much about my spending habits, and I'm on my way to reaching my financial goals!`
    },
    {
        name: `Michael Pham`,
        img: `dd1.jpg`,
        review: `This app is a game-changer! The shared wallet feature is perfect for managing expenses with my partner. It keeps us both on the same page!`
    },
    {
        name: `Anna Vu`,
        img: `dd2.jpg`,
        review: `I appreciate the robust reporting features. I can easily see where my money goes each month, and it motivates me to stick to my budget!`
    }
];

const CommunitySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: CommunityData.length < 3 ? CommunityData.length : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-3/4 m-auto mt-20">
            <Slider {...settings}>
                {CommunityData.map((testimonial, index) => (
                    <div key={index} className={`p-6 rounded-lg shadow-lg bg-gray-200 mx-auto`}>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                <img src="/img/icons8-get-quote-100-colorWhite.png" className="w-8 h-8" alt="" />
                            </div>
                        </div>
                        <p className="mb-4 text-gray-600">{testimonial.review}</p>
                        <div className="flex items-center">
                            <img src={`/img/${testimonial.img}`} alt={`Profile picture of ${testimonial.name}`}
                                 className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">User</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CommunitySlider;
