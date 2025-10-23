import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    return (
        <main className="main-content dt-sl mt-4 mb-3">
            <div className="container main-container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5 col-md-7 col-12 mx-auto">
                        <div className="logo-area text-center mb-3">
                            <Link href="/">
                                <Image 
                                    src="/assets/img/logo.png" 
                                    className="img-fluid" 
                                    alt="logo"
                                    width={150}
                                    height={50}
                                />
                            </Link>
                        </div>
                        <div className="auth-wrapper form-ui border pt-4">
                            <div className="section-title title-wide mb-1 no-after-title-wide">
                                <h2 className="font-weight-bold">ورود</h2>
                            </div>
                            <form action="#">
                                <div className="form-row-title">
                                    <h3>ایمیل یا شماره موبایل</h3>
                                </div>
                                <div className="form-row with-icon">
                                    <input 
                                        type="text" 
                                        className="input-ui pr-2" 
                                        placeholder="ایمیل یا شماره موبایل خود را وارد نمایید"
                                    />
                                    <i className="mdi mdi-account-circle-outline"></i>
                                </div>
                                <div className="form-row-title">
                                    <h3>رمز عبور</h3>
                                </div>
                                <div className="form-row with-icon">
                                    <input 
                                        type="password" 
                                        className="input-ui pr-2" 
                                        placeholder="رمز عبور خود را وارد نمایید"
                                    />
                                    <i className="mdi mdi-lock-open-variant-outline"></i>
                                </div>
                                <div className="form-row mt-2">
                                    <div className="custom-control custom-checkbox float-right mt-2">
                                        <input 
                                            type="checkbox" 
                                            className="custom-control-input" 
                                            id="customCheck3"
                                        />
                                        <label className="custom-control-label" htmlFor="customCheck3">
                                            مرا به خاطر بسپار
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <button 
                                        type="submit" 
                                        className="btn-primary-cm btn-with-icon mx-auto w-100"
                                    >
                                        <i className="mdi mdi-login-variant"></i>
                                        ورود به دیدیکالا
                                    </button>
                                </div>
                            </form>
                            <div className="form-footer mt-3">
                                <div>
                                    <span className="font-weight-bold">کاربر جدید هستید؟</span>
                                    <Link href="/register" className="mr-3 mt-2">
                                        ثبت نام در دیدیکالا
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}