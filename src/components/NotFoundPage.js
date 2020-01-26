import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div>
            <div className="h-screen w-screen flex justify-center content-center flex-wrap">
                <p className="font-sans text-white error-text">404</p>
            </div>

            <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
                <span className="opacity-30">Take me back to </span>
                <Link className="border-b" to="/">{process.env.REACT_APP_NAME}</Link>
            </div>
            <style jsx>{`
        error-text {
            font-size: 130px;
        }
    
        @media (min-width: 768px) {
            .error-text {
            font-size: 220px;
            }
        }
      `}</style>
        </div>
    )
}
