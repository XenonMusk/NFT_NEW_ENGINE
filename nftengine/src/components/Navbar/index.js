import Logo from '../../assets/logo2.png'
import GradientButton from '../GradientButton/index';
import './Navbar.css'
const Navbar =()=>{
    return <div className='navbar-container'>
        <img className='logo-container' src={Logo}/>
        
        {/* <GradientButton buttonText={'Connect Wallet'}></GradientButton> */}
        
        </div>
        
}

export default Navbar;