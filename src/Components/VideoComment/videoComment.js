import classNames from 'classnames/bind';
import styles from './VideoComment.module.scss';
import Infor from './Infor/Infor';
import * as UserService from '~/services/userService';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(styles);
function VideoComment() {
    const params = useParams();
    console.log(params);
    const fetchApi = async () => {
        const res = await UserService.getUserInfor();
    };
    fetchApi();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-content')}>
                <div className={cx('video-wrap')}>
                    <video
                        className={cx('video')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/videos/1357-63c803d8e7cf7.mp4"
                        controls
                    />
                </div>
                <div className={cx('infor-comment')}>
                    <Infor className={cx('infor')}></Infor>
                </div>
            </div>
        </div>
    );
}

export default VideoComment;
