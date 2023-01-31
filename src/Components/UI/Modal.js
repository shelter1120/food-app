import React, { Fragment } from 'react'
import classes from "../UI/Modal.module.css"
import { createPortal } from 'react-dom'

const BackDrop = (props)=>{
    return <div className={classes.backdrop}></div>
}

const OverLay = (props)=>{
return <div className={classes.modal}>
    <div>{props.children}</div>
</div>
}

const modalElements = document.getElementById('overlays')
const Modal = (props) => {
  return (
    <Fragment>
    {createPortal(<BackDrop />,modalElements)}
    {createPortal(<OverLay>{props.children}</OverLay>,modalElements)}

    </Fragment>
  )
}

export default Modal