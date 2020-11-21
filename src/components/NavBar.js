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
                <a className="navbar-brand" href="#">{current ? current.title : titleDefault}</a>
                <a className="navbar-brand" href="#">{moment(date).format("MMM Do YY")}</a>
            </nav>
        </div>
    )
}
