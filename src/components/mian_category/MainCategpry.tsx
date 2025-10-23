import Image from 'next/image';
import Link from 'next/link';

export default function MainCategry() {
  const categories = [
    {
      id: 1,
      name: "کالای دیجیتال",
      image: "/assets/img/category/notebook-computer.png",
      quantity: "۱۵۶۰۰۰ کالا"
    },
    {
      id: 2,
      name: "آرایشی، بهداشتی و سلامت",
      image: "/assets/img/category/lifeline-in-a-heart-outline.png",
      quantity: "۴۸۰۰۰ کالا"
    },
    {
      id: 3,
      name: "خودرو،ابزار و اداری",
      image: "/assets/img/category/repair-tools.png",
      quantity: "۵۶۰۰۰ کالا"
    },
    {
      id: 4,
      name: "مد و پوشاک",
      image: "/assets/img/category/hanbok.png",
      quantity: "۲۱۷۰۰۰ کالا"
    },
    {
      id: 5,
      name: "خانه و آشپزخانه",
      image: "/assets/img/category/sofa.png",
      quantity: "۲۲۹۰۰۰ کالا"
    },
    {
      id: 6,
      name: "لوازم تحریر و هنر",
      image: "/assets/img/category/school-material.png",
      quantity: "۸۶۰۰۰ کالا"
    },
    {
      id: 7,
      name: "کودک و نوزاد",
      image: "/assets/img/category/baby-girl.png",
      quantity: "۳۲۰۰۰ کالا"
    },
    {
      id: 8,
      name: "ورزش و سفر",
      image: "/assets/img/category/adventurer.png",
      quantity: "۱۵۰۰۰ کالا"
    },
    {
      id: 9,
      name: "خوردنی و آشامیدنی",
      image: "/assets/img/category/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png",
      quantity: "۲۲۰۰۰ کالا"
    }
  ];

  return (
    <div className="row mt-3 mb-5">
      <div className="col-12">
        <div className="category-section dt-sn dt-sl border">
          <div className="category-section-title dt-sl">
            <h3>بیش از ۱،۵۰۰،۰۰۰ کالا در دسته‌بندی‌های مختلف</h3>
          </div>
          <div className="category-section-slider dt-sl">
            <div className="category-slider owl-carousel owl-rtl owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div 
                  className="owl-stage" 
                  style={{ 
                    transform: 'translate3d(170px, 0px, 0px)', 
                    transition: '0.25s', 
                    width: '1529px' 
                  }}
                >
                  {categories.map((category, index) => (
                    <div 
                      key={category.id}
                      className={`owl-item ${index === 0 ? '' : 'active'}`} 
                      style={{ width: '159.782px', marginLeft: '10px' }}
                    >
                      <div className="item">
                        <Link href="#" className="promotion-category">
                          <Image 
                            src={category.image} 
                            alt={category.name}
                            width={80}
                            height={80}
                          />
                          <h4 className="promotion-category-name">{category.name}</h4>
                          <h6 className="promotion-category-quantity">{category.quantity}</h6>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="mdi mdi-chevron-right"></i>
                </button>
                <button type="button" role="presentation" className="owl-next disabled">
                  <i className="mdi mdi-chevron-left"></i>
                </button>
              </div>
              
              <div className="owl-dots disabled"></div>
              <div className="owl-thumbs"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}