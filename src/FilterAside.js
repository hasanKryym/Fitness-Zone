import React from 'react'
import { useState, useEffect } from 'react';


const FilterAside = ({filterEx}) => {
    const [showAside, setShowAside] = useState(false);

    
    useEffect(() => {
    setShowAside(false);
  },[]);
  return (
    <>
    <div className='toggle'>
        <button className='toggle-filter_btns' onClick={() => setShowAside(!showAside)}><i className="fa-solid fa-filter"></i></button>
        </div>
            <aside className={`filter-btns ${showAside && 'show-filter_btns'}`}>
                <button id='s' onClick={() => setShowAside(false)} className='close-btn'><i className="fa-solid fa-x"></i></button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>all</button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>chest</button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>triceps</button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>back</button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>biceps</button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>trapezius</button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>shoulder</button>
                <button onClick={(e) => {
                filterEx(e.currentTarget.innerHTML)
                setShowAside(false);
                }} className='filter-btn'>legs</button>
            </aside>
    </>
  )
}

export default FilterAside