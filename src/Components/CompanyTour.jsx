
import { useState } from "react";
import { Factory, Building2 } from "lucide-react";
import compyinside from '../assets/compinside.png';
import compoutside from '../assets/compoutside.png';


function CompanyTour() {
  const [activeView, setActiveView] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@600;700;800&family=Saira:wght@500;600&display=swap');
        
        .tour-section {
          font-family: 'Saira', sans-serif;
          position: relative;
          padding: 4rem 0 5rem;
          background: linear-gradient(180deg, #0a0e1a 0%, #1a1f35 50%, #0a0e1a 100%);
          overflow: hidden;
        }
        
        .tour-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(249, 115, 22, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .tour-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
          padding: 0 1rem;
        }
        
        .tour-title {
          font-family: 'Kanit', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: 0.02em;
          margin-bottom: 0;
          line-height: 1.2;
        }
        
        .title-text {
          background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #f97316 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .tour-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 2;
        }
        
        .tour-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 550px), 1fr));
          gap: 2rem;
        }
        
        .tour-card {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: cardSlideIn 0.8s ease-out forwards;
          animation-delay: calc(var(--index) * 0.2s);
          opacity: 0;
          border: 2px solid rgba(59, 130, 246, 0.2);
        }
        
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .tour-card:hover {
          transform: translateY(-15px);
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 30px 80px rgba(59, 130, 246, 0.4);
        }
        
        .tour-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: brightness(0.9);
        }
        
        .tour-card:hover .tour-image {
          transform: scale(1.1);
          filter: brightness(1);
        }
        
        .tour-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
          z-index: 2;
          transition: background 0.5s;
        }
        
        .tour-card:hover .tour-overlay {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%);
        }
        
        .tour-icon-wrapper {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .tour-card:hover .tour-icon-wrapper {
          transform: rotate(360deg) scale(1.15);
          background: rgba(59, 130, 246, 0.4);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
        }
        
        .tour-icon {
          color: #3b82f6;
        }
        
        .tour-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          z-index: 3;
        }
        
        .tour-heading {
          font-family: 'Kanit', sans-serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
          margin-bottom: 0;
          line-height: 1.1;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        
        .tour-card:hover .tour-heading {
          color: #3b82f6;
          transform: translateX(10px);
        }
        
        @media (max-width: 768px) {
          .tour-grid {
            grid-template-columns: 1fr;
          }
          
          .tour-card {
            height: 350px;
          }
        }
      `}</style>

      <section className="tour-section">
        {/* Header */}
        <div className="tour-header">
          <h2 className="tour-title">
            <span className="title-text">Company Tour</span>
          </h2>
        </div>

        {/* Tour Cards */}
        <div className="tour-container">
          <div className="tour-grid">
            
            {/* Inside View Card */}
            <div 
              className="tour-card"
              style={{ "--index": 0 }}
              onMouseEnter={() => setActiveView('inside')}
              onMouseLeave={() => setActiveView(null)}
            >
              <img
                src={compyinside}
                alt="Inside Factory"
                className="tour-image"
              />
              
              <div className="tour-overlay"></div>
              
              <div className="tour-icon-wrapper">
                <Factory size={28} className="tour-icon" />
              </div>
              
              <div className="tour-content">
                <h3 className="tour-heading">Inside View</h3>
              </div>
            </div>

            {/* Outside View Card */}
            <div 
              className="tour-card"
              style={{ "--index": 1 }}
              onMouseEnter={() => setActiveView('outside')}
              onMouseLeave={() => setActiveView(null)}
            >
              <img
                src={compoutside}
                alt="Outside Building"
                className="tour-image"
              />
              
              <div className="tour-overlay"></div>
              
              <div className="tour-icon-wrapper">
                <Building2 size={28} className="tour-icon" />
              </div>
              
              <div className="tour-content">
                <h3 className="tour-heading">Outside View</h3>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyTour;