import React, { useState } from 'react'
import Modal from 'react-modal'

const GalleryItem = ({ work: { imgFile, title, description, id } }) => {
    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(380, 380, 380, 0.75)',
            zIndex: '2'
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'Column',
            maxWidth: '800px',
            borderStyle: 'none',
            boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
            textAlign: 'center'
        },
    };

    const [modalIsOpen, setmodalIsOpen] = useState(false)
    return (
        <div>
            <div className="card" onClick={() => setmodalIsOpen(true)}>
                <img src={imgFile} alt="" />
            </div>
            <Modal closeTimeoutMS={600} appElement={document.getElementById('root')} classname='ReactModal__overlay' onRequestClose={() => setmodalIsOpen(false)} style={customStyles} isOpen={modalIsOpen}>
                <img className='modal-img' src={imgFile} alt="" />
                <h1>{title}</h1>
                <div className='modal-description'>
                    <p>{description}</p>
                </div>
                <img onClick={() => setmodalIsOpen(false)} src='https://www.flaticon.com/svg/static/icons/svg/1828/1828774.svg' style={{ width: '12px', marginTop: '10px', marginLeft: '98%', cursor: 'pointer' }} alt='' />
            </Modal>
        </div>
    )
}

export default GalleryItem
