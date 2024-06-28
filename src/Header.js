
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseIcon from '@mui/icons-material/Close';
import { DropdownMenu,DropdownItem,DropdownToggle} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import style from './css/style.css'
import {Link} from "react-router-dom";
import SignUp from './pages/SignUp';

function Header(){
    const [display,ChangeDisplay] =useState(false)
  const [modalshow,modal] =useState(false)
    return(
        <div>
        <div className="s1 navbar header">
       
       <img className="pic" src={"https://i.pinimg.com/474x/8f/69/43/8f694315df2fb8b781b475292b46c461.jpg"}></img>
      
       <div className="delivering"><p>Delivering to Nellore 524004</p>
       <div className="d-flex">
       <img  className ="loc"src={"https://cdn-icons-png.flaticon.com/128/149/149060.png"}></img>
       <h6>Update location</h6></div></div>
 
       <div className="search rounded rounded-0">
        <select className='selectc'>
            <option>
                All
            </option>
        </select>
        
        <input className="searchb form-control rounded rounded-0" placeholder="search in amazon.in" style={{ width: "400px" }}></input>

    <img className="searcha rounded rounded-0" ></img>
    <img className="searcha rounded rounded-0" src={"https://cdn-icons-png.flaticon.com/128/4347/4347487.png"}></img>
        
        </div>
       <div className="d-flex"><img className="flag"  src={"https://cdn-icons-png.flaticon.com/128/206/206606.png"}></img>
        <select className="language">
        <option>EN</option>
        <option>Hi</option>
        <option>ka</option>
        </select></div>
        
        <Dropdown className="signin color-light rounded rounded-0">
            <DropdownToggle variant="black">
            <p className="signin">Hello,signin</p>
                <h6 className="signin">Accounts & lists</h6>
                <DropdownMenu >
                    <DropdownItem>
                    <button className="pp btn btn-warning mt-3 w-50" onClick={() => window.location.href="/sign"}>signin</button>
                    <p className="ps">New Customer?start here</p>
                    <hr></hr>
                    <div className="d-flex">
                    <div className="pa pe-4">
                    <h5>your lists</h5>
                   <p>create a wish list</p>
                   <p>wish from any website</p>
                   <p>baby wishlist</p>
                   <p>Discover Your Style</p>
                   <p>Explore Showroom</p></div>
                   <div class="vl"></div>
                   <div className="pe-3 ps-3"></div>
                   <div className="pa pe-4"><h4>your account</h4>
                   <p>your account</p>
                   <p>your Orders</p>
                   <p>your wishlist</p>
                   <p>your recomendations</p>
                   <p>your prime membership</p>
                   <p>your subscribe and save items</p>
                   <p>Memberships & subscriptions</p>
                   <p>Your seller Account</p>
                   <p>Manage your content devices</p>
                   <p>your free amazon business account</p></div></div>
                    </DropdownItem>
                </DropdownMenu>
            </DropdownToggle>
        </Dropdown>
       
        
       <div className="s4">
        <p>returns</p>
        <h6>&orders</h6>
       </div>
       <div className="d-flex">
       <img src={"https://cdn-icons-png.flaticon.com/128/8448/8448227.png"} height="50px" width="50px"></img>
       <p className="cart">cart</p></div>
       
       </div>
      
       <div className="s3">
       <div className="navbar">
       <button onClick={()=>{ChangeDisplay(!display)}}>all</button>
    <Offcanvas show={display} onHide={()=>{ChangeDisplay(false)}}>
        <Offcanvas.Body>
            <CloseIcon onClick={()=>{ChangeDisplay(!display)}}></CloseIcon><h2>Hello,sign in</h2>
            <h2>Trending</h2>
            <p>Best Sellers</p>
            <p>New Releases</p>
            <p>Movers and Shakers</p>
            <hr></hr>
            <h3>Digital Content and Devices</h3>
            <p>Amazon miniTV-FREE entertainment</p>
            <p>Echo & Alexa</p>
            <p>Fire TV</p>
            <p>Kindle E-leaders & eBooks</p>
            <p>Audible AudioBooks</p>
            <p>Amazon Prime video</p>
            <p>Amazon Prime Music</p>
            <hr></hr>
            <h3>Shop by Category</h3>
            <p>Mobiles,Computers</p>
            <p>TV,Applicances,Electronics</p>
            <p>Men's Fashion</p>
            <p>Women's Fashion</p>
            <p>see all</p>
            <hr></hr>
            <h2>Programs & Features</h2>
            <p>Amazon Pay</p>
            <p>Gift Cards & Mobile Recharges</p>
            <p>Amazon Launchpad</p>
            <p>Amazon Business</p>
            <p>see all</p>
            <hr></hr>
            <h2>Help & Settings</h2>
            <p>Your Account</p>
            <p>Customer Service</p>
            <p>sign in</p>
        </Offcanvas.Body>
    </Offcanvas>
    
        <a>Fresh</a>
        <a>Amazon minitv</a>
        <a>sell</a>
        <a>best sellers</a>
        <a>Today's deals</a>
        <a>mobiles</a>
        <a>Fashion</a>
        <a>Electronics</a>
        <Link to="/login">login</Link>
        <div class="language">
        
        <Dropdown className="rounded rounded-0">
            <DropdownToggle variant="secondary">prime
                <DropdownMenu>
                    <DropdownItem>
                        <p>clothing</p>
                        <p>electronics</p>
                    </DropdownItem>
                </DropdownMenu>
            </DropdownToggle>
        </Dropdown>
       </div>
        <a>Home&kitchen</a>
        <a>New Releases</a>
        <a>customer services</a>
        <a>Amazon pay</a>
        <a>Computers</a>
       </div>
       </div>
       </div>
    )
}
export default Header;
