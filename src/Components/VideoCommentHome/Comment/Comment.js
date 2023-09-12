import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import Login from '~/Components/Login/Login';
import CommentItem from '../CommentItem/CommentItem';
import * as GetComment from '~/services/CommentServices';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(styles);

function Comment() {
    const [isLogin, setIsLogin] = useState(false);
    // const [listComment, setListComment] = useState();
    const params = useParams();
    console.log(params);

    // handle login
    const handleLogin = () => {
        setIsLogin(!isLogin);
    };

    // const fetchApi = async () => {
    //     const res = await GetComment.getComment(1);
    //     console.log(res);
    //     setListComment(res);
    // };
    // fetchApi();

    console.log(params.id);
    //fetchApi

    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment')}>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
                <CommentItem></CommentItem>
            </div>
            {/* {listComment.map((comment, index) => {
                return (
                    <CommentItem key={index} video={comment}></CommentItem>
                );
            })} */}
            <div className={cx('enter-comment-wrap')}>
                <div className={cx('enter-comment')} onClick={handleLogin}>
                    Đăng nhập để bình luận
                </div>
            </div>
            {isLogin ? <Login onLogin={handleLogin}></Login> : ''}
        </div>
    );
}

export default Comment;
