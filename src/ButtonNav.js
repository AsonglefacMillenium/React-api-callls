import React from 'react'

const ButtonNav = ( props) => {
    return (
        <div className="button-nav" onClick={props.onClick}>
        <img src={props.image} alt="" />
        <p>{props.title}</p>
            
        </div>
    )
}

export default ButtonNav 
