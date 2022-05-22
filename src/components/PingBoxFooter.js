import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './PingBoxFooter.css'
library.add(fab, faFacebookF,faInstagram,faTwitter)


const PingBoxFooter = () => {
  return (
    <div>
        <ul>
            <li><FontAwesomeIcon icon="fab fa-facebook-f" className='iconfooter' color="hsl(223, 87%, 63%)" /></li>
            <li><FontAwesomeIcon icon="fab fa-twitter" className='iconfooter' color="hsl(223, 87%, 63%)"/></li>
            <li><FontAwesomeIcon icon="fab fa-instagram" className='iconfooter' color="hsl(223, 87%, 63%)"/></li>
        </ul>
        <p className='contentfooter'>&copy; Copyright Ping. All rights reserved.</p>
    </div>
  )
}

export default PingBoxFooter