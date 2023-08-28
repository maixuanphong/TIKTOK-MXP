import classNames from 'classnames/bind';
import styles from './Infor.module.scss';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/Components/image/image';
import Button from '~/Components/Button/button';
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

function Infor() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('infor-head')}>
                <div className={cx('avata-wrap')}>
                    <Image
                        className={cx('avata')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/4854/646231eb7a517.png"
                        alt=""
                    ></Image>
                </div>
                <div className={cx('name')}>
                    <p className={cx('nick-name')}>maiphonf24234</p>
                    <p className={cx('full-name')}>mai xuân phong</p>
                </div>
                <Button className={cx('btn-follow')} outline small>
                    Follow
                </Button>
            </div>
            <div className={cx('infor-body')}>
                <a href="" className={cx('link')}>
                    kdfjaklsfjaklsdfjaslf
                </a>
                <div className={cx('music-wrap')}>
                    <FontAwesomeIcon
                        className={cx('icon-music')}
                        icon={faMusic}
                    ></FontAwesomeIcon>
                    <p className={cx('music')}>Người hãy quên anh đi</p>
                </div>
                <div className={cx('favorite-comment-share')}>
                    <div className={cx('favorite-comment')}>
                        <div className={cx('favorite-wrap')}>
                            <div className={cx('icon-wrap')}>
                                <FavoriteIcon
                                    className={cx('favorite-icon')}
                                ></FavoriteIcon>
                            </div>
                            <p className={cx('quantity')}>12</p>
                        </div>
                        <div className={cx('comment-wrap')}>
                            <div className={cx('icon-wrap')}>
                                <CommentsIcon
                                    className={cx('comment-icon')}
                                ></CommentsIcon>
                            </div>

                            <p className={cx('quantity')}>12</p>
                        </div>
                    </div>
                    <div className={cx('share')}>
                        <Tippy content="Nhúng">
                            <EmbedIcon className={cx('icon-share')}></EmbedIcon>
                        </Tippy>
                        <Tippy content="Chia sẽ với FaceBook">
                            <FaceBookIcon
                                className={cx('icon-share')}
                            ></FaceBookIcon>
                        </Tippy>
                        <Tippy content="Chia sẽ với Twitter">
                            <TwitterIcon
                                className={cx('icon-share')}
                            ></TwitterIcon>
                        </Tippy>
                        <Tippy content="Chia sẽ với Line">
                            <LineIcon className={cx('icon-share')}></LineIcon>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infor;
