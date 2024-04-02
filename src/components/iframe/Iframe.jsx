import PropTypes from 'prop-types';
import { useState } from 'react';
import { icons } from '../../utils/icons/icons';

export const Iframe = ({src}) => {
    const [ view, setView ] = useState('desktop');
    return (
        <div className='iframe'>
        <div className={`iframe__container iframe--${view}`}>
      <iframe src={src} className='iframe__content'></iframe>
      </div>
        <div className="iframe__view">
            <span
            className={`iframe__view-btn ${
                view === 'desktop' ? 'iframe__view-btn--active' : ''
            }`}
            onClick={() => setView('desktop')}
            >
            {icons.desktop}
            </span>
            <span
            className={`iframe__view-btn ${
                view === 'tablet' ? 'iframe__view-btn--active' : ''
            }`}
            onClick={() => setView('tablet')}
            >
            {icons.tablet}
            </span>
            <span
            className={`iframe__view-btn ${
                view === 'mobile' ? 'iframe__view-btn--active' : ''
            }`}
            onClick={() => setView('mobile')}
            >
            {icons.mobile}
            </span>
        </div>
        </div>
    );
};

Iframe.propTypes = {
    src: PropTypes.string.isRequired
};