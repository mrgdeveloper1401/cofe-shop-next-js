import FooterCopyWrite from "./FooterCopyWrite";
import FooterDescription from "./FooterDescription";
import FooterInfo from "./FooterInfo";
import FooterService from "./FooterService";
import FooterWidgets from "./FooterWidgets";

export default function Footer(){
    return (
        <div>
            <footer className="main-footer dt-sl">
                <FooterService/>
                <FooterInfo/>
                <FooterWidgets/>
                <FooterDescription/>
                <FooterCopyWrite/>
            </footer>
        </div>
    )
}
