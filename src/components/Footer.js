import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="contact" id="connect">
                <h1>Get in Touch</h1>
                <p>In case you are interested, contact me trough e-mail or social media.</p>
                <div className="iconGroup">
                    <div className="icon"><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src="https://www.flaticon.com/svg/static/icons/svg/49/49354.svg" alt="facebook" /></a></div>
                    <div className="icon"><a href="mail" rel="noreferrer" target="_blank"><img src="https://www.flaticon.com/svg/static/icons/svg/1782/1782765.svg" alt="email" /></a></div>
                    <div className="icon"><a href="https://pixiv.net/" rel="noreferrer" target="_blank"><img src="https://cdn.onlinewebfonts.com/svg/img_227527.png" alt="pixiv"/></a></div>
                </div>
            </div>
            <div className="footer" id="footer">
                <p>2020</p>
                <a href="https://github.com/L-Fortunato" rel="noreferrer" target="_blank">
                    <p>Developed by L-Fortunato</p>
                </a>
            </div>
        </div>
    )
}

export default Footer
