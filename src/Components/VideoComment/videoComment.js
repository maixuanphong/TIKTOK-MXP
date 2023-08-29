import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoComment.module.scss';
import Infor from './Infor/Infor';
import * as UserService from '~/services/userService';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function VideoComment() {
    const [video, setVideo] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await UserService.getUserInfor(
                `@${params.nickname}`,
            );
            const videoUser = response.videos.find((video) => {
                return video.id == params.id;
            });
            setVideo(videoUser);
        };
        fetchApi();
    }, [params.id]);
    console.log(video);
    console.log(params.id);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-content')}>
                <div className={cx('video-wrap')}>
                    <video
                        className={cx('video')}
                        src={video?.file_url}
                        controls
                    />
                </div>
                <div className={cx('infor-comment')}>
                    <Infor className={cx('infor')} video={video}></Infor>
                </div>
            </div>
        </div>
    );
}

export default VideoComment;
