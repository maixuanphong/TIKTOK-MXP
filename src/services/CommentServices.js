import * as HttpRequest from '~/untils/httpRequest';

export const getComment = async (VideoId) => {
    try {
        const res = await HttpRequest.get(`videos/${VideoId}/comments`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
