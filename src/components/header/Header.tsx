import Navigation from "./Navigation";
import PromotionBar from "./PromotionBar";
import TopBar from "./TopBar";

// components/Layout/Header.tsx main header
export default function Header(){
    return (
        <header className="main-header">
            <PromotionBar/>
            <TopBar/>
            <Navigation/>
        </header>
    )
}
