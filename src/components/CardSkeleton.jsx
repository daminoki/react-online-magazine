import React from 'react';
import ContentLoader  from 'react-content-loader';
import styles from './CardSkeleton.module.scss';

function CardSkeleton() {
    return (
        <div className={styles['card-skeleton']}>
            <ContentLoader
                speed={2}
                width={190}
                height={250}
                viewBox="0 0 200 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="1" y="8" rx="10" ry="10" width="185" height="145" />
                <rect x="0" y="170" rx="5" ry="5" width="185" height="15" />
                <rect x="0" y="190" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="225" rx="5" ry="5" width="80" height="25" />
                <rect x="155" y="220" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>
        </div>
    );
};

export default CardSkeleton;