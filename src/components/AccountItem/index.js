import React from 'react';
import className from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(Styles);

export default function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"
                alt="Name Account"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyeenx van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </h4>
                <span className={cx('user-name')}>Nguyeenx van A</span>
            </div>
        </div>
    );
}
