import React from 'react'
import Modal from './Modal'
import '../css/Backdrop.css'

const Backdrop = ({Id,onClick}) => {
  return (
    <Modal containerId={Id}>
        <div className='backdrop' onClick={onClick}></div>
    </Modal>
  )
}
export default Backdrop