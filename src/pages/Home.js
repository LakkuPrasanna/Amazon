import "./home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
function Home(){
    return(<div>
        <header>
        <div class="primary-navbar">
        <img class="img1" src={img1}></img>
        <div class="">
        <p class="pin">Delivering to Hyderabad 500008</p>
        <div class="d-flex ">
        <img class="img2" src={img2}></img>
        <h6>Update Location</h6>
        </div>
        </div>
        <div class="d-flex bg-white col-5">
        <select class="rounded rounded-end-0 rounded rounded-start-0 w-25">
                <option>All</option>
                <option>All Categories</option>
                <option>Alexa Skills</option>
                <option>Amazon Devices</option>
                <option>Amazon Fashion</option>                
                <option>Amazon Fresh</option>                
                <option>Amazon Fresh Meat</option>                
                <option>Amazon Pharmacy</option>                
                <option>Appliances</option>                
                <option>Apps & Games</option>                
                <option>Audible Audiobooks</option>                
                <option>Baby</option>                
                <option>Beauty</option>                
                <option>Books</option>                
                <option>Car & Motorbike</option>                
                <option>Clothing & Accessories</option>                
                <option>Collectibles</option>                
                <option>Computerrs & Accessories</option>
                <option>Deals</option>                
                <option>Electronics</option>
                <option>Furniture</option>    
                <option>Garden & Outdoors</option>                
                <option>Gift Cards</option>                
                <option>Grocery & Gourmet Foods</option>                
                <option>Health & Personal Care</option>
                <option>Home & Kitchen</option>
                <option>Industrial & Scientific</option>            
                <option>Jewellery</option>                
                <option>Kindle Store</option>                
                <option>Luggage & Bags</option>                
                <option>Luxury Beauty</option>                
                <option>Movies & TV Shows</option>                
                <option>MP3 Music</option>                
                <option>Music</option>                
                <option>Musical Instruments</option>                
                <option>Office Products</option>                
                <option>Pet Supplies</option>                
                <option>Prime Video</option>                
                <option>Shoes & Handbags</option>                
                <option>Software</option>                
                <option>Sports, Fitness & Outdoors</option>                
                <option>Subscribe & Save</option>                
                <option>Tools & Home Improvement</option>                
                <option>Toys & Games</option>                
                <option>Under ₹500</option>                
                <option>Video Games</option>                
                <option>Watches</option>                
                </select>
                <input placeholder="Select Amazon.in" class="form-control border border"></input>
                <button class="btn rounded rounded-end-0 rounded-start-0 btn-warning">
            <img class="img3" src={img3}></img>
            </button>
        </div>
        <div class="d-flex">
            <img class="img4" src={img4}></img>
            <h6>EN</h6>
        </div>
          
        <div class="text-white">
            <p class="signin">Hello,sign in</p>  
            <h6>Account & Lists</h6>
        </div>
        <div class="text-white">
            <p class="return">Returns</p>
            <h6>&Orders</h6>
        </div>
        <div class="text-white">
            <div class="d-flex">
                <img class="img5" src={img5}></img>
                <p>Cart</p>
            </div>
        </div>
        </div>




        <div class="secondary-navbar">
            <div class="d-flex text-white">
              <img class="img6" src={img6}></img>
              <h6>All</h6>
            </div>
                <a href="" class="nav-link text-white">Fresh</a>
                <a href="" class="nav-link text-white">Amazon miniTV</a>
                <a href="" class="nav-link text-white">Sellers</a>
                <a href="" class="nav-link text-white">Best-Sellers</a>
                <a href="" class="nav-link text-white">Today's Deals</a>
                <a href="" class="nav-link text-white">Mobiles</a>
                <a href="" class="nav-link text-white">Electronics</a>
                <a href="" class="nav-link text-white">Prime</a>
                <a href="" class="nav-link text-white">Fashion</a>
                <a href="" class="nav-link text-white">New Releases</a>
                <a href="" class="nav-link text-white">Home & Kitchen</a>
                <a href="" class="nav-link text-white">AmazonPay</a>
                <a href="" class="nav-link text-white">Customer Service</a>
                </div>
            </header>
            <div class="main-content">
<Carousel>
         <Carousel.Item>
            <img class="img7 w-100" src={img7}></img>
         </Carousel.Item>
         <Carousel.Item>
            <img class="img8 w-100" src={img8}></img>
         </Carousel.Item>
         <Carousel.Item>
            <img class="img9 w-100" src={img9}></img>
         </Carousel.Item>
         <Carousel.Item>
            <img class="img10 w-100" src={img10}></img>
         </Carousel.Item>
         <Carousel.Item>
            <img class="img11 w-100" src={img11}></img>
         </Carousel.Item>
         <Carousel.Item>
            <img class="img12 w-100" src={img12}></img>
         </Carousel.Item>
</Carousel>

        <div class="category">
        <div class="box">
            <h5>Appliances for your home | Up to 55% off</h5>
            <div class="red-box">
                <div class="blue-box">
                <img class="img13" src={img13}></img>
                    <p>Air Conditioners</p>
                </div>
                <div class="blue-box">
                <img class="img14" src={img14}></img>
                    <p>Refregirators</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img15" src={img15}></img>
                        <p>Microwaves</p>
                </div>
                <div class="blue-box">
                <img class="img16" src={img16}></img>
                        <p>Washing Machines</p>
                </div>
            </div>
        </div>
        <div class="box">
        <h5>One stop shop for all your wedding shopping</h5>
            <div class="red-box">
                <div class="blue-box">
                <img class="img17" src={img17}></img>
                        <p>Shop for her</p>                    
                </div>
                <div class="blue-box">
                <img class="img18" src={img18}></img>
                        <p>Shop for him</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img19" src={img19}></img>
                        <p>Pooja essentials</p>
                </div>
                <div class="blue-box">
                <img class="img20" src={img20}></img>
                        <p>Explore the Store</p>
                </div>
            </div>
        </div>
        <div class="box">
            <h5>Revamp your home in style</h5>
            <div class="red-box">
                <div class="blue-box">
                <img class="img21" src={img21}></img>
                    <p>Cushions covers&more</p>
                </div>
                <div class="blue-box">
                <img class="img22" src={img22}></img>
                    <p>Figurines,Vases &more</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img23" src={img23}></img>
                        <p>Home Storage</p>
                </div>
                <div class="blue-box">
                <img class="img24" src={img24}></img>
                        <p>Lighting Solutions</p>
                </div>
            </div>
        </div>
        <div class="box">
            <h5>Automotive essentials | Up to 60% off</h5>
            <div class="red-box">
                <div class="blue-box">
                  <img class="img25" src={img25}></img>
                        <p>Cleaning Accessories</p>
                </div>
                <div class="blue-box">
                <img class="img26" src={img26}></img>
                        <p>Tyre & rim care</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img27" src={img27}></img>
                        <p>Helmets</p>
                </div>
                <div class="blue-box">
                <img class="img28" src={img28}></img>
                        <p>Vaccum Cleaner</p>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="category category2">
        <div class="box">
            <h5>Appliances for your home | Up to 55% off</h5>
            <div class="red-box">
                <div class="blue-box">
                <img class="img13" src={img13}></img>
                    <p>Air Conditioners</p>
                </div>
                <div class="blue-box">
                <img class="img14" src={img14}></img>
                    <p>Refregirators</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img15" src={img15}></img>
                        <p>Microwaves</p>
                </div>
                <div class="blue-box">
                <img class="img16" src={img16}></img>
                        <p>Washing Machines</p>
                </div>
            </div>
        </div>
        <div class="box">
        <h5>One stop shop for all your wedding shopping</h5>
            <div class="red-box">
                <div class="blue-box">
                <img class="img17" src={img17}></img>
                        <p>Shop for her</p>                    
                </div>
                <div class="blue-box">
                <img class="img18" src={img18}></img>
                        <p>Shop for him</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img19" src={img19}></img>
                        <p>Pooja essentials</p>
                </div>
                <div class="blue-box">
                <img class="img20" src={img20}></img>
                        <p>Explore the Store</p>
                </div>
            </div>
        </div>
        <div class="box">
            <h5>Revamp your home in style</h5>
            <div class="red-box">
                <div class="blue-box">
                <img class="img21" src={img21}></img>
                    <p>Cushions covers&more</p>
                </div>
                <div class="blue-box">
                <img class="img22" src={img22}></img>
                    <p>Figurines,Vases &more</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img23" src={img23}></img>
                        <p>Home Storage</p>
                </div>
                <div class="blue-box">
                <img class="img24" src={img24}></img>
                        <p>Lighting Solutions</p>
                </div>
            </div>
        </div>
        <div class="box">
            <h5>Automotive essentials | Up to 60% off</h5>
            <div class="red-box">
                <div class="blue-box">
                  <img class="img25" src={img25}></img>
                        <p>Cleaning Accessories</p>
                </div>
                <div class="blue-box">
                <img class="img26" src={img26}></img>
                        <p>Tyre & rim care</p>
                </div>
            </div>
            <div class="red-box">
                <div class="blue-box">
                <img class="img27" src={img27}></img>
                        <p>Helmets</p>
                </div>
                <div class="blue-box">
                <img class="img28" src={img28}></img>
                        <p>Vaccum Cleaner</p>
                </div>
            </div>
        </div>
        </div>
        <div class="second-section">
            <div class="d-flex">
                <h2>Up to 75% off | Unique products from new businesses</h2>
                <a href="">See More</a>
            </div>
                <div class="scrolling-section">
                    <img class="img29" src={img29}></img>
                    <img class="img30" src={img30}></img>
                    <img class="img31" src={img31}></img>
                    <img class="img32" src={img32}></img>
                    <img class="img33" src={img33}></img>
                    <img class="img34" src={img34}></img>
                    <img class="img35" src={img35}></img>
                    <img class="img36" src={img36}></img>
                    <img class="img37" src={img37}></img>
                    <img class="img38" src={img38}></img>
                    <img class="img39" src={img39}></img> 
                    <img class="img40" src={img40}></img>
                </div>
                <div class="scrolling-section">
                    <img class="img29" src={img29}></img>
                    <img class="img30" src={img30}></img>
                    <img class="img31" src={img31}></img>
                    <img class="img32" src={img32}></img>
                    <img class="img33" src={img33}></img>
                    <img class="img34" src={img34}></img>
                    <img class="img35" src={img35}></img>
                    <img class="img36" src={img36}></img>
                    <img class="img37" src={img37}></img>
                    <img class="img38" src={img38}></img>
                    <img class="img39" src={img39}></img> 
                    <img class="img40" src={img40}></img>
                </div>
                <div class="scrolling-section">
                    <img class="img29" src={img29}></img>
                    <img class="img30" src={img30}></img>
                    <img class="img31" src={img31}></img>
                    <img class="img32" src={img32}></img>
                    <img class="img33" src={img33}></img>
                    <img class="img34" src={img34}></img>
                    <img class="img35" src={img35}></img>
                    <img class="img36" src={img36}></img>
                    <img class="img37" src={img37}></img>
                    <img class="img38" src={img38}></img>
                    <img class="img39" src={img39}></img> 
                    <img class="img40" src={img40}></img>
                </div>
        </div>
        <footer>
            <div class="back-to-top">
                <p>Back to Top</p>
            </div>
            <div class="footer-bottom">
                <div class="fbox">
                    <h6>Get to Know Us</h6>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div class="fbox">
                    <h6>Connect with Us</h6>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>                    
                </div>
                <div class="fbox">
                    <h6>Make Money with Us</h6>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>
                <div class="fbox">
                <h6>Let Us Help You</h6>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Help</p>
                </div>
            </div>
            <hr></hr>
            <div class="logo1">
                <img class="img41" src={img41}></img>
                    <p>English</p>
                    <p>India</p>
            </div>
        </footer>
    </div>
  
    </div>)
}
export default Home;
