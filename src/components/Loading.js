import React from 'react'
import { useSelector } from 'react-redux'

export const Loading = () => {
    const state = useSelector(state => state)
    const { requesting: requestBranchs } = state.banks;
    const { requesting: requestEmployees } = state.employees;
    return (
        <div className="progress-loader">
            {
                (requestBranchs || requestEmployees) &&
                <div className="loading-spinner">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}
