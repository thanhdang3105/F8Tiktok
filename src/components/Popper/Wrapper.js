import React from 'react';
import Styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

export default function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}
