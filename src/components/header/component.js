import React from 'react';
import styles from './component.scss';

export default class Header extends React.Component {

    render() {
        return (
            <div className={styles.app-header}>
                <h1>Coupon code App</h1>
            </div>
        );
    }
}