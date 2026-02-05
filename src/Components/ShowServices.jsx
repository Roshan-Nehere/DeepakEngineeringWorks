import { useState } from "react";
import { Wrench, ChevronRight, Sparkles } from "lucide-react";
import boring from '../assets/Operations/boring.jpeg';
import chamfering from '../assets/Operations/chamfering.jpeg';
import contouring from '../assets/Operations/contouring.jpeg';
import drilling from '../assets/Operations/drilling.jpeg';
import facing from '../assets/Operations/facing.jpeg';
import grooving from '../assets/Operations/grooving.jpeg';
import tapping from '../assets/Operations/tapping.jpeg';
import tapper from '../assets/Operations/tapper.jpeg';
import turning from '../assets/Operations/turning.jpeg';

function ShowServices() {
  const [hoveredService, setHoveredService] = useState(null);

const Images= {
    boring, chamfering, contouring, drilling, facing, grooving, tapping, tapper, turning,
};

  // Add your actual service images here
  const services = [
    {
      id: 1,
      name: "Turning",
      image: "turning",
      description: "Precision cylindrical turning operations for all materials"
    },
    {
      id: 2,
      name: "Facing",
      image: "facing",
      description: "Flat surface finishing with tight tolerances"
    },
    {
      id: 3,
      name: "Chamfering",
      image: "chamfering",
      description: "Edge beveling for smooth transitions and safety"
    },
    {
      id: 4,
      name: "Taper Turning",
      image: "tapper",
      description: "Conical surface machining with precision angles"
    },
    {
      id: 5,
      name: "Tapping",
      image: "tapping",
      description: "Internal thread cutting for various applications"
    },
    {
      id: 6,
      name: "Drilling",
      image: "drilling",
      description: "Hole making operations with precision depth control"
    },
    {
      id: 7,
      name: "Grooving",
      image: "grooving",
      description: "Internal and external groove cutting services"
    },
    {
      id: 8,
      name: "Boring",
      image: "boring",
      description: "Enlarging and finishing of pre-existing holes"
    },
    {
      id: 9,
      name: "Contour Turning",
      image: "contouring",
      description: "Complex profile machining with CNC precision"
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Exo+2:wght@400;500;600;700&display=swap');
        
        .services-page {
          font-family: 'Exo 2', sans-serif;
          min-height: 100vh;
          background: #000000;
          position: relative;
          overflow: hidden;
        }
        
        .services-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(249, 115, 22, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.8) 0%, rgba(0, 0, 0, 1) 100%);
          pointer-events: none;
        }
        
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
          pointer-events: none;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .services-header {
          padding: 5rem 1rem 3rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        
        .header-label {
          font-family: 'Russo One', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(249, 115, 22, 0.2));
          border-left: 4px solid #3b82f6;
          border-right: 4px solid #f97316;
          color: #fff;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .header-label::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: labelShine 3s infinite;
        }
        
        @keyframes labelShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .services-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(2.5rem, 7vw, 5.5rem);
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        
        .title-line-1 {
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          animation: titleGlow 2s ease-in-out infinite alternate;
        }
        
        .title-line-2 {
          background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
          animation: titleGlow 2s ease-in-out infinite alternate-reverse;
        }
        
        @keyframes titleGlow {
          from {
            filter: drop-shadow(0 0 20px currentColor);
          }
          to {
            filter: drop-shadow(0 0 40px currentColor);
          }
        }
        
        .services-subtitle {
          color: #94a3b8;
          font-size: clamp(1rem, 2vw, 1.2rem);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 500;
        }
        
        .services-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1rem 5rem;
          position: relative;
          z-index: 2;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        
        .service-card {
          position: relative;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6));
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 0;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: cardDrop 0.7s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
          opacity: 0;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        @keyframes cardDrop {
          from {
            opacity: 0;
            transform: translateY(-50px) rotateX(30deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #3b82f6, #f97316, #3b82f6, #f97316);
          background-size: 400% 400%;
          opacity: 0;
          transition: opacity 0.5s;
          z-index: -1;
          animation: borderFlow 4s linear infinite;
        }
        
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .service-card:hover {
          transform: translateY(-20px) scale(1.03);
          box-shadow: 
            0 30px 80px rgba(59, 130, 246, 0.4),
            0 0 0 2px rgba(59, 130, 246, 0.5) inset;
          border-color: transparent;
        }
        
        .service-number {
          position: absolute;
          top: -1rem;
          right: 1rem;
          font-family: 'Russo One', sans-serif;
          font-size: 6rem;
          font-weight: 400;
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.3), transparent);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          z-index: 1;
          pointer-events: none;
        }
        
        .service-image-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #000;
        }
        
        .service-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: brightness(0.6) contrast(1.2);
        }
        
        .service-card:hover .service-image {
          transform: scale(1.2) rotate(2deg);
          filter: brightness(0.8) contrast(1.1);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(249, 115, 22, 0.4) 100%);
          opacity: 0;
          transition: opacity 0.5s;
          mix-blend-mode: overlay;
        }
        
        .service-card:hover .image-overlay {
          opacity: 1;
        }
        
        .scan-line {
          position: absolute;
          top: -100%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          box-shadow: 0 0 20px #3b82f6;
          animation: scan 3s linear infinite;
        }
        
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        
        .service-content {
          padding: 2rem 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .service-name {
          font-family: 'Russo One', sans-serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          transition: all 0.4s ease;
        }
        
        .service-name::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #f97316);
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .service-card:hover .service-name {
          color: #3b82f6;
          transform: translateX(10px);
        }
        
        .service-card:hover .service-name::after {
          width: 100%;
        }
        
        .service-description {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .service-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #3b82f6;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-action {
          gap: 1rem;
          color: #f97316;
        }
        
        .tech-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }
        
        .corner-tl {
          top: 10px;
          left: 10px;
          border-right: none;
          border-bottom: none;
        }
        
        .corner-br {
          bottom: 10px;
          right: 10px;
          border-left: none;
          border-top: none;
        }
        
        .service-card:hover .tech-corner {
          border-color: #3b82f6;
          width: 40px;
          height: 40px;
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <div className="services-page">
        <div className="animated-bg"></div>

        {/* Header Section */}
        <header className="services-header">
          <div className="header-label">
            <Wrench size={18} />
            Our Services
            <Sparkles size={18} />
          </div>
          <h1 className="services-title">
            <span className="title-line-1">Expert Machining</span>
            <span className="title-line-2">Services</span>
          </h1>
          <p className="services-subtitle">
            Comprehensive lathe and machining operations delivered with precision and expertise. 
            From basic turning to complex contour machining, we handle it all.
          </p>
        </header>

        {/* Services Grid */}
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card"
                style={{ "--index": index }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Tech Corners */}
                <div className="tech-corner corner-tl"></div>
                <div className="tech-corner corner-br"></div>

                {/* Service Number */}
                <div className="service-number">
                  {String(service.id).padStart(2, '0')}
                </div>

                {/* Image Section */}
                <div className="service-image-wrapper">
                  <img
                    src={Images[service.image]}
                    alt={service.name}
                    className="service-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="scan-line"></div>
                </div>

                {/* Content Section */}
                <div className="service-content">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                  <div className="service-action">
                    Learn More
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowServices;