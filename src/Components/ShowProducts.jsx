
import { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";
import shaft from "../assets/Products/shaft.png";
import bore from "../assets/Products/bore.png";
import bush from "../assets/Products/bush.png";
import flange from "../assets/Products/flange.png";
import gear from "../assets/Products/gear.png";
import spool from "../assets/Products/spool.png";
import square from "../assets/Products/square.png";
import tabular from "../assets/Products/tabular.png";
import adaptor from "../assets/Products/adaptor.png";


function ShowProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const Images= {
    shaft, flange, gear, bore, bush, spool, tabular,square, adaptor,
};

  // Add your actual product images and names here
  const products = [
    {
      id: 1,
      name: "Heavy Duty Shafts",
      image: "shaft",
      category: "Shaft Machining",
      capacity: "Up to 5 Ton"
    },
    {
      id: 2,
      name: "Precision Flanges",
      image: "flange",
      category: "Flange Works",
      capacity: "Custom Sizes"
    },
    {
      id: 3,
      name: "Gear Blank",
      image: "gear",
      category: "Turning Operations",
      capacity: "High Precision"
    },
    {
      id: 4,
      name: "Boring & Drilling",
      image: "bore",
      category: "Boring Services",
      capacity: "Heavy Duty"
    },
    {
      id: 5,
      name: "Bush",
      image: "bush",
      category: "Custom Solutions",
      capacity: "Any Specification"
    },
    {
      id: 6,
      name: "Spool",
      image: "spool",
      category: "Spool Manufacturing",
      capacity: "All Types"
    },
    {
      id: 7,
      name: "Tubular",
      image: "tabular",
      category: "Hydraulic Parts",
      capacity: "Heavy Load"
    },
    {
      id: 8,
      name: "Square Block",
      image: "square",
      category: "Square Works",
      capacity: "Tight Tolerance"
    },
    {
      id: 9,
      name: "Adaptor",
      image: "adaptor",
      category: "Roller Manufacturing",
      capacity: "Large Scale"
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;500;600;700&family=Barlow:wght@400;500;600;700&display=swap');
        
        .products-page {
          font-family: 'Barlow', sans-serif;
          min-height: 100vh;
          background: linear-gradient(to bottom, #020617 0%, #0f172a 50%, #020617 100%);
          position: relative;
          overflow: hidden;
        }
        
        .products-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(59, 130, 246, 0.03) 50px, rgba(59, 130, 246, 0.03) 51px),
            repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(249, 115, 22, 0.03) 50px, rgba(249, 115, 22, 0.03) 51px);
          pointer-events: none;
        }
        
        .products-header {
          padding: 5rem 1rem 3rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .header-badge {
          font-family: 'Teko', sans-serif;
          display: inline-block;
          padding: 0.5rem 2rem;
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 0;
          color: #3b82f6;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 1rem;
          margin-bottom: 2rem;
          clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
          animation: badgeSlide 1s ease-out;
        }
        
        @keyframes badgeSlide {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .products-title {
          font-family: 'Teko', sans-serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          line-height: 1;
          margin-bottom: 1rem;
        }
        
        .title-main {
          background: linear-gradient(135deg, #ffffff 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
        }
        
        .title-accent {
          background: linear-gradient(135deg, #f97316 0%, #ffffff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: block;
        }
        
        .products-subtitle {
          color: #94a3b8;
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .products-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1rem 4rem;
          position: relative;
          z-index: 1;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .product-card {
          position: relative;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: cardReveal 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.08s);
          opacity: 0;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }
        
        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(40px) rotateX(-15deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
          transition: left 0.6s;
          z-index: 1;
        }
        
        .product-card:hover::before {
          left: 100%;
        }
        
        .product-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 
            0 25px 70px rgba(59, 130, 246, 0.3),
            0 0 0 1px rgba(59, 130, 246, 0.5) inset;
        }
        
        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          background: #000;
        }
        
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: grayscale(0.3);
        }
        
        .product-card:hover .product-image {
          transform: scale(1.15);
          filter: grayscale(0);
        }
        
        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 100%);
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        
        .product-card:hover .product-overlay {
          opacity: 0.85;
        }
        
        .product-category {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(249, 115, 22, 0.9);
          color: white;
          padding: 0.4rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          clip-path: polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%);
          z-index: 2;
        }
        
        .view-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background: rgba(59, 130, 246, 0.9);
          color: white;
          padding: 1rem;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 2;
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.5);
        }
        
        .product-card:hover .view-icon {
          transform: translate(-50%, -50%) scale(1);
        }
        
        .product-info {
          padding: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .product-name {
          font-family: 'Teko', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          transition: all 0.3s ease;
        }
        
        .product-card:hover .product-name {
          color: #3b82f6;
          transform: translateX(5px);
        }
        
        .product-capacity {
          color: #64748b;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .product-card:hover .product-capacity {
          color: #94a3b8;
        }
        
        .capacity-dot {
          width: 6px;
          height: 6px;
          background: #f97316;
          border-radius: 50%;
        }
        
        .corner-accent {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(59, 130, 246, 0);
          transition: border-color 0.3s;
        }
        
        .corner-tl {
          top: 0;
          left: 0;
          border-top-color: rgba(59, 130, 246, 0.5);
          border-left-color: rgba(59, 130, 246, 0.5);
        }
        
        .corner-br {
          bottom: 0;
          right: 0;
          border-bottom-color: rgba(249, 115, 22, 0.5);
          border-right-color: rgba(249, 115, 22, 0.5);
        }
        
        .product-card:hover .corner-accent {
          border-color: rgba(59, 130, 246, 0.8);
        }
        
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .product-card {
            clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
          }
        }
      `}</style>

      <div className="products-page">
        {/* Header Section */}
        <header className="products-header">
          <div className="header-badge">Our Products</div>
          <h1 className="products-title">
            <span className="title-main">Precision Engineered</span>
            <span className="title-accent">Manufacturing Solutions</span>
          </h1>
          <p className="products-subtitle">
            From heavy-duty shafts to precision components, we deliver excellence in every product. 
            Explore our comprehensive range of machined parts designed for industrial applications.
          </p>
        </header>

        {/* Products Grid */}
        <div className="products-container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                style={{ "--index": index }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Corner Accents */}
                <div className="corner-accent corner-tl"></div>
                <div className="corner-accent corner-br"></div>

                {/* Image Section */}
                <div className="product-image-wrapper">
                  <img
                    src={Images[product.image]}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-overlay"></div>
                  
                  {/* Category Badge */}
                  <div className="product-category">
                    {product.category}
                  </div>

                  {/* View Icon */}
                  <div className="view-icon">
                    <Eye size={24} />
                  </div>
                </div>

                {/* Product Info */}
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-capacity">
                    <span className="capacity-dot"></span>
                    {product.capacity}
                    <ArrowRight size={16} style={{ marginLeft: 'auto' }} />
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

export default ShowProducts;