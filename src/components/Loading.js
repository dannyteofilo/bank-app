import React from 'react'

export const Loading = () => {
    return (
        <div className="progress-loader">
            <div className="loading-spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
