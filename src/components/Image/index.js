import React from 'react';
import images from '~/assets/images/index';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = React.forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...prop }, ref) => {
    const [fallback, setFallback] = React.useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...prop}
            onError={handleError}
        />
    );
});

export default Image;
