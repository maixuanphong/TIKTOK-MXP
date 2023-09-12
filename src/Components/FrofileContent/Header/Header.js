import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import Button from '~/Components/Button/button';
import Login from '~/Components/Login/Login';
import {
    ShareProfileIcon,
    MoreIcon,
    EmbedIcon,
    FaceBookIcon,
    LineIcon,
    TwitterIcon,
    CoppyIcon,
} from '~/Components/icon';
import { Wrapper } from '~/Components/Popper';

const cx = classNames.bind(styles);
function Header({ user }) {
    const [isErrorImg, setIsErrorImg] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {
        setIsLogin(!isLogin);
    };
    const renderShare = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <Wrapper className={cx('wrap-share-function')}>
                    <div className={cx('share-function')}>
                        <EmbedIcon></EmbedIcon>
                        <p className={cx('share-function-name')}>Embed</p>
                    </div>
                    <div className={cx('share-function')}>
                        <FaceBookIcon></FaceBookIcon>
                        <p className={cx('share-function-name')}>
                            Share to Facebook
                        </p>
                    </div>
                    <div className={cx('share-function')}>
                        <LineIcon></LineIcon>
                        <p className={cx('share-function-name')}>
                            Share to Line
                        </p>
                    </div>
                    <div className={cx('share-function')}>
                        <TwitterIcon></TwitterIcon>
                        <p className={cx('share-function-name')}>
                            Share to Twitter
                        </p>
                    </div>
                    <div className={cx('share-function')}>
                        <CoppyIcon
                            className={cx('share-function-icon')}
                        ></CoppyIcon>
                        <p className={cx('share-function-name')}>Coppy Link</p>
                    </div>
                </Wrapper>
            </div>
        );
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('infor-wrap')}>
                <div className={cx('infor')}>
                    {isErrorImg ? (
                        <img
                            className={cx('avata')}
                            src="https://anhdep123.com/wp-content/uploads/2020/11/avatar-facebook-mac-dinh-nam.jpeg"
                        />
                    ) : (
                        <img
                            className={cx('avata')}
                            src={user.avatar}
                            alt=""
                            onError={() => setIsErrorImg(true)}
                        />
                    )}

                    <div className={cx('infor-other')}>
                        <div className={cx('nick-name-wrapper')}>
                            <h2 className={cx('nick-name')}>
                                {' '}
                                {user.nickname}
                            </h2>
                            {user.tick && (
                                <FontAwesomeIcon
                                    className={cx('icon-tick')}
                                    icon={faCheckCircle}
                                ></FontAwesomeIcon>
                            )}
                        </div>
                        <p
                            className={cx('full-name')}
                        >{`${user.first_name} ${user.last_name}`}</p>
                        <Button
                            className={cx('follow-btn')}
                            onClick={handleLogin}
                            primary
                            large
                        >
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('user-follow')}>
                    <p className={cx('name-user-follow')}>
                        <strong className={cx('quantity-user-follow')}>
                            {user.followings_count}
                        </strong>
                        Following
                    </p>
                    <p className={cx('name-user-follow')}>
                        <strong className={cx('quantity-user-follow')}>
                            {user.followers_count}
                        </strong>
                        Followers
                    </p>
                    <p className={cx('name-user-follow')}>
                        <strong className={cx('quantity-user-follow')}>
                            {user.likes_count}
                        </strong>
                        Likes
                    </p>
                </div>
                <p className={cx('bio')}>{user.bio}</p>
                <a href={user.website_url} className={cx('link-infor')}>
                    {user.website_url}
                </a>
            </div>
            <div className={cx('more-share')}>
                <div>
                    <Tippy
                        offset={[-14, 10]}
                        interactive
                        delay={[0, 300]}
                        placement="bottom-start"
                        render={renderShare}
                    >
                        <div className={cx('icon-wrapper')}>
                            <ShareProfileIcon></ShareProfileIcon>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('icon-wrapper')}>
                    <MoreIcon></MoreIcon>
                </div>
            </div>
            {isLogin ? <Login onLogin={handleLogin}></Login> : ''}
        </div>
    );
}

export default Header;
