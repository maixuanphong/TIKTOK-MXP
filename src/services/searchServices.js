import * as HttpRequest from '~/untils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await HttpRequest.get(`users/search`, {
            params: { q, type },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
