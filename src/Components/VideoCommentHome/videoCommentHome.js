import { useEffect, useRef, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './VideoCommentHome.module.scss';
import Infor from './Infor/Infor';
import Comment from './Comment/Comment';
import * as VideoServices from '~/services/VideoServices';
import { CloseIcon, DownIcon, UpIcon } from '../icon';
const cx = classNames.bind(styles);
function VideoComment() {
    const [video, setVideo] = useState({});
    const params = useParams();
    const [listVideo, setListVideo] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await VideoServices.getVideos('for-you', page);
            setListVideo((preRes) => [...preRes, ...res]);
        };
        fetchApi();

        const currentVideo = listVideo.find((video) => {
            return video?.id == params.id;
        });

        setVideo(currentVideo);
    }, [page, params.id, listVideo]);

    // handle when scroll the end
    window.addEventListener('scroll', function () {
        // Kiểm tra nếu con trỏ cuộn đến cuối trang
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPage((prePage) => prePage + 1);
        }
    });

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
                                // onClick={handlePrev.current}
                            >
                                <UpIcon className={cx('prev-icon')}></UpIcon>
                            </div>

                            <div
                                className={cx('next-video')}
                                // onClick={handleNext.current}
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

export default memo(VideoComment);
