import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoComment.module.scss';
import Infor from './Infor/Infor';
import Comment from './Comment/Comment';
import * as UserService from '~/services/userService';
import { CloseIcon, DownIcon, UpIcon } from '../icon';
const cx = classNames.bind(styles);
function VideoComment() {
    const currentVideo = {};
    const handleNext = useRef();
    const handlePrev = useRef();
    const [video, setVideo] = useState({});
    const params = useParams();
    const [videoId, setVideoId] = useState(params.id);
    console.log(params);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await UserService.getUserInfor(
                `@${params.nickname}`,
            );

            console.log(response.videos.length);
            const videoUser = response.videos.find((video, index) => {
                currentVideo.index = index;
                return video?.id == videoId;
            });
            setVideo(videoUser);

            // handle next
            const handleNextVideo = () => {
                if (currentVideo.index < response.videos.length - 1) {
                    currentVideo.index++;
                } else {
                    currentVideo.index = response.videos.length - 1;
                }
                setVideo(response.videos[currentVideo.index]);
            };
            handleNext.current = handleNextVideo;

            //handle prev
            const handlePrevVideo = () => {
                if (currentVideo.index > 0) {
                    currentVideo.index--;
                } else {
                    currentVideo.index = 0;
                }

                setVideo(response.videos[currentVideo.index]);
            };
            handlePrev.current = handlePrevVideo;
        };
        fetchApi();
    }, [videoId]);
    console.log(video);
    console.log(params.id);

    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('close-wrap')}>
                    <div
                        onClick={() => {
                            window.history.back();
                        }}
                    >
                        <CloseIcon className={cx('close-icon')}></CloseIcon>
                    </div>
                </div>

                <div className={cx('video-content')}>
                    <div className={cx('video-wrap')}>
                        <video
                            className={cx('video')}
                            src={video?.file_url}
                            controls
                            autoPlay
                        />
                        <div className={cx('next-prev-video')}>
                            <div
                                className={cx('prev-video')}
                                onClick={handlePrev.current}
                            >
                                <UpIcon className={cx('prev-icon')}></UpIcon>
                            </div>

                            <div
                                className={cx('next-video')}
                                onClick={handleNext.current}
                            >
                                <DownIcon
                                    className={cx('next-icon')}
                                ></DownIcon>
                            </div>
                        </div>
                    </div>
                    <div className={cx('infor-comment')}>
                        <Infor className={cx('infor')} video={video}></Infor>
                        <Comment className={cx('comment')}></Comment>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoComment;
