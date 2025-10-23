import ColorWithOption from '@/components/color_with_option/ColorWithOption';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/main/Main';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Main/>
        <Footer />
      </div>

      <div id="colorswitch-option">
        <ColorWithOption />
      </div>

      {/* Adding scripts */}
      <Script src="./assets/js/vendor/jquery-3.4.1.min.js" />
      <Script src="./assets/js/vendor/popper.min.js" />
      <Script src="./assets/js/vendor/bootstrap.min.js" />
      <Script src="./assets/js/vendor/bootstrap-slider.min.js" />
      <Script src="./assets/js/vendor/owl.carousel.min.js" />
      <Script src="./assets/js/vendor/owl.carousel2.thumbs.min.js" />
      <Script src="./assets/js/vendor/jquery.nicescroll.min.js" />
      <Script src="./assets/js/vendor/jquery.nice-select.min.js" />
      <Script src="./assets/js/vendor/nouislider.min.js" />
      <Script src="./assets/js/vendor/jquery.horizontalmenu.js" />
      <Script src="./assets/js/vendor/jquery-stack-menu.min.js" />
      <Script src="./assets/js/vendor/jquery.fancybox.min.js" />
      <Script src="./assets/js/vendor/countdown.min.js" />
      <Script src="./assets/js/vendor/wNumb.js" />
      <Script src="./assets/js/vendor/ResizeSensor.min.js" />
      <Script src="./assets/js/vendor/theia-sticky-sidebar.min.js" />
      <Script src="./assets/js/main.js" />
    </>
  );
}
