import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Infor.module.scss';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/Components/image/image';
import Button from '~/Components/Button/button';
import Login from '~/Components/Login/Login';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import {
    CommentsIcon,
    EmbedIcon,
    FavoriteIcon,
    FaceBookIcon,
    TwitterIcon,
    LineIcon,
} from '~/Components/icon';
const cx = classNames.bind(styles);

function Infor({ video }) {
    console.log(video.user?.id);
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {
        setIsLogin(!isLogin);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('infor-head')}>
                <div className={cx('avata-wrap')}>
                    <Image
                        className={cx('avata')}
                        src={video?.user?.avatar}
                        alt=""
                    ></Image>
                </div>
                <div className={cx('name')}>
                    <p className={cx('nick-name')}>{video?.user?.nickname}</p>
                    <p
                        className={cx('full-name')}
                    >{`${video?.user?.first_name} ${video?.user?.last_name}`}</p>
                </div>
                <Button
                    className={cx('btn-follow')}
                    outline
                    small
                    onClick={handleLogin}
                >
                    Follow
                </Button>
            </div>
            <div className={cx('infor-body')}>
                <a href="" className={cx('link')}>
                    {video?.thumb_url}
                </a>
                <div className={cx('music-wrap')}>
                    <FontAwesomeIcon
                        className={cx('icon-music')}
                        icon={faMusic}
                    ></FontAwesomeIcon>
                    <p className={cx('music')}>{video?.music}</p>
                </div>
                <div className={cx('favorite-comment-share')}>
                    <div className={cx('favorite-comment')}>
                        <div className={cx('favorite-wrap')}>
                            <div className={cx('icon-wrap')}>
                                <FavoriteIcon
                                    className={cx('favorite-icon')}
                                ></FavoriteIcon>
                            </div>
                            <p className={cx('quantity')}>
                                {video?.likes_count}
                            </p>
                        </div>
                        <div className={cx('comment-wrap')}>
                            <div className={cx('icon-wrap')}>
                                <CommentsIcon
                                    className={cx('comment-icon')}
                                ></CommentsIcon>
                            </div>

                            <p className={cx('quantity')}>
                                {video?.comments_count}
                            </p>
                        </div>
                    </div>
                    <div className={cx('share')}>
                        <Tippy content="Nhúng">
                            <div style={{ display: 'inline-block' }}>
                                <EmbedIcon
                                    className={cx('icon-share')}
                                ></EmbedIcon>
                            </div>
                        </Tippy>
                        <Tippy content="Chia sẽ với FaceBook">
                            <div style={{ display: 'inline-block' }}>
                                <FaceBookIcon
                                    className={cx('icon-share')}
                                ></FaceBookIcon>
                            </div>
                        </Tippy>
                        <Tippy content="Chia sẽ với Twitter">
                            <div style={{ display: 'inline-block' }}>
                                <TwitterIcon
                                    className={cx('icon-share')}
                                ></TwitterIcon>
                            </div>
                        </Tippy>
                        <Tippy content="Chia sẽ với Line">
                            <div style={{ display: 'inline-block' }}>
                                <LineIcon
                                    className={cx('icon-share')}
                                ></LineIcon>
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className={cx('link-profile-wrap')}>
                    <p className={cx('link-profile')}>
                        {video?.user?.website_url}
                    </p>
                    <p className={cx('coppy-link')}>Sao chép liên kết</p>
                </div>
            </div>
            {isLogin ? <Login onLogin={handleLogin}></Login> : ''}
        </div>
    );
}

Infor.propTypes = {
    video: PropTypes.object.isRequired,
};

export default Infor;
