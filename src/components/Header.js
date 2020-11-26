import React, { useState } from 'react'
import Modal from 'react-modal'

export default function Header() {
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
        }
    };
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <div className='header'>
            <div className='title'>
                <a href="#splash">
                    <h1>Portfolio</h1>
                </a>
            </div>
            <div className='navigation'>
                <ul>
                    <a href="#gallery">
                        <li>Works</li>
                    </a>
                    <li onClick={() => setmodalIsOpen(true)}>About</li>
                    <a href="#connect">
                        <li>Get in Touch</li>
                    </a>
                </ul>
            </div>
            <Modal closeTimeoutMS={600} appElement={document.getElementById('root')} classname = 'ReactModal__overlay' onRequestClose={() => setmodalIsOpen(false)} style={customStyles} isOpen={modalIsOpen}>
                <img className='modal-img' src='https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt="" />
                <h1>My Name</h1>
                <p>My description</p>
            </Modal>
        </div>
    )
}

