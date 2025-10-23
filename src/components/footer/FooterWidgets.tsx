import Link from 'next/link';

export default function FooterWidgets() {
  return (
    <div className="footer-widgets">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="widget-menu widget card">
            <header className="card-header">
              <h3 className="card-title">راهنمای خرید از تاپ کالا</h3>
            </header>
            <ul className="footer-menu">
              <li>
                <Link href="#">نحوه ثبت سفارش</Link>
              </li>
              <li>
                <Link href="#">رویه ارسال سفارش</Link>
              </li>
              <li>
                <Link href="#">شیوه‌های پرداخت</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-3">
          <div className="widget-menu widget card">
            <header className="card-header">
              <h3 className="card-title">خدمات مشتریان</h3>
            </header>
            <ul className="footer-menu">
              <li>
                <Link href="#">پاسخ به پرسش‌های متداول</Link>
              </li>
              <li>
                <Link href="#">رویه‌های بازگرداندن کالا</Link>
              </li>
              <li>
                <Link href="#">شرایط استفاده</Link>
              </li>
              <li>
                <Link href="#">حریم خصوصی</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-3">
          <div className="widget-menu widget card">
            <header className="card-header">
              <h3 className="card-title">با تاپ کالا</h3>
            </header>
            <ul className="footer-menu">
              <li>
                <Link href="#">فروش در تاپ کالا</Link>
              </li>
              <li>
                <Link href="#">همکاری با سازمان‌ها</Link>
              </li>
              <li>
                <Link href="#">فرصت‌های شغلی</Link>
              </li>
              <li>
                <Link href="#">تماس با تاپ کالا</Link>
              </li>
              <li>
                <Link href="#">درباره تاپ کالا</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-3">
          <div className="newsletter">
            <p>از تخفیف‌ها و جدیدترین‌های فروشگاه باخبر شوید:</p>
            <form action="">
              <input 
                type="email" 
                className="form-control" 
                placeholder="آدرس ایمیل خود را وارد کنید..." 
              />
              <input 
                type="submit" 
                className="btn btn-primary" 
                value="ارسال" 
              />
            </form>
          </div>
          
          <div className="socials">
            <p>ما را در شبکه های اجتماعی دنبال کنید.</p>
            <div className="footer-social">
              <ul className="text-center">
                <li>
                  <Link href="#">
                    <i className="mdi mdi-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="mdi mdi-telegram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="mdi mdi-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="mdi mdi-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}