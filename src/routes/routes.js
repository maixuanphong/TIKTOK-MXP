import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';
import Video from '~/Pages/Video/Video';
import VideoHome from '~/Pages/VideoHome/VideoHome';
//routerConfig
import config from '~/config';

// layout
import { HeaderOnly } from '~/Layout';

// public
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
    { path: config.routes.video, component: Video, layout: null },
    { path: config.routes.videoHome, component: VideoHome, layout: null },
];

// private
const privateRoutes = [];

export { publicRoutes, privateRoutes };
