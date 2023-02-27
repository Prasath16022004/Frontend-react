
import { Link } from "react-router-dom"
import Customimg from "./Customimg"
export default function HeroSection() {
    const images=[
        "/img/images food/image/img 1.jpg",
        "/img/images food/image/img 2.jpg",
        "/img/images food/image/img 3.jpg",
        "/img/images food/image/img 4.jpg",
        "/img/images food/image/img 5.jpg",
        "/img/images food/image/img 6.jpg",
        "/img/images food/image/img 7.jpg",
        "/img/images food/image/img 8.jpg",
        "/img/images food/image/img 9.jpg"
    ]
  return (
    <div className="section hero">
    <div className="col typography">
    <h1 className="title">What Are We About</h1>
    <p className="info">RecipeRealm is a place where you can 
    please your soul and yummy with 
    delicious food recepies of all dishes.And our service is 
    absoultely free. So start experencing 
    now</p>
    <Link to="/recipes"><button className="btn">Explore Now</button></Link> 
    </div>
    <div className="col gallery">
   { images.map((src, index) => (
    <Customimg key={index} imgSrc={src} pt={"90%"} />

  ))}
    
   
   
    </div>

    </div>
  )
}
