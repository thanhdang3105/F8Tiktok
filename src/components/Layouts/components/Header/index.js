import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
// import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

export default function Header() {
    const [valueInputSearch, setValueInputSearch] = React.useState('');
    const [resultSearch, setResultSearch] = React.useState([]);
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
                <Tippy
                    interactive
                    visible={resultSearch.length > 0}
                    render={(resultSearch) => (
                        <div className={cx('search-result')} tabIndex="-1" {...resultSearch}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts </h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}
