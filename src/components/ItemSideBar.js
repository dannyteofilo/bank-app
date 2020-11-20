import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentBank } from '../actions/currentBank';

export const ItemSideBar = (props) => {
    const { id, name, bank } = props.item;
    const dispatch = useDispatch();

    const state = useSelector(state => state.currentBank)
    const { current } = state

    const handleCkick = () => {
        props.click(id)
        dispatch(currentBank(id));
    }

    return (
        <div className={current === id ? ['row mt-5 pointer link active'] : ['row mt-5 pointer link']} onClick={handleCkick}>
            <div className='col-1'>
                <i className="fas fa-coins"></i>
            </div>
            <div className='col-10'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}
