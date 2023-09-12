import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';
import Image from '~/Components/image/image';
import { FavoriteIcon1 } from '~/Components/icon/icon';
const cx = classNames.bind(styles);

function CommentItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avata-wrap')}>
                <Image
                    className={cx('avata')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/3998/63650b54826f3.jpg"
                    alt=""
                />
            </div>
            <div className={cx('infor')}>
                <p className={cx('name')}>Mai Xuân Phong</p>
                <p className={cx('comment')}>Hay quá</p>
                <div className={cx('time-reply')}>
                    <p className={cx('time')}>23-8-2023</p>
                    <p className={cx('reply')}>Trả lời</p>
                </div>
            </div>
            <div className={cx('like')}>
                <div className={cx('like-icon-wrap')}>
                    <FavoriteIcon1 className={cx('like-icon')}></FavoriteIcon1>
                </div>
                <span className={cx('like-quantity')}>3</span>
            </div>
        </div>
    );
}

export default CommentItem;
