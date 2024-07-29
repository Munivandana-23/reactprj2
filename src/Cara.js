import React from 'react'
import pic from './images/clt3.png'
import pic1 from './images/cloud7.png'
import pic2 from './images/food3.png'
import pic3 from './images/emojie2.jpg'
import pic4 from './images/men.jpg'
import pic5 from './images/food2.jpeg'
import pic6 from './images/cloth1.jpg'
import pic7 from './images/cloud3.jpeg'
import './cara.css'
export default function cara() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic} className="d-block w-100" alt="..." style={{width:'100%',height:'400px'}}/>
    </div>
    <div className="carousel-item">
      <img src={pic1} className="d-block w-100" alt="..." style={{width:'100%',height:'400px'}}/>
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block w-100" alt="..." style={{width:'100%',height:'400px'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
<div className='cara'>
<div className='cara-fluid'>
  <div className='row' style={{marginTop:'10px',margin:'auto',paddingTop:'20px',paddingBottom:'20px'}}>
    <div className='col-md-5'style={{margin:'auto',textAlign:'center'}}>
      <h1>Hii <img src={pic3}  style={{borderRadius:'20% 10%'}}/></h1>
      <h2>I'm <span style={{color:'darkblue'}}><i>Malvan danthi</i></span> <br/>Front-End & Back-End Developer</h2>
      <p>i design and develop experiences that make people's eyes<br/> simpler through web and mobiles appas. i work with figma,<br/>html5,css3,javascript react,reactnative and fluter</p>
    </div>
    <div className='col-md-7'style={{textAlign:"center"}}>
      <img src={pic4} alt='' style={{width:'300px',height:'auto',borderRadius:'0px 60px'}} />
    </div>
  </div>
</div>
</div>
<div className='container-fluid' style={{marginTop:'10px'}}>
  <div className='row'>
    <div className='col-md-4'>
     <div className='j-card'><img src={pic5} style={{height:'250px'}}/>
     <p className='j-body'> Food varies widely across cultures, offering a rich tapestry of flavors, ingredients, and cooking techniques. From spicy curries in India to delicate sushi in Japan, each cuisine tells a story of its people and history.</p>
     </div>
    </div>
    <div className='col-md-4'>
     <div className='j-card'><img src={pic6} style={{height:'250px'}}/>
     <p className='j-body'> Fashion is a dynamic industry that constantly evolves. Trends emerge from runways, street style, and cultural influences, shaping what people wear and how they express themselves.</p>
     </div>
    </div>
    <div className='col-md-4'>
     <div className='j-card'><img src={pic7} style={{height:'250px'}}/>

     <p className='j-body'>While weather refers to short-term atmospheric conditions like temperature, humidity, and precipitation, climate refers to long-term patterns and trends in these conditions over years and decades.</p>
     </div>
    </div>
  </div>
  <div className='row'>
    <div className='col-md-12'>
      <h3 style={{color:'white', textAlign:'center',backgroundColor:'black'}}><b>CopyRight @2024</b></h3>
    </div>
  </div>
</div>
</div>
  )
}
