import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(Styles);

export default function Menu({ children, user, items = [], onMenuClick = () => {} }) {
    const [history, setHistory] = React.useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            if (user) {
                return (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                onMenuClick(item);
                            }
                        }}
                    >
                        {item}
                    </MenuItem>
                );
            }
            return (
                item.visible === 'un-login' && (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                onMenuClick(item);
                            }
                        }}
                    >
                        {item}
                    </MenuItem>
                )
            );
        });
    };

    return (
        <Tippy
            onHidden={() => {
                history.length > 1 && setHistory([history[0]]);
            }}
            interactive
            arrow
            placement="bottom-end"
            duration={[1000, 500]}
            delay={[0, 1000]}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-list')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
