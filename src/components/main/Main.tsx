import AmazingProduct from "../amzing_product/AmazingProduct";
import MainBanner from "../banner/MainBanner";
import SeconderyBanner from "../banner/SeconderyBanner";
import BrandProduct from "../brand/BrandProduct";
import MainCategry from "../mian_category/MainCategpry";
import AmazingOffer from "../recomender/AmazingOffer";
import OurSuggestion from "../recomender/OurSuggestion";
import Slider from "../slider/Slider";
import SliderBestSeller from "../slider/SliderBestSeller";

export default function Main(){
    return (
        <div>
            <Slider/>
            <AmazingProduct/>
            <SliderBestSeller/>
            <MainBanner/>
            <AmazingOffer/>
            <SeconderyBanner/>
            <MainCategry/>
            <OurSuggestion/>
            <BrandProduct/>
        </div>
    )
}