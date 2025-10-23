import ArticleList from "./ArticleList";
import NewArticle from "./NewArticle";

export default function MainBlog(){
    return (
        <main className="main-content dt-sl mb-3" style={{ marginTop: '204.157px', transform: 'none' }}>
            <div className="container main-container" style={{ transform: 'none' }}>
                <div className="row mt-5 pt-5" style={{ transform: 'none' }}>
                    <ArticleList/>
                    <NewArticle/>
                </div>
            </div>
        </main>
    )
}