import OverLay from '../OverLay/OverLay';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Login.module.scss';
import {
    CloseIcon,
    QrIcon,
    GoogleIcon,
    FaceBookIcon,
    TwitterIcon,
    LineIcon,
    UserIcon,
    PrevIcon,
} from '../icon';
const cx = classNames.bind(styles);
const hehe = true;
function Login({ onLogin }) {
    const [loginQr, setLoginQr] = useState(false);
    if (onLogin) {
        return (
            <OverLay>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <div className={cx('header-icon-wrap')}>
                            {loginQr && (
                                <div
                                    className={cx('icon-prev-wrap')}
                                    onClick={() => setLoginQr(false)}
                                >
                                    <PrevIcon
                                        className={cx('icon-prev')}
                                    ></PrevIcon>
                                </div>
                            )}
                            <div
                                className={cx('icon-close-wrap')}
                                onClick={() => {
                                    onLogin();
                                }}
                            >
                                <CloseIcon
                                    className={cx('icon-close')}
                                ></CloseIcon>
                            </div>
                        </div>

                        <h3 className={cx('heading')}>
                            {loginQr ? 'Log in to QR' : 'Log in to TikTok'}
                        </h3>
                    </div>
                    <div className={cx('content')}>
                        {loginQr ? (
                            <div className={cx('Login-qr')}>
                                <div className={cx('qr-help')}>
                                    <img
                                        className={cx('img-qr')}
                                        alt=""
                                        src="https://tiktok-pc.vercel.app/static/media/MyQR.cb0cf7e9468223ae8e23.jpg"
                                    />
                                    <div className={cx('help')}>
                                        <p className={cx('help-step')}>
                                            1. Open the TikTok app on your
                                            mobile device
                                        </p>
                                        <p className={cx('help-step')}>
                                            2. On Profile, tap
                                        </p>
                                        <p className={cx('help-step')}>
                                            3. Tap and scan the QR code to
                                            confirm your login
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('preview-help')}>
                                    <img
                                        className={cx('preview-help-img')}
                                        alt=""
                                        src="https://tiktok-pc.vercel.app/static/media/QRSteps.b6d3cc69d3525571aef0.gif"
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div
                                    className={cx('login-method')}
                                    onClick={() => setLoginQr(true)}
                                >
                                    <QrIcon className={cx('icon')}></QrIcon>
                                    <p className={cx('desc')}>Use QR Code</p>
                                </div>
                                <div className={cx('login-method')}>
                                    <UserIcon className={cx('icon')}></UserIcon>
                                    <p className={cx('desc')}>
                                        Use phone / email / username
                                    </p>
                                </div>
                                <div className={cx('login-method')}>
                                    <FaceBookIcon
                                        className={cx('icon')}
                                    ></FaceBookIcon>
                                    <p className={cx('desc')}>
                                        Continue with Facebook
                                    </p>
                                </div>
                                <div className={cx('login-method')}>
                                    <GoogleIcon
                                        className={cx('icon')}
                                    ></GoogleIcon>
                                    <p className={cx('desc')}>
                                        Continue with Google
                                    </p>
                                </div>
                                <div className={cx('login-method')}>
                                    <TwitterIcon
                                        className={cx('icon')}
                                    ></TwitterIcon>
                                    <p className={cx('desc')}>
                                        Continue with Twitter
                                    </p>
                                </div>
                                <div className={cx('login-method')}>
                                    <LineIcon className={cx('icon')}></LineIcon>
                                    <p className={cx('desc')}>
                                        Continue with LINE
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                    <footer className={cx('footer')}>
                        <span className={cx('title')}>
                            Already have an account?
                        </span>
                        <p className={cx('sing-up')}>Sing up</p>
                    </footer>
                </div>
            </OverLay>
        );
    } else {
        return;
    }
}

export default Login;
