export default function PageCover() {
    return (
        <div className="page-cover mb-2">
            <div className="page-cover-title">
                <h1>پاسخ پرسش‌های پرتکرار</h1>
                <div className="form-ui">
                    <form action="">
                        <div className="form-row">
                            <input type="text" className="input-ui pr-2" placeholder="پرسش خود را جستجو کنید"/>
                                <button className="btn btn-info">جستجو</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}