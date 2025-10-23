import Image from 'next/image';
import Link from 'next/link';

export default function OurSuggestion() {
  const products = [
    // Column 1
    [
      { id: 1, image: "/assets/img/products/017.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 },
      { id: 2, image: "/assets/img/products/020.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 },
      { id: 3, image: "/assets/img/products/014.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 }
    ],
    // Column 2
    [
      { id: 4, image: "/assets/img/products/016.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 },
      { id: 5, image: "/assets/img/products/018.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 },
      { id: 6, image: "/assets/img/products/015.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 }
    ],
    // Column 3
    [
      { id: 7, image: "/assets/img/products/017.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 },
      { id: 8, image: "/assets/img/products/020.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 },
      { id: 9, image: "/assets/img/products/014.jpg", title: "کت مردانه مجلسی مدل k-m-5110", price: "199,000 تومان", rating: 4 }
    ]
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`mdi mdi-star ${i < rating ? 'active' : ''}`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <section className="dt-sl dt-sn mb-5">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-sm-title title-wide no-after-title-wide">
            <h2>پیشنهاد ما</h2>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        {products.map((column, columnIndex) => (
          <div key={columnIndex} className="col-lg-4 col-md-6 col-sm-12 col-12 pt-4">
            <div className="row">
              {column.map((product) => (
                <div key={product.id} className="col-12">
                  <div className="card-horizontal-product border-bottom rounded-0">
                    <div className="card-horizontal-product-thumb">
                      <Link href="#">
                        <Image 
                          src={product.image} 
                          alt={product.title}
                          width={100}
                          height={100}
                        />
                      </Link>
                    </div>
                    <div className="card-horizontal-product-content">
                      <div className="card-horizontal-product-title">
                        <Link href="#">
                          <h3>{product.title}</h3>
                        </Link>
                      </div>
                      {renderStars(product.rating)}
                      <div className="card-horizontal-product-price">
                        <span>{product.price}</span>
                      </div>
                      <div className="card-horizontal-product-buttons">
                        <Link href="#" className="btn btn-outline-info">
                          جزئیات محصول
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}