import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src="https://sogamotion.com/wp-content/uploads/2021/05/tiktok-logo.png" alt="Logo" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellcheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}
