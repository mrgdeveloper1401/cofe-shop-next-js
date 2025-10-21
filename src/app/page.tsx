import AmazingProduct from "@/components/amzing_product/AmazingProduct";
import BestSellerProduct from "@/components/best_seller_product/BestSellerProduct";
import BrandProduct from "@/components/brand/BrandProduct";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import RecomenderSlider from "@/components/recomender/RecomenderSlider";
import Slider from "@/components/slider/Slider";
import SliderCategory from "@/components/slider_category/SliderCategory";

// src/app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Slider />
      <RecomenderSlider/>
      <BestSellerProduct/>
      <SliderCategory/>
      <AmazingProduct/>
      <BrandProduct/>
      <Footer/>
    </div>
  );
}
