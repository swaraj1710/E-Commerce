import WcIcon from '@mui/icons-material/Wc';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='navbar1'>
                <div className='navItems'>
                    <div className="left">
                        <span><WcIcon /></span>
                        <span className='iconText'>ale Fashion</span>
                    </div>
                    <div className='middle'>
                        <div><Link className='lnk' to='/'>Home</Link></div>
                        <div><Link className='lnk' to='/items/men'>Male</Link></div>
                        <div><Link className='lnk' to='/items/women'>Female</Link></div>

                        <div><Link className='lnk' to='/items/others'>Other Items</Link></div>
                    </div>
                    <div className="right">
                        <FavoriteBorderIcon />
                        <SearchIcon />
                        <Link className='lnk' to='/items/cart'> <ShoppingCartIcon /></Link>

                    </div>

                </div>


            </div>

        </>
    )
}
export default Navbar;