import React from 'react';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { Link } from 'react-router-dom';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
// import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        visible: 'login',
        icon: <FontAwesomeIcon icon={regular('user')} />,
        title: 'Profile',
        to: '/@idUser',
    },
    {
        visible: 'login',
        icon: <FontAwesomeIcon icon={brands('bitcoin')} />,
        title: 'Get coins',
        to: '/get-coins',
    },
    {
        visible: 'login',
        icon: <FontAwesomeIcon icon={solid('gear')} />,
        title: 'Settings',
        to: '/settings',
    },
    {
        visible: 'un-login',
        icon: <FontAwesomeIcon icon={solid('language')} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'English',
                            },
                        ],
                    },
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        visible: 'un-login',
        icon: <FontAwesomeIcon icon={regular('circle-question')} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        visible: 'un-login',
        icon: <FontAwesomeIcon icon={solid('keyboard')} />,
        title: 'Keyboard shortcuts',
    },
    {
        visible: 'login',
        icon: <FontAwesomeIcon icon={solid('arrow-right-from-bracket')} />,
        title: 'Logout',
        to: '/logout',
        border: 'border-top',
    },
];

export default function Header() {
    const [currentUser, setCurrentUser] = React.useState(false);
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

    const handleMenuClick = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <Image src="https://sogamotion.com/wp-content/uploads/2021/05/tiktok-logo.png" alt="Logo" />
                </Link>
                <HeadlessTippy
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
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <Link to="/upload" className={cx('icon')}>
                                    <UploadIcon />
                                </Link>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <Link to="/message" className={cx('icon')}>
                                    <MessageIcon />
                                </Link>
                            </Tippy>
                            <HeadlessTippy
                                hideOnClick="toggle"
                                trigger="click"
                                interactive
                                onClickOutside={(instance) => {
                                    instance.hide();
                                }}
                                render={(resultSearch) => (
                                    <div className={cx('search-result')} tabIndex="-1" {...resultSearch}>
                                        <PopperWrapper>
                                            <h4 className={cx('search-title')}>Accounts </h4>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <Tippy content="Inbox" placement="bottom">
                                    <button className={cx('icon')}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                            </HeadlessTippy>
                            <Menu user={currentUser} items={MENU_ITEMS} onMenuClick={handleMenuClick}>
                                <Image
                                    src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"
                                    alt="avatar"
                                    className={cx('avatar-currentUser')}
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button style_btn="text">Upload</Button>
                            <Button
                                leftIcon={<FontAwesomeIcon icon={solid('sign-in')} />}
                                color_btn="primary"
                                onClick={() => setCurrentUser(true)}
                            >
                                Log in
                            </Button>
                            <Menu items={MENU_ITEMS} onMenuClick={handleMenuClick}>
                                <button className={cx('icon')}>
                                    <FontAwesomeIcon icon={solid('ellipsis-vertical')} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
