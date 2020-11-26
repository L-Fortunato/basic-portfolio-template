import React from 'react'

function Footer() {
    return (
        <div>
            <div class="contact" id="connect">
                <h1>Get in Touch</h1>
                <p>In case you are interested, follow or contact me on the following social media</p>
                <div class="iconGroup">
                    <div class="icon"><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src="https://www.flaticon.com/premium-icon/icons/svg/3128/3128208.svg" alt="facebook" /></a></div>
                    <div class="icon"><a href="mail" rel="noreferrer" target="_blank"><img src="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg" alt="email" /></a></div>
                    <div class="icon"><a href="https://github.com/" rel="noreferrer" target="_blank"><img src="https://www.flaticon.com/svg/static/icons/svg/1051/1051377.svg" alt="github"/></a></div>
                </div>
            </div>
            <div class="footer" id="footer">
                <p>2020</p>
                <a href="https://github.com/L-Fortunato" rel="noreferrer" target="_blank">
                    <p>Developed by L-Fortunato</p>
                </a>
            </div>
        </div>
    )
}

export default Footer
