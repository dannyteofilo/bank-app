import React from 'react'

export const ItemSideBar = (props) => {
    const { id, name, bank } = props.item
    const handleCkick = () => {
        props.click(bank)
    }
    return (
        <div className='row mt-5 pointer link' onClick={handleCkick}>
            <div className='col-1'>
                <i className="fas fa-coins"></i>
            </div>
            <div className='col-10'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}
