import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lath1 from "../assets/lath1.png"
import lath2 from "../assets/lath2.png"
import lath3 from "../assets/lath3.png"

function ShowContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // You'll need to replace these with your actual company images
  const images = [
   lath1,lath2,lath3
  ];

  const services = [
    "Heavy Lathe Job Works",
    "Machining Solutions",
    "Expert Turning & Boring",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&display=swap');
        
        .showcase-container {
          position: relative;
          width: 100%;
          height: calc(100vh - 6rem);
          overflow: hidden;
          background: #000;
        }
        
        .slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        
        .slide-entering {
          opacity: 0;
          transform: scale(1.1);
        }
        
        .slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }
        
        .slide-exiting {
          opacity: 0;
          transform: scale(0.95);
          z-index: 1;
        }
        
        .overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.4) 0%,
            rgba(30, 41, 59, 0.3) 25%,
            rgba(15, 23, 42, 0.2) 50%,
            rgba(30, 41, 59, 0.3) 75%,
            rgba(15, 23, 42, 0.4) 100%
          );
          z-index: 3;
        }
        
        .overlay-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(59, 130, 246, 0.03) 2px,
              rgba(59, 130, 246, 0.03) 4px
            );
          z-index: 4;
          pointer-events: none;
        }
        
        .content-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
          padding: 2rem;
        }
        
        .company-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 1rem;
          line-height: 1.1;
          display: flex;
          flex-wrap: wrap;
          padding:0px 10px;
          border-radius:10px;
          justify-content: center;
          gap: clamp(0.5rem, 2vw, 1.5rem);
        //   background-color:black
         
        }
        
        .title-word {
          display: inline-block;
          background: linear-gradient(135deg, #fff 0%, #3b82f6 50%, #f97316 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: wordSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          transform: translateY(-50px) rotateX(-90deg);
          animation-delay: calc(var(--index) * 0.2s);
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
        }
        
        @keyframes wordSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-50px) rotateX(-90deg);
          }
          60% {
            transform: translateY(10px) rotateX(10deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        .capacity-badge {
          font-family: 'Rajdhani', sans-serif;
          display: inline-block;
          padding: 0.75rem 2rem;
          background: rgba(249, 115, 22, 0.15);
          border: 2px solid rgba(249, 115, 22, 0.5);
          border-radius: 50px;
          color: #f97316;
          font-weight: 700;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          animation: badgePulse 2s ease-in-out infinite;
          backdrop-filter: blur(10px);
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.6);
          }
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          width: 100%;
          margin-top: 2rem;
        }
        
        .service-card {
          font-family: 'Rajdhani', sans-serif;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: cardSlideIn 0.8s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
          opacity: 0;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
          transition: left 0.6s;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        }
        
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .service-text {
          color: #fff;
          font-size: clamp(1rem, 1vw, 1rem);
          font-weight: 600;
          letter-spacing: 0.05em;
          position: relative;
          z-index: 1;
        }
        
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 15;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .nav-button:hover {
          background: rgba(59, 130, 246, 0.3);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }
        
        .nav-button-left {
          left: 2rem;
        }
        
        .nav-button-right {
          right: 2rem;
        }
        
        .dots-container {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 15;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .dot:hover {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }
        
        .dot-active {
          background: linear-gradient(135deg, #3b82f6, #f97316);
          width: 40px;
          border-radius: 10px;
          border-color: rgba(255, 255, 255, 0.5);
        }
        
        @media (max-width: 768px) {
          .showcase-container {
            height: calc(100vh - 5rem);
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .nav-button {
            padding: 0.75rem;
          }
          
          .nav-button-left {
            left: 1rem;
          }
          
          .nav-button-right {
            right: 1rem;
          }
        }
      `}</style>

      <div className="showcase-container">
        {/* Background Images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Showcase ${index + 1}`}
            className={`slide-image ${
              index === currentSlide
                ? "slide-active"
                : index === (currentSlide - 1 + images.length) % images.length
                ? "slide-exiting"
                : "slide-entering"
            }`}
          />
        ))}

        {/* Overlay Gradient */}
        <div className="overlay-gradient"></div>
       

        {/* Content */}
        <div className="content-wrapper">
          <div className="capacity-badge">10 KG TO 5 TON CAPACITY</div>
          
          <h1 className="company-title">
            {["Deepak", "Engineering", "Works"].map((word, index) => (
              <span
                key={index}
                className="title-word"
                style={{ "--index": index }}
              >
                {word}
              </span>
            ))}
          </h1>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{ "--index": index }}
              >
                <p className="service-text">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="nav-button nav-button-left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="nav-button nav-button-right"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="dots-container">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${index === currentSlide ? "dot-active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowContainer;