// components/Layout/TopBar.tsx
export default function TopBar() {
    return (
        <div>

            <div className="topbar dt-sl">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-6">
                        <div className="logo-area">
                            <a href="#">
                                <img src="./assets/img/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 hidden-sm">
                        <div className="search-area dt-sl">
                            <form action="" className="search">
                                <input type="text" placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"/>
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
    )
}
