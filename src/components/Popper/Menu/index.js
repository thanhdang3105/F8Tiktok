import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

const cx = classNames.bind(Styles);

export default function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index}>{item}</MenuItem>);
    };

    return (
        <Tippy
            interactive
            placement="bottom-end"
            duration={[1000, 500]}
            delay={[0, 1000]}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
