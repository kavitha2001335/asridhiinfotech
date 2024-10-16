'use client'
import Image from "next/image";
import Link from "next/link";
import img1 from "./Hero.jpg"; // Ensure the correct path to the image

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden h-[100vh] pt-[120px] md:pt-[130px] lg:pt-[160px] flex items-center justify-center"
      >
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-[-1] animate-zoom-in">
          <Image
            src={img1}
            alt="Asridhi Info Tech"
            layout="fill"
            objectFit="cover"
            quality={50}
            priority
            className="transition-transform duration-[4000ms] ease-out"
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 h-full flex flex-col justify-center items-start px-5 md:px-10">
          <div className="text-left animate-slide-in">
            {/* Company Name with Sliding Animation */}
            <h1 className="text-white text-4xl md:text-6xl font-light mb-4 md:mb-10 uppercase tracking-wider animate-slide-up">
              Asridhi InfoTech
            </h1>
            <p className="max-w-[400px] md:max-w-[600px] text-base font-medium text-amber-500 sm:text-lg sm:leading-[1.44] mb-2" style={{ color: '#FFFF99' }}>
              We understand that building a successful business starts with assembling the right team.
            </p>
            <p className="max-w-[400px] md:max-w-[600px] text-base font-medium text-amber-500 sm:text-lg sm:leading-[1.44] mb-9" style={{ color: '#FFFF99' }}>
              As a premier staffing and recruiting company, we specialize in connecting businesses with top-tier talent.
            </p>

            {/* Get Started Button with Hover Animation */}
            <div className="hero-content wow fadeInUp max-w-[780px]" data-wow-delay=".2s">
              <Link href="/contact">
                <button className="px-4 md:px-6 py-2 md:py-3 rounded-md mb-10 bg-white hover:bg-gray-400 hover:text-white hover:scale-105 duration-300 transition-transform animate-slide-up delay-[200ms]">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.2);
          }
        }

        .animate-slide-in {
          animation: slideIn 2.5s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 2.5s ease-out;
        }

        .animate-zoom-in {
          animation: zoomIn 10s ease-in-out infinite alternate;
        }
      `}</style>
    </>
  );
};

export default Hero;
