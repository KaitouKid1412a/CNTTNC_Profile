import React, { memo } from 'react';
import Header from '../components/Header/Header';
import './styles.scss';

const FindJobLayout = memo(({ children }) => {
    return (
        <div className="find-job--layout">
            <Header />
            {children}
        </div>
    );
});

export default FindJobLayout;
