import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import createClassName from 'classnames';
import styles from '../MainNavigation.module.scss';

type Props = {
    title: string;
    path: string;
};

const MainNavigationItem: React.FC<Props> = ({ path, title }) => {
    const location = useLocation();

    const isCurrent = path === location.pathname;

    const className = createClassName(styles.container, {
        [styles.isCurrent]: isCurrent,
    });

    return (
        <Link to={path} className={className}>
            {title}
        </Link>
    );
};

export default MainNavigationItem;
