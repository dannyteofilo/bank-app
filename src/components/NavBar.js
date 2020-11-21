import React from 'react'
import moment from 'moment'
import {  useSelector } from 'react-redux';

export const NavBar = () => {
    const state = useSelector(state => state.currentBranch)
    const { current } = state
    const titleDefault = 'Branch'
    const date = new Date();
    return (
        <div>
            <nav className="navbar navbar-dark">
                <p className="navbar-brand">{current ? current.title : titleDefault}</p>
                <p className="navbar-brand">{moment(date).format("MMM Do YY")}</p>
            </nav>
        </div>
    )
}
