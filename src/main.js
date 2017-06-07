import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import {GalleryForZZW} from './components/gallery/GalleryForZZW';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('zzw-gallery')
    );
};

render(GalleryForZZW);
if (module.hot) {
    module.hot.accept('./components/gallery/GalleryForZZW', () => {
        render(GalleryForZZW)
    });
}