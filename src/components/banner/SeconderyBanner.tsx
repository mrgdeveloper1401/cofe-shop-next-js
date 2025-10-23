import Image from 'next/image';
import Link from 'next/link';

export default function SeconderyBanner() {
  return (
    <div className="container main-container">
      {/* Start Banner */}
      <div className="row mt-3 mb-5">
        <div className="col-md-3 col-sm-6 col-6 mb-2">
          <div className="widget-banner">
            <Link href="#">
              <Image 
                src="/assets/img/banner/small-banner-5.jpg" 
                alt="Banner 5" 
                width={300}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 mb-2">
          <div className="widget-banner">
            <Link href="#">
              <Image 
                src="/assets/img/banner/small-banner-6.jpg" 
                alt="Banner 6" 
                width={300}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 mb-2">
          <div className="widget-banner">
            <Link href="#">
              <Image 
                src="/assets/img/banner/small-banner-7.jpg" 
                alt="Banner 7" 
                width={300}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6 mb-2">
          <div className="widget-banner">
            <Link href="#">
              <Image 
                src="/assets/img/banner/small-banner-8.jpg" 
                alt="Banner 8" 
                width={300}
                height={200}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* End Banner */}
    </div>
  );
}