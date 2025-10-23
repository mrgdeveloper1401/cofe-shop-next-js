import PageCover from "./PageCover";
import FeqQuestion from "./Question";

export default function FeqCategory(){
    return (
        <main className="main-content dt-sl mb-3">
            <div className="page-cover mb-2">
                <PageCover/>
                <FeqQuestion/>
            </div>
        </main>
    )
}