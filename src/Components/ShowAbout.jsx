import { useState } from "react";
import { Award, Target, Users, Wrench, Mail, Linkedin } from "lucide-react";
import papa from "../assets/Team/papa.jpeg";
import deepak from "../assets/Team/deepak.jpeg";
import roshan from "../assets/Team/roshan.png";
import tushar from "../assets/Team/tushar.jpeg";
import shubham from "../assets/Team/shubham.jpeg";
import rupesh from "../assets/Team/rupesh.jpeg";


const images= {
  papa, deepak, roshan, tushar, shubham,rupesh
};

function ShowAbout() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { icon: <Award size={32} />, value: "20+", label: "Years Experience" },
    { icon: <Users size={32} />, value: "500+", label: "Projects Completed" },
    { icon: <Wrench size={32} />, value: "10+", label: "Expert Team" },
    { icon: <Target size={32} />, value: "100%", label: "Client Satisfaction" },
  ];

  const teamMembers = [
    {
      name: "Late Dattatray Ganpat Nehere",
      position: "Founder & CEO",
      image: "papa",
      bio: "Visionary leader with 35+ years of experience in precision engineering and manufacturing excellence.",
      email: "rajesh@deepakengineering.com",
      linkedin: "#"
    },
    {
      name: "Deepak Nehere",
      position: "Owner & Managing Director",
      image: "deepak",
      bio: "Strategic mind behind operational excellence, driving innovation and sustainable growth.",
      email: "priya@deepakengineering.com",
      linkedin: "#"
    },
    {
      name: "Tushar Ghewade",
      position: "Senior Turner",
      image: "tushar",
      bio: "Key partner specializing in business development and client relationships across industrial sectors.",
      email: "amit@deepakengineering.com",
      linkedin: "#"
    },
    {
      name: "Roshan Nehere",
      position: "Business Director",
      image: "roshan",
      bio: "Drives strategic initiatives and oversees major projects with focus on quality and timely delivery.",
      email: "vikram@deepakengineering.com",
      linkedin: "#"
    },
    {
      name: "Vitthal Gopale",
      position: "Senior Turner",
      image: "rupesh",
      bio: "Master craftsman with 20 years of expertise in complex turning operations and precision machining.",
      email: "suresh@deepakengineering.com",
      linkedin: "#"
    },
    {
      name: "Shubham Patole",
      position: "Junior Turner",
      image: "shubham",
      bio: "Rising talent in precision turning, bringing fresh energy and dedication to every project.",
      email: "arun@deepakengineering.com",
      linkedin: "#"
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        
        .about-page {
          font-family: 'Work Sans', sans-serif;
          background: linear-gradient(180deg, #0a0e1a 0%, #1a1f35 50%, #0a0e1a 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        
        .about-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-section {
          padding: 6rem 1rem 4rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-badge {
          font-family: 'Oswald', sans-serif;
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(249, 115, 22, 0.2));
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          color: #3b82f6;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          animation: badgeFloat 3s ease-in-out infinite;
        }
        
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .hero-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        
        .title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #f97316 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          animation: textShimmer 3s ease-in-out infinite;
          background-size: 200% 200%;
        }
        
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .hero-description {
          max-width: 800px;
          margin: 0 auto 3rem;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.8;
          color: #cbd5e1;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: statSlideUp 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
          opacity: 0;
        }
        
        @keyframes statSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.1) 60deg, transparent 120deg);
          animation: rotate 4s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .stat-card:hover::before {
          opacity: 1;
        }
        
        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }
        
        .stat-card:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);
        }
        
        .stat-icon {
          color: #3b82f6;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        
        .stat-value {
          font-family: 'Oswald', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6, #f97316);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }
        
        .stat-label {
          color: #94a3b8;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.875rem;
          position: relative;
          z-index: 1;
        }
        
       
        
        .section-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #f97316);
          border-radius: 2px;
        }
        
        
        
        
        .team-section {
          max-width: 1400px;
          margin: 6rem auto;
          padding: 0 1rem 4rem;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }
        
        .team-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: cardFadeIn 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
          opacity: 0;
        }
        
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        .team-card:hover {
          transform: translateY(-12px);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 30px 80px rgba(59, 130, 246, 0.3);
        }
        
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 0;
        }
        
        .team-card:hover::before {
          opacity: 1;
        }
        
        .team-image-container {
          position: relative;
          width: 100%;
          height: 320px;
          overflow: hidden;
        }
        
        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .team-card:hover .team-image {
          transform: scale(1.1);
        }
        
        .team-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
          padding: 2rem 1.5rem 1.5rem;
          transform: translateY(100%);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .team-card:hover .team-overlay {
          transform: translateY(0);
        }
        
        .team-content {
          padding: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .team-name {
          font-family: 'Oswald', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
          letter-spacing: 0.02em;
        }
        
        .team-position {
          color: #3b82f6;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }
        
        .team-bio {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .team-contact {
          display: flex;
          gap: 1rem;
        }
        
        .contact-icon-btn {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-icon-btn:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
        }
        
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          
         
        }
      `}</style>

      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-badge">About Our Company</div>
          <h1 className="hero-title">
            <span className="title-gradient">Engineering Excellence</span>
            <br />
            Since 2007
          </h1>
          <p className="hero-description">
            Leading the industry in precision machining, heavy lathe operations, and innovative engineering solutions. 
            From concept to completion, we deliver unmatched quality and reliability.
          </p>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
                style={{ "--index": index }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

    

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title">
            <span className="title-gradient">Meet Our Team</span>
          </h2>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="team-card"
                style={{ "--index": index }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="team-image-container">
                  <img 
                    src={images[member.image]} 
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="team-overlay">
                    <div className="team-contact">
                      <a href={`mailto:${member.email}`} className="contact-icon-btn">
                        <Mail size={18} />
                      </a>
                      <a href={member.linkedin} className="contact-icon-btn">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-position">{member.position}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default ShowAbout;