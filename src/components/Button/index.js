import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);

export default function Button({
    to,
    href,
    onClick,
    children,
    style_btn,
    size,
    color_btn,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={cx('wrapper', style_btn, size, color_btn, className)} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
