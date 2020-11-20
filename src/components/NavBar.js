import React from 'react'
import moment from 'moment'


export const NavBar = ({title}) => {
    const titleDefault = 'Branch'
    const date = new Date();
    return (
        <div>
            <nav className="navbar navbar-dark">
                <a className="navbar-brand" href="#">{title ? title : titleDefault}</a>
                <a className="navbar-brand" href="#">{moment(date).format("MMM Do YY")}</a>
            </nav>
        </div>
    )
}
