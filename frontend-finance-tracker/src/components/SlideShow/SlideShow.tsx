import  React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";


interface Background {
    url: string;
    title: string;
}

const SlideShow : React.FC = () => {
    const backgrounds: Background[] = [
        { url: 'img/Finace-tracker-background.webp', title: 'Build Your Financial Plan With Our Specialists' },
        { url: 'img/Finace-tracker-background2.webp', title: 'We\'re Always Here To Give Financial Help!' },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % backgrounds.length);
    };
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000);
        return () => clearInterval(intervalId);
    },[])

    return (
        <div className="slideshow px-0 mx-0">
            <div
                className="relative bg-cover bg-center"
                style={{backgroundImage: `url(${backgrounds[currentSlide].url})`, width: '100vw', height: '75vh'}}
            >
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-4/5 w-full text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">{backgrounds[currentSlide].title}</h1>
                    <p className="text-lg mb-8">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.
                    </p>
                    <button
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition duration-300">
                        <Link to="/">GET STARTED -&gt; </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SlideShow;



