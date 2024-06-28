import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const homepage = () => {
  
  return (
    <div>
    <Carousel style={{ zIndex: 0 }}>
        <Carousel.Item>
            <img className="dp" src={"https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sports/June/IYD/GW/Hero/Unrec/yoga_unrec_3000x1200._CB553809853_.png"}></img>
        </Carousel.Item>
        <Carousel.Item>
            <img className="dp" src={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/June/Fathers_Day/D139279928_IN_WLA_BAU_FathersDay_Hero_PC_Hero_3000x1200._CB555670465_.jpg"} ></img>
        </Carousel.Item>
        <Carousel.Item>
            <img className="dp" src={"https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Apr/Shoes/Unrec/No_bank/Cat3/299_PC_3000._CB560430359_.jpg"} ></img>
        </Carousel.Item>
    </Carousel>
    <div className='back'>
    <Container className='con p-0' fluid>
      <Row>
      <Col className='cont bg-light' style={{color:"white"}}><b>Appliances for your home|Up to 55% off</b>
        <div className='c d-flex p-0'>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"}/><p className='down'>Starting ₹249| boAt</p></Col>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"}/><p className='down'>Starting ₹349| boult</p></Col>
         </div>
         <div className='c d-flex p-0 mb-3'>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg"}/><p className='down'>Starting ₹649| Noise</p></Col>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg"}/><p className='down'>Starting ₹149| Zebronics</p></Col>
         </div>
         <Link to='/ProductList' className='shop m-0'>Shop now</Link>
        </Col>
        <Col className='cont bg-light'><b>Revamp your home in style</b>
        <div className='c d-flex p-0'>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg"}/><p className='down'>Air Conditioners</p></Col>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg"}/><p className='down'>Refrigerators</p></Col>
         </div>
         <div className='c d-flex p-0 mb-3'>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg"}/><p className='down'>Microwaves</p></Col>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg"}/><p className='down'>Washning machines</p></Col>
         </div>
         <Link to='/ProductList' className='shop m-0'>Shop now</Link>
        </Col>
        <Col className='cont bg-light'><b>Starting ₹149 | Bestseling earbuds, headphones & more</b>
        <div className='c d-flex p-0'>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt._SY232_CB553870684_.jpg"}/><p className='down'>Lighting solutions</p></Col>
         <Col className='co m-3 p-0'><img  className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult._SY232_CB553870684_.jpg"}/><p className='down'>Home Storage</p></Col>
         </div>
         <div className='c d-flex p-0 mb-3'>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise._SY232_CB553870684_.jpg"}/><p className='down'>Cushions, Covers, bedsheets & more</p></Col>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Zeb._SY232_CB553870684_.jpg"}/><p className='down'>Figurines, vases & more</p></Col>
         </div>
         <Link to='/ProductList' className='shop m-0'>Shop now</Link>
        </Col>
        <Col className='cont bg-light'><b>Automotive essentials | Up to 60% off</b>
        <div className='c d-flex p-0'>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg"}/><p className='down'>Bedsheets</p></Col>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg"}/><p className='down'>Curtains</p></Col>
         </div>
         <div className='c d-flex p-0 mb-3'>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg"}/><p className='down'>Ironing boards & more</p></Col>
         <Col className='co m-3 p-0'><img className='i' src={"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg"}/><p className='down'>Home decors</p></Col>
         </div>
         <Link to='/ProductList' className='shop m-0'>Shop now</Link>
        </Col>
      </Row>
    </Container>
    
    <Container className='w-100 p-0' fluid>
    <Container fluid className='m-0'>
        <Row>
          <Col className='const bg-light w-auto m-0 p-0'>
          <div className='utensil'>
          <div className='uten'>
          <b className='box p-0'>Up to 60% off | Gift hampers from women-owned brands</b>
          <div className='item'>
            
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/61T-4HIeLbL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/61T-4HIeLbL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71K8LzAQ16L._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/81pl4+U61DL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71dpwPU2MBL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/81svU0OeT3L._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/61h+Z1VDwvL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/61h+Z1VDwvL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/81Mv3iqoccL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/81wArOAROSL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/91iaj62GAKL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71z8leI29OL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/81oPQyE0OQL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71aqFYHa7SL._AC_SY400_.jpg'/>
          </div>
          </div>
          </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='m-0'>
        <Row>
          <Col className='const bg-light w-auto m-0 p-0'>
          <div className='utensil'>
          <div className='uten'>
          <b className='box p-0'>Trendy home decor</b>
          <div className='item'>
            
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71uB4BEEx-L._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/81wN5ep5CAL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/91XpoxeQqfL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71cMb62tKHL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71Ye4QY493L._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/81AxHBIHbqL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71mPXWxxX0L._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71espCyoRcL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/A1BgL2zPozL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71TGj3HXLrL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/61URAf5OROL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/71TGj3HXLrL._AC_SY400_.jpg'/>

            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/91WMMK2loaL._AC_SY400_.jpg'/>
            <img className='u m-1' alt='images' src='https://m.media-amazon.com/images/I/715DZ7HEEgL._AC_SY400_.jpg'/>
          </div>
          </div>
          </div>
          </Col>
        </Row>
      </Container>
      <footer>
            <div className="footer23">
            <div className="back-to-top">
                <p style={{color:"white"}}>Back to top</p>
            </div>
            <div className="footer-top">
                <div className="box1">
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div className="box1">
                    <h3>Connect with Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    
                </div>
                <div className="box1">
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                    
                    
                </div>
                <div className="box1">
                    <h3>Let Us Help You</h3>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Help</p>
                    
                </div>
            </div>
            <hr></hr>
            <div class="footer-bottom">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"></img>
                <button style={{backgroundColor: "transparent", color: "white", border: "1px solid white"}}>English</button>
<button style={{backgroundColor: "transparent", color: "white", border: "1px solid white"}}>India</button>

        </div>
        </div>
        </footer>
    </Container>
    

        </div>
    </div>
  )
}

export default homepage