export default function CartEmpty() {
    return (
        <main className="main-content dt-sl mb-3">
            <div className="container main-container">
                <div className="row">
                    <div className="col-12">
                        <div className="dt sl dt-sn dt-sn--box border pt-3 pb-5">
                            <div className="cart-page cart-empty">
                                <div className="circle-box-icon">
                                    <i className="mdi mdi-cart-remove"></i>
                                </div>
                                <p className="cart-empty-title">سبد خرید شما خالیست!</p>
                                <p>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                                <div className="cart-empty-links mb-5">
                                    <a href="#" className="border-bottom-dt">لیست مورد علاقه من</a>
                                    <a href="#" className="border-bottom-dt">محصولات شگفت‌انگیز</a>
                                    <a href="#" className="border-bottom-dt">محصولات پرفروش روز</a>
                                </div>
                                <a href="#" className="btn-primary-cm">ادامه خرید در دیدیکالا</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}