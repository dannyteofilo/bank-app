import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentBranch } from '../actions/currentBranch';

export const ItemSideBar = (props) => {
    const { id, name } = props.item;
    const dispatch = useDispatch();

    const state = useSelector(state => state.currentBranch)
    const { current } = state

    const currentId= current ? current.id : null;

    const handleCkick = () => {
        props.click(id)
        dispatch(currentBranch({id,name}));
    }

    return (
        <div className={currentId === id ? ['row mt-5 pointer link active'] : ['row mt-5 pointer link']} onClick={handleCkick}>
            <div className='col-1'>
                <i className="fas fa-coins"></i>
            </div>
            <div className='col-10'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}
