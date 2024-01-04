import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import './foot.css';
const Foota = () => {
    return (
        <div className="footer">
            <div className="footright">
                <div className="footlogo">LOGO</div>
                <p className='foottext'>Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. Etiam eu turpis molestie, dictum <br />
                    est a, mattis tellus. Sed dignissim, metus nec <br />
                    fringillaaccumsan, risus sem sollicitudin lacus,
                </p>
                <div className="footfollow">
                    <h4>FOLLOW US</h4>
                    <div className="footfollowicon">
                        <p className='icon'><InstagramIcon /></p>
                        <p><SmartDisplayIcon /></p>
                        <p><FacebookIcon /></p>

                    </div>
                </div>
            </div>
            <div className="footleft">
                <div className="footleftspecial">
                    <div className="quick">
                        <h2>QUICK LINKS</h2>
                        <p>Home</p>
                        <p>Downloads</p>
                        <p>Programs</p>
                        <p>Event & Gallery</p>
                        <p>Blog</p>
                        <p>Carrers</p>
                    </div>
                    <div className="legal">
                        <h2>LEGAL </h2>
                        <p>Sitemap</p>
                        <p>Privacy Statement</p>
                        <p>Legal Disclaimer</p>
                    </div>
                    <div className="footcontact">
                        <h2>CONTACT US</h2>
                        <p>Unit No 313, 3rd Floor, Gundecha <br />
                            Industrial Complex, Aakurli Road, <br />
                            Kandivali (E), Mumbai 400 101. <br />
                            Maharashtra India.
                        </p>
                        <p><span className='mailicon'>< MailOutlineIcon /></span> info@mondialconsultants.com</p>
                        <p><CallIcon /> +91 22 4025 0500</p>
                    </div>
                </div>
                <div className="footjoin">
                    <h2>JOIN OUR EMAIL LIST</h2>
                    <input type="text" placeholder='Enter your email' />
                    <button>Join</button>
                </div>
            </div>





        </div>
    )
}

export default Foota