export default function Slider() {
    return (
        <div className="container main-container">
            {/* Start Main-Slider */}
            <div className="row mb-5">
                <aside className="sidebar col-lg-4 hidden-md order-2 pr-0 hidden-md">
                    {/* Start banner */}
                    <div className="sidebar-inner dt-sl">
                        <div className="sidebar-banner">
                            <div className="row">
                                <div className="col-12 mb-1">
                                    <div className="widget-banner">
                                        <a href="#">
                                            <img src="./assets/img/banner/banner-side-slider-1.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="widget-banner">
                                        <a href="#">
                                            <img src="./assets/img/banner/banner-side-slider-2.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  End banner */}
                </aside>
                <div className="col-lg-8 col-md-12 order-1">
                    {/* Start main-slider */}
                    <section id="main-slider" className="main-slider main-slider-cs mt-1 carousel slide carousel-fade card hidden-sm pointer-event" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#main-slider" data-slide-to="0" className=""></li>
                            <li data-target="#main-slider" data-slide-to="1" className=""></li>
                            <li data-target="#main-slider" data-slide-to="2" className=""></li>
                            <li data-target="#main-slider" data-slide-to="3" className=""></li>
                            <li data-target="#main-slider" data-slide-to="4" className="active"></li>
                            <li data-target="#main-slider" data-slide-to="5" className=""></li>
                            <li data-target="#main-slider" data-slide-to="6" className=""></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/img-slider-2/1.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/img-slider-2/2.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/img-slider-2/3.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/img-slider-2/4.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item active">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/img-slider-2/5.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/img-slider-2/6.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/img-slider-2/7.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#main-slider" role="button" data-slide="prev">
                            <i className="mdi mdi-chevron-right"></i>
                        </a>
                        <a className="carousel-control-next" href="#main-slider" data-slide="next">
                            <i className="mdi mdi-chevron-left"></i>
                        </a>
                    </section>
                    <section id="main-slider-res" className="main-slider carousel slide carousel-fade card d-none show-sm pointer-event" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#main-slider-res" data-slide-to="0" className="active"></li>
                            <li data-target="#main-slider-res" data-slide-to="1"></li>
                            <li data-target="#main-slider-res" data-slide-to="2"></li>
                            <li data-target="#main-slider-res" data-slide-to="3"></li>
                            <li data-target="#main-slider-res" data-slide-to="4"></li>
                            <li data-target="#main-slider-res" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/slider-responsive/1.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/slider-responsive/2.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/slider-responsive/3.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/slider-responsive/4.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/slider-responsive/5.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a className="main-slider-slide" href="#">
                                    <img src="./assets/img/main-slider/slider-responsive/6.jpg" alt="" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#main-slider-res" role="button" data-slide="prev">
                            <i className="mdi mdi-chevron-right"></i>
                        </a>
                        <a className="carousel-control-next" href="#main-slider-res" data-slide="next">
                            <i className="mdi mdi-chevron-left"></i>
                        </a>
                    </section>
                    {/* End main-slider */}
                </div>
            </div>
            {/* End Main-Slider */}
        </div>
    );
}
