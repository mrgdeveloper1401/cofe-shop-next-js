import Image from 'next/image';
import Link from 'next/link';

export default function SliderBestSeller() {
  return (
    <div className="container main-container">
      {/* Start Product-Slider */}
      <div className="row">
        <div className="col-xl-10 col-lg-12">
          <section className="slider-section dt-sl mb-5">
            <div className="row mb-3">
              <div className="col-12">
                <div className="section-title text-sm-title title-wide no-after-title-wide">
                  <h2>پر فروش ترینها</h2>
                  <Link href="#">مشاهده همه</Link>
                </div>
              </div>

              {/* Start Product-Slider */}
              <div className="col-12 px-res-0">
                <div className="product-carousel carousel-md owl-carousel owl-theme owl-rtl owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div 
                      className="owl-stage" 
                      style={{ 
                        transform: 'translate3d(0px, 0px, 0px)', 
                        transition: 'all', 
                        width: '1536px' 
                      }}
                    >
                      {/* Product 1 */}
                      <div className="owl-item active" style={{ width: '209.386px', marginLeft: '10px' }}>
                        <div className="item">
                          <div className="product-card">
                            <div className="product-head">
                              <div className="rating-stars">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className="mdi mdi-star active"></i>
                                ))}
                              </div>
                              <div className="discount">
                                <span>20%</span>
                              </div>
                            </div>
                            <Link className="product-thumb" href="/shop-single">
                              <Image 
                                src="/assets/img/products/07.jpg" 
                                alt="Product Thumbnail" 
                                width={150}
                                height={150}
                              />
                            </Link>
                            <div className="product-card-body">
                              <h5 className="product-title">
                                <Link href="/shop-single">مانتو زنانه</Link>
                              </h5>
                              <Link className="product-meta" href="/shop-categories">
                                لباس زنانه
                              </Link>
                              <span className="product-price">157,000 تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 2 */}
                      <div className="owl-item active" style={{ width: '209.386px', marginLeft: '10px' }}>
                        <div className="item">
                          <div className="product-card">
                            <div className="product-head">
                              <div className="rating-stars">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className="mdi mdi-star active"></i>
                                ))}
                              </div>
                            </div>
                            <Link className="product-thumb" href="/shop-single">
                              <Image 
                                src="/assets/img/products/017.jpg" 
                                alt="Product Thumbnail" 
                                width={150}
                                height={150}
                              />
                            </Link>
                            <div className="product-card-body">
                              <h5 className="product-title">
                                <Link href="/shop-single">کت مردانه</Link>
                              </h5>
                              <Link className="product-meta" href="/shop-categories">
                                لباس مردانه
                              </Link>
                              <span className="product-price">199,000 تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 3 */}
                      <div className="owl-item active" style={{ width: '209.386px', marginLeft: '10px' }}>
                        <div className="item">
                          <div className="product-card">
                            <div className="product-head">
                              <div className="rating-stars">
                                {[...Array(4)].map((_, i) => (
                                  <i key={i} className="mdi mdi-star active"></i>
                                ))}
                                <i className="mdi mdi-star"></i>
                              </div>
                            </div>
                            <Link className="product-thumb" href="/shop-single">
                              <Image 
                                src="/assets/img/products/013.jpg" 
                                alt="Product Thumbnail" 
                                width={150}
                                height={150}
                              />
                            </Link>
                            <div className="product-card-body">
                              <h5 className="product-title">
                                <Link href="/shop-single">مانتو زنانه مدل هودی تیک تین</Link>
                              </h5>
                              <Link className="product-meta" href="/shop-categories">
                                لباس زنانه
                              </Link>
                              <span className="product-price">135,000 تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 4 */}
                      <div className="owl-item active" style={{ width: '209.386px', marginLeft: '10px' }}>
                        <div className="item">
                          <div className="product-card">
                            <div className="product-head">
                              <div className="rating-stars">
                                {[...Array(4)].map((_, i) => (
                                  <i key={i} className="mdi mdi-star active"></i>
                                ))}
                                <i className="mdi mdi-star"></i>
                              </div>
                            </div>
                            <Link className="product-thumb" href="/shop-single">
                              <Image 
                                src="/assets/img/products/09.jpg" 
                                alt="Product Thumbnail" 
                                width={150}
                                height={150}
                              />
                            </Link>
                            <div className="product-card-body">
                              <h5 className="product-title">
                                <Link href="/shop-single">مانتو زنانه</Link>
                              </h5>
                              <Link className="product-meta" href="/shop-categories">
                                لباس زنانه
                              </Link>
                              <span className="product-price">145,000 تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 5 */}
                      <div className="owl-item active" style={{ width: '209.386px', marginLeft: '10px' }}>
                        <div className="item">
                          <div className="product-card">
                            <div className="product-head">
                              <div className="rating-stars">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className="mdi mdi-star active"></i>
                                ))}
                              </div>
                            </div>
                            <Link className="product-thumb" href="/shop-single">
                              <Image 
                                src="/assets/img/products/010.jpg" 
                                alt="Product Thumbnail" 
                                width={150}
                                height={150}
                              />
                            </Link>
                            <div className="product-card-body">
                              <h5 className="product-title">
                                <Link href="/shop-single">مانتو زنانه</Link>
                              </h5>
                              <Link className="product-meta" href="/shop-categories">
                                لباس زنانه
                              </Link>
                              <span className="product-price">170,000 تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 6 */}
                      <div className="owl-item" style={{ width: '209.386px', marginLeft: '10px' }}>
                        <div className="item">
                          <div className="product-card">
                            <div className="product-head">
                              <div className="rating-stars">
                                {[...Array(4)].map((_, i) => (
                                  <i key={i} className="mdi mdi-star active"></i>
                                ))}
                                <i className="mdi mdi-star"></i>
                              </div>
                              <div className="discount">
                                <span>20%</span>
                              </div>
                            </div>
                            <Link className="product-thumb" href="/shop-single">
                              <Image 
                                src="/assets/img/products/011.jpg" 
                                alt="Product Thumbnail" 
                                width={150}
                                height={150}
                              />
                            </Link>
                            <div className="product-card-body">
                              <h5 className="product-title">
                                <Link href="/shop-single">مانتو زنانه</Link>
                              </h5>
                              <Link className="product-meta" href="/shop-categories">
                                لباس زنانه
                              </Link>
                              <span className="product-price">185,000 تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product 7 */}
                      <div className="owl-item" style={{ width: '209.386px', marginLeft: '10px' }}>
                        <div className="item">
                          <div className="product-card">
                            <div className="product-head">
                              <div className="rating-stars">
                                {[...Array(4)].map((_, i) => (
                                  <i key={i} className="mdi mdi-star active"></i>
                                ))}
                                <i className="mdi mdi-star"></i>
                              </div>
                            </div>
                            <Link className="product-thumb" href="/shop-single">
                              <Image 
                                src="/assets/img/products/019.jpg" 
                                alt="Product Thumbnail" 
                                width={150}
                                height={150}
                              />
                            </Link>
                            <div className="product-card-body">
                              <h5 className="product-title">
                                <Link href="/shop-single">تیشرت مردانه</Link>
                              </h5>
                              <Link className="product-meta" href="/shop-categories">
                                لباس مردانه
                              </Link>
                              <span className="product-price">54,000 تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>
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
              {/* End Product-Slider */}
            </div>
          </section>
        </div>
      </div>
      {/* End Product-Slider */}
    </div>
  );
}