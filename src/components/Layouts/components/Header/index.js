import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Header() {
    const [valueInputSearch, setValueInputSearch] = React.useState('');
    const [valueSearch, setValueSearch] = React.useState('');
    const [spinnerVisible, setSpinnerVisible] = React.useState(false);

    const handleChangeInput = (value) => {
        setValueInputSearch(value);
        setSpinnerVisible(true);
        if (value === '') {
            setSpinnerVisible(false);
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src="https://sogamotion.com/wp-content/uploads/2021/05/tiktok-logo.png" alt="Logo" />
                </div>
                <div className={cx('search')}>
                    <input
                        placeholder="Search accounts and videos"
                        value={valueInputSearch}
                        onChange={(e) => handleChangeInput(e.target.value)}
                        spellCheck={false}
                    />
                    {!spinnerVisible && valueInputSearch && (
                        <button className={cx('clear')} onClick={() => setValueInputSearch('')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {spinnerVisible && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}
