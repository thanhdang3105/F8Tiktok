import React from 'react';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(Styles);

export default function MenuItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Button leftIcon={children.icon} className={cx('menu_item')} style_btn="large" to={children.to}>
                <span>{children.title}</span>
            </Button>
        </div>
    );
}
