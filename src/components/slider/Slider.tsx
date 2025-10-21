import SliderBestSeller from "./SliderBestSeller";
import SliderDicount from "./SliderDicount";
import SliderProduct from "./SliderProduct";

export default function Slider(){
    return (
        <section>
            <SliderProduct/>
            <SliderDicount/>
            <SliderBestSeller/>
        </section>
    )
}
