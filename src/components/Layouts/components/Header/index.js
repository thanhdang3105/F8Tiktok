import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
// import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={solid('language')} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={regular('circle-question')} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={solid('keyboard')} />,
        title: 'Keyboard shortcuts',
    },
];

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
                                <FontAwesomeIcon icon={solid('circle-xmark')} />
                            </button>
                        )}
                        {spinnerVisible && <FontAwesomeIcon className={cx('loading')} icon={solid('spinner')} />}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={solid('search')} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {/* <FontAwesomeIcon icon={solid('cloud-arrow-up')} />
                    <FontAwesomeIcon icon={regular('paper-plane')} />
                    <FontAwesomeIcon icon={regular('message')} /> */}
                    <Button style_btn="text">Upload</Button>
                    <Button leftIcon={<FontAwesomeIcon icon={solid('sign-in')} />} color_btn="primary">
                        Log in
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('actions-more')}>
                            <FontAwesomeIcon icon={solid('ellipsis-vertical')} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
