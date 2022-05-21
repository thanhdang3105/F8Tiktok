import React from 'react';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const cx = classNames.bind(Styles);

export default function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={solid('chevron-left')} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}
