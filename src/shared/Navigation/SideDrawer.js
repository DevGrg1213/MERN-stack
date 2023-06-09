import React from 'react'
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import "./SideDrawer.css"
function SideDrawer(props) {
  const   content  = <CSSTransition
    in={props.show}
    classNames="slide-in-left"
    onMountEnter 
    unmountOnExit>
      <aside className='side-drawer' onClick={props.click}>{props.children}</aside></CSSTransition>;
  return (
    ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
  )
}

export default SideDrawer