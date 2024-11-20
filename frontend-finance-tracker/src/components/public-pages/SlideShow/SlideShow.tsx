import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface Background {
    url: string;
    title: string;
    subtitle: string;
}

const SlideShow: React.FC = () => {
    const backgrounds: Background[] = [
        {
            url: 'img/Finace-tracker-background.webp',
            title: 'Xây Dựng Kế Hoạch Tài Chính Cùng Chuyên Gia',
            subtitle: 'Kiểm soát chi tiêu, đầu tư thông minh và đạt được mục tiêu tài chính của bạn'
        },
        {
            url: 'img/Finace-tracker-background2.webp',
            title: 'Đồng Hành Cùng Bạn Trên Con Đường Tài Chính',
            subtitle: 'Giải pháp quản lý tài chính toàn diện cho cuộc sống thịnh vượng'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000); // Increased to 5 seconds for better readability
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="slideshow relative h-[75vh] w-full overflow-hidden">
            <div
                className="relative h-full w-full bg-cover bg-center transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${backgrounds[currentSlide].url})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
                    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        {backgrounds[currentSlide].title}
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg font-medium text-gray-200 md:text-xl">
                        {backgrounds[currentSlide].subtitle}
                    </p>
                    <Link
                        to="/login"
                        className="group relative inline-flex items-center overflow-hidden rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                        BẮT ĐẦU NGAY
                        <svg
                            className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SlideShow;



