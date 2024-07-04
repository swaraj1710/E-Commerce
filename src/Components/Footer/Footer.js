import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.scss'
function Footer(){
    return(
        <>
          <div className="Foot">
            <div className='left'>
                Footer
            </div>
            <div className='right'>
                <div className='icons'>
                  <FacebookIcon/>
                  <InstagramIcon/>
                  <LinkedInIcon/>
                  <TwitterIcon/>
                </div>
            </div>
          </div>
        </>
    )
}
export default Footer;