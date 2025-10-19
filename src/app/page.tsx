export default function Home() {
    return (
        <div className="wrapper">
            {/* Start ads  */}
            <div className="ads-header-wrapper">
                <a href="#" className="ads-header hidden-sm" target="_blank" style={{ backgroundImage: "url(./assets/img/banner/large-ads.jpg)" }}></a>
            </div>
            {/* End ads */}

            {/* Start topbar */}
            <div className="container main-container">
                <div className="topbar dt-sl">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-6">
                            <div className="logo-area">
                                <a href="#">
                                    <img src="./assets/img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 hidden-sm">
                            <div className="search-area dt-sl">
                                <form action="" className="search">
                                    <input type="text" placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…" />
                                    <i className="far fa-search search-icon"></i>
                                    <button className="close-search-result" type="button"><i className="mdi mdi-close"></i></button>
                                    <div className="search-result">
                                        <ul>
                                            <li>
                                                <a href="#">موبایل</a>
                                            </li>
                                            <li>
                                                <a href="#">مد و پوشاک</a>
                                            </li>
                                            <li>
                                                <a href="#">میکروفن</a>
                                            </li>
                                            <li>
                                                <a href="#">میز تلویزیون</a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-6 topbar-left">
                            <ul className="nav float-left">
                                <li className="nav-item account dropdown">
                                    <a className="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="label-dropdown">حساب کاربری</span>
                                        <i className="mdi mdi-account-circle-outline"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-left">
                                        <a className="dropdown-item" href="#">
                                            <i className="mdi mdi-account-card-details-outline"></i>پروفایل
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="float-left badge badge-dark">۴</span>
                                            <i className="mdi mdi-comment-text-outline"></i>پیغام ها
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="mdi mdi-account-edit-outline"></i>ویرایش حساب کاربری
                                        </a>
                                        <div className="dropdown-divider" role="presentation"></div>
                                        <a className="dropdown-item" href="#">
                                            <i className="mdi mdi-logout-variant"></i>خروج
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End topbar */}

            {/* Start bottom-header */}
            <div className="bottom-header dt-sl mb-sm-bottom-header">
                <div className="container main-container">
                    {/* Start Main-Menu */}
                    <nav className="main-menu d-flex justify-content-md-between justify-content-end dt-sl">
                        <ul className="list hidden-sm">
                            <li className="list-item category-list">
                                <a href="#"><i className="fal fa-bars ml-1"></i>دسته بندی کالاها</a>
                                <ul>
                                    <li className="active">
                                        <a href="#">کالای دیجیتال</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">اسپیکر بلوتوث و با سیم</a></li>
                                            <li className="sublist--title"><a href="#">هارد، فلش و SSD</a></li>
                                            <li className="sublist--title"><a href="#">دوربین</a></li>
                                            <li className="sublist--item"><a href="#">دوربین عکاسی دیجیتال</a></li>
                                            <li className="sublist--item"><a href="#">دوربین‌ ورزشی و فیلم برداری</a></li>
                                            <li className="sublist--item"><a href="#">دوربین‌ چاپ سریع</a></li>
                                            <li className="sublist--title"><a href="#">لوازم جانبی دوربین</a></li>
                                            <li className="sublist--item"><a href="#">لنز</a></li>
                                            <li className="sublist--item"><a href="#">کیف</a></li>
                                            <li className="sublist--item"><a href="#">کارت حافظه</a></li>
                                            <li className="sublist--item"><a href="#">کاغذ چاپ عکس</a></li>
                                            <li className="sublist--item"><a href="#">دوربین دوچشمی و شکاری</a></li>
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">اسپیکر بلوتوث و با سیم</a></li>
                                            <li className="sublist--title"><a href="#">هارد، فلش و SSD</a></li>
                                            <li className="sublist--title"><a href="#">دوربین</a></li>
                                            <li className="sublist--item"><a href="#">دوربین عکاسی دیجیتال</a></li>
                                            <li className="sublist--item"><a href="#">دوربین‌ ورزشی و فیلم برداری</a></li>
                                            <li className="sublist--item"><a href="#">دوربین‌ چاپ سریع</a></li>
                                            <li className="sublist--title"><a href="#">لوازم جانبی دوربین</a></li>
                                            <li className="sublist--item"><a href="#">لنز</a></li>
                                            <li className="sublist--item"><a href="#">کیف</a></li>
                                            <li className="sublist--item"><a href="#">کارت حافظه</a></li>
                                            <li className="sublist--item"><a href="#">کاغذ چاپ عکس</a></li>
                                            <li className="sublist--item"><a href="#">دوربین دوچشمی و شکاری</a></li>
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">خودرو، ابزار و تجهیزات صنعتی</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">مد و پوشاک</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">زیبایی و سلامت</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">خانه و آشپزخانه</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">لنز</a></li>
                                            <li className="sublist--item"><a href="#">کیف</a></li>
                                            <li className="sublist--item"><a href="#">کارت حافظه</a></li>
                                            <li className="sublist--item"><a href="#">کاغذ چاپ عکس</a></li>
                                            <li className="sublist--item"><a href="#">دوربین دوچشمی و شکاری</a></li>
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">کتاب، لوازم تحریر و هنر</a>
                                        <ul className="row">
                                            <li className="sublist--item"><a href="#">کارت حافظه</a></li>
                                            <li className="sublist--item"><a href="#">کاغذ چاپ عکس</a></li>
                                            <li className="sublist--item"><a href="#">دوربین دوچشمی و شکاری</a></li>
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">اسباب بازی، کودک و نوزاد</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">لنز</a></li>
                                            <li className="sublist--item"><a href="#">کیف</a></li>
                                            <li className="sublist--item"><a href="#">کارت حافظه</a></li>
                                            <li className="sublist--item"><a href="#">کاغذ چاپ عکس</a></li>
                                            <li className="sublist--item"><a href="#">دوربین دوچشمی و شکاری</a></li>
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">واقعیت مجازی</a></li>
                                            <li className="sublist--title"><a href="#">مچ‌بند و ساعت هوشمند</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">ورزش و سفر</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--item"><a href="#">پایه نگهدارنده گوشی</a></li>
                                            <li className="sublist--title"><a href="#">گوشی موبایل</a></li>
                                            <li className="sublist--item"><a href="#">سامسونگ</a></li>
                                            <li className="sublist--item"><a href="#">هوآوی</a></li>
                                            <li className="sublist--item"><a href="#">اپل</a></li>
                                            <li className="sublist--item"><a href="#">شیائومی</a></li>
                                            <li className="sublist--item"><a href="#">آنر</a></li>
                                            <li className="sublist--item"><a href="#">نوکیا</a></li>
                                            <li className="sublist--title"><a href="#">هدفون، هدست، هندزفری</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">خوردنی و آشامیدنی</a>
                                        <ul className="row">
                                            <li className="sublist--title"><a href="#">لوازم جانبی گوشی</a></li>
                                            <li className="sublist--item"><a href="#">کیف و کاور گوشی</a></li>
                                            <li className="sublist--item"><a href="#">پاور بانک (شارژر همراه)</a></li>
                                            <li className="sublist--title"><a href="#">برندها</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* mega menu 3 column */}
                            <li className="list-item list-item-has-children mega-menu mega-menu-col-3">
                                <a className="nav-link" href="#">بهداشت و سلامت</a>
                                <ul className="sub-menu nav">
                                    <li className="list-item list-item-has-children">
                                        <a className="nav-link" href="#">عنوان دسته</a>
                                        <ul className="sub-menu nav">
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو یک</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو دو</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو چهار</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو پنج</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو شش</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو هفت</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-item list-item-has-children">
                                        <a className="nav-link" href="#">عنوان دسته</a>
                                        <ul className="sub-menu nav">
                                            <li className="list-item">
                                                <a className="nav-link" href="#"><i className="mdi mdi-brightness-percent"></i>
                                                    زیر منو یک</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#"><i className="mdi mdi-brightness-percent"></i>
                                                    زیر منو دو</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#"><i className="mdi mdi-brightness-percent"></i>
                                                    زیر منو سه</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#"><i className="mdi mdi-brightness-percent"></i>
                                                    زیر منو چهار</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#"><i className="mdi mdi-brightness-percent"></i>
                                                    زیر منو پنج</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#"><i className="mdi mdi-brightness-percent"></i>
                                                    زیر منو شش</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#"><i className="mdi mdi-brightness-percent"></i>
                                                    زیر منو هفت</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">
                                            <img src="./assets/img/theme/mega-menu.jpg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* mega menu 4 column */}
                            <li className="list-item list-item-has-children mega-menu mega-menu-col-4">
                                <a className="nav-link" href="#">ابزار و اداری</a>
                                <ul className="sub-menu nav">
                                    <li className="list-item list-item-has-children">
                                        <a className="nav-link" href="#">عنوان دسته</a>
                                        <ul className="sub-menu nav">
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو یک</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو دو</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو چهار</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو پنج</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو شش</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو هفت</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو هشت</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو نه</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-item list-item-has-children">
                                        <a className="nav-link" href="#">عنوان دسته</a>
                                        <ul className="sub-menu nav">
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو یک</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو دو</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو چهار</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو پنج</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو شش</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو هفت</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-item list-item-has-children">
                                        <a className="nav-link" href="#">عنوان دسته</a>
                                        <ul className="sub-menu nav">
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو یک</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو دو</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو چهار</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو پنج</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو شش</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-item list-item-has-children">
                                        <a className="nav-link" href="#">عنوان دسته</a>
                                        <ul className="sub-menu nav">
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو یک</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو دو</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو چهار</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* dropdown-menu */}
                            <li className="list-item list-item-has-children menu-col-1">
                                <a className="nav-link" href="#">خانه و آشپزخانه</a>
                                <ul className="sub-menu nav">
                                    <li className="list-item">
                                        <a className="nav-link" href="#">زیر منو یک</a>
                                    </li>
                                    <li className="list-item">
                                        <a className="nav-link" href="#">زیر منو دو</a>
                                    </li>
                                    <li className="list-item list-item-has-children">
                                        <a className="nav-link" href="#">زیر منو سه</a>
                                        <ul className="sub-menu nav">
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه - یک</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه - دو</a>
                                            </li>
                                            <li className="list-item">
                                                <a className="nav-link" href="#">زیر منو سه - سه</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-item">
                                <a className="nav-link" href="#">ورزش و سفر</a>
                            </li>
                        </ul>
                        <div className="nav mr-auto">
                            <div className="nav-item cart--wrapper">
                                <a className="nav-link" href="#">
                                    <span className="label-dropdown">سبد خرید</span>
                                    <i className="mdi mdi-cart-outline"></i>
                                    <span className="count">2</span>
                                </a>
                                <div className="header-cart-info">
                                    <div className="header-cart-info-header">
                                        <div className="header-cart-info-count">
                                            3 کالا
                                        </div>
                                        <a href="#" className="header-cart-info-link">
                                            <span>مشاهده سبد خرید</span>
                                        </a>
                                    </div>
                                    <ul className="header-basket-list do-nice-scroll" style={{ overflow: 'hidden', outline: 'none' }} tabIndex={1}>
                                        <li className="cart-item">
                                            <a href="#" className="header-basket-list-item">
                                                <div className="header-basket-list-item-image">
                                                    <img src="./assets/img/cart/1.jpg" alt="" />
                                                </div>
                                                <div className="header-basket-list-item-content">
                                                    <p className="header-basket-list-item-title">
                                                        گوشی موبایل سامسونگ مدل Galaxy A30 SM-A305F/DS دو سیم کارت ظرفیت
                                                        64 گیگابایت
                                                    </p>
                                                    <div className="header-basket-list-item-footer">
                                                        <div className="header-basket-list-item-props">
                                                            <span className="header-basket-list-item-props-item">
                                                                1 x
                                                            </span>
                                                            <span className="header-basket-list-item-props-item">
                                                                <div className="header-basket-list-item-color-badge" style={{ background: "#2196f3" }}></div>
                                                                آبی
                                                            </span>
                                                        </div>
                                                        <button className="header-basket-list-item-remove">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="cart-item">
                                            <a href="#" className="header-basket-list-item">
                                                <div className="header-basket-list-item-image">
                                                    <img src="./assets/img/cart/2.jpg" alt="" />
                                                </div>
                                                <div className="header-basket-list-item-content">
                                                    <p className="header-basket-list-item-title">
                                                        گوشی موبایل هوآوی مدل Y9 2019 JKM-LX1 دو سیم کارت ظرفیت 64
                                                        گیگابایت
                                                    </p>
                                                    <div className="header-basket-list-item-footer">
                                                        <div className="header-basket-list-item-props">
                                                            <span className="header-basket-list-item-props-item">
                                                                1 x
                                                            </span>
                                                            <span className="header-basket-list-item-props-item">
                                                                <div className="header-basket-list-item-color-badge" style={{ background: "#212121" }}></div>
                                                                سفید
                                                            </span>
                                                        </div>
                                                        <button className="header-basket-list-item-remove">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="cart-item">
                                            <a href="#" className="header-basket-list-item">
                                                <div className="header-basket-list-item-image">
                                                    <img src="./assets/img/cart/3.jpg" alt="" />
                                                </div>
                                                <div className="header-basket-list-item-content">
                                                    <p className="header-basket-list-item-title">
                                                        گوشی موبایل سامسونگ مدل Galaxy A70 SM-A705FN/DS دو سیم‌کارت
                                                        ظرفیت 128 گیگابایت
                                                    </p>
                                                    <div className="header-basket-list-item-footer">
                                                        <div className="header-basket-list-item-props">
                                                            <span className="header-basket-list-item-props-item">
                                                                1 x
                                                            </span>
                                                            <span className="header-basket-list-item-props-item">
                                                                <div className="header-basket-list-item-color-badge" style={{ background: "#FFFFFF" }}></div>
                                                                سفید
                                                            </span>
                                                        </div>
                                                        <button className="header-basket-list-item-remove">
                                                            <i className="far fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="header-cart-info-footer">
                                        <div className="header-cart-info-total">
                                            <span className="header-cart-info-total-text">مبلغ قابل پرداخت:</span>
                                            <p className="header-cart-info-total-amount">
                                                <span className="header-cart-info-total-amount-number">
                                                    9,500,000 <span>تومان</span></span>
                                            </p>
                                        </div>

                                        <div>
                                            <a href="#" className="header-cart-info-submit">
                                                ثبت سفارش
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn-menu">
                            <div className="align align__justify">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        <div className="side-menu">
                            <div className="logo-nav-res dt-sl text-center">
                                <a href="#">
                                    <img src="assets/img/logo.png" alt="" />
                                </a>
                            </div>
                            <div className="search-box-side-menu dt-sl text-center mt-2 mb-3">
                                <form action="">
                                    <input type="text" name="s" placeholder="جستجو کنید..." />
                                    <i className="mdi mdi-magnify"></i>
                                </form>
                            </div>
                            <ul className="navbar-nav dt-sl">
                                <li className="sub-menu">
                                    <a href="#">کالای دیجیتال</a>
                                    <ul>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو چهار</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">عنوان دسته</a>
                                        </li>
                                        <li>
                                            <a href="#">عنوان دسته</a>
                                        </li>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو چهار</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="#">بهداشت و سلامت</a>
                                    <ul>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو چهار</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">عنوان دسته</a>
                                        </li>
                                        <li>
                                            <a href="#">عنوان دسته</a>
                                        </li>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو چهار</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-menu">
                                    <a href="#">ابزار و اداری</a>
                                    <ul>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو چهار</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">عنوان دسته</a>
                                        </li>
                                        <li>
                                            <a href="#">عنوان دسته</a>
                                        </li>
                                        <li className="sub-menu">
                                            <a href="#">عنوان دسته</a>
                                            <ul>
                                                <li>
                                                    <a href="#">زیر منو یک</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو دو</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو سه</a>
                                                </li>
                                                <li>
                                                    <a href="#">زیر منو چهار</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">مد و پوشاک</a>
                                </li>
                                <li>
                                    <a href="#">خانه و آشپزخانه</a>
                                </li>
                                <li>
                                    <a href="#">ورزش و سفر</a>
                                </li>
                            </ul>
                        </div>
                        <div className="overlay-side-menu">
                        </div>
                    </nav>
                    {/* End Main-Menu */}
                </div>
            </div>
            {/* End bottom-header */}
        </div>
    )
}