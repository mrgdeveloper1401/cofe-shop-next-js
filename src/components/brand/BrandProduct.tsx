import Image from 'next/image';

export default function BrandProduct() {
  const brands = [
    { id: 1, src: "/assets/img/brand/1076.png", alt: "Brand 1076" },
    { id: 2, src: "/assets/img/brand/1078.png", alt: "Brand 1078" },
    { id: 3, src: "/assets/img/brand/1080.png", alt: "Brand 1080" },
    { id: 4, src: "/assets/img/brand/2315.png", alt: "Brand 2315" },
    { id: 5, src: "/assets/img/brand/1086.png", alt: "Brand 1086" },
    { id: 6, src: "/assets/img/brand/5189.png", alt: "Brand 5189" },
    { id: 7, src: "/assets/img/brand/1000006973.png", alt: "Brand 1000006973" },
    { id: 8, src: "/assets/img/brand/1000014452.jpg", alt: "Brand 1000014452" }
  ];

  return (
    <div className="col-12">
      <div className="brand-slider carousel-lg owl-carousel owl-theme owl-rtl owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div 
            className="owl-stage" 
            style={{ 
              transform: 'translate3d(0px, 0px, 0px)', 
              transition: 'all', 
              width: '1774px' 
            }}
          >
            {brands.map((brand, index) => (
              <div 
                key={brand.id}
                className={`owl-item ${index < 6 ? 'active' : ''}`} 
                style={{ width: '211.712px', marginLeft: '10px' }}
              >
                <div className="item">
                  <Image 
                    src={brand.src} 
                    className="img-fluid" 
                    alt={brand.alt}
                    width={150}
                    height={80}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="owl-nav">
          <button type="button" role="presentation" className="owl-prev disabled">
            <i className="mdi mdi-chevron-right"></i>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <i className="mdi mdi-chevron-left"></i>
          </button>
        </div>
        
        {/* Dots */}
        <div className="owl-dots">
          <button role="button" className="owl-dot active"><span></span></button>
          <button role="button" className="owl-dot"><span></span></button>
        </div>
        
        <div className="owl-thumbs"></div>
      </div>
    </div>
  );
}