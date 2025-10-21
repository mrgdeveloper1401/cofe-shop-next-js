import CopyWrite from "./CopyWrite";
import DescriptionFooter from "./DescriptionFooter";
import Enemad from "./Enemad";
import FooterLink from "./FooterLink";
import Guarantee from "./Guarantee";
import NewsLatter from "./NewsLatter";
import Social from "./Scoial";

export default function Footer(){
    return (
        <div>
            <footer>
                <Guarantee/>
                <FooterLink/>
                <NewsLatter/>
                <Social/>
                <DescriptionFooter/>
                <Enemad/>
                <CopyWrite/>
            </footer>
        </div>
    )
}
