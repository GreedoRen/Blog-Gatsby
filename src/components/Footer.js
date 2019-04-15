import React from 'react'


const Footer = () => (
    <div className="site-footer"> 
        <h4 className="text-center">
            CodeBlog
        </h4>
        <p className="text-center">
            Follow us on social media
        </p>
        <div >
            <ul style={{ textAlign: "center", marginRight: "25px",
                        display: "inline-flex"}} className="">
                <li className><a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="facebook">
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </a>
                </li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                    <i className="fab fa-twitter fa-2x"></i>
                </a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                    <i className="fab fa-instagram fa-2x"></i>
                </a></li>
                <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="google">
                    <i className="fab fa-google fa-2x"></i>
                </a></li>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a></li>
            </ul>
        </div>
    </div>    
)

export default Footer;