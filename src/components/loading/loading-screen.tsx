'use client';
import React from 'react';
import './_loading-screen.scss';

export const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo">
                    <div className="logo-circle">
                        <div className="logo-inner"></div>
                    </div>
                </div>
                <div className="loading-text">
                    <h2>Syed Bilal Ali</h2>
                    <p>Developer & Systems Analyst</p>
                </div>
                <div className="loading-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>
            </div>
        </div>
    );
};
