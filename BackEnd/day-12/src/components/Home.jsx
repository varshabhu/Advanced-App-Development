import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import '../assets/Home.css';
import Slideshow from "./Slideshow";
import Footer from "./Footer";

const Card1 = ({ title1, description1, imageUrl1, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{ ...styles.card1, backgroundColor: isActive ? 'lightblue' : 'white' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl1}
        alt={title1}
        style={{ ...styles.image1, ...(isHovered && styles.image1Hover) }}
      />
      <h3>{title1}</h3>
      <p>{description1}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '-10px',
  },
  cardList: {
    display: 'flex',
    marginLeft: '200px',
    justifyContent: 'center',
  },
  card: {
    width: '250px',
    height: '200px',
    marginRight: '10px',
    // border: '1px solid #ccc',
    // borderRadius: '5px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardList1: {
    marginTop: '50px',
    display: 'flex',
    marginLeft: '20px',
    justifyContent: 'center',
  },
  card1: {
    width: '420px',
    height: '250px',
    marginTop:'20px',
    marginLeft: '100px',
  
  },
  title1: {
    fontSize: '24px', 
    fontFamily: 'Arial, sans-serif', 
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  description1: {
    fontSize: '18px', 
    fontFamily: 'Georgia, serif', 
    lineHeight: '1.4',
  },
  image1: {
    marginLeft: '0px',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // image1Hover: {
  //   transform: 'scale(1.1)',
  // },
  cardList2: {
    marginTop: '50px',
    display: 'flex',
    marginLeft: '100px',
    justifyContent: 'center',
  },
  card2: {
    width: '250px',
    height: '200px',
    marginLeft: '80px',
    border: '2px solid white',
    borderRadius: '25px',
  },
  image2: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  },
};

const cards1 = [
  {
    title1: 'Programmes',
    imageUrl1: 'https://res.cloudinary.com/dv3xtovhk/image/upload/v1708597904/close-up-chess-board_v8xtnk.jpg',
    description1: '',
  },
  {
    imageUrl1: 'https://res.cloudinary.com/dv3xtovhk/image/upload/v1708616230/bhifieg_rf9ytz.jpg',
    title1: 'Activities',
    description1: '',
  },
];

const HomePage = () => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Slideshow />
      <div className="nite">
      <h1 className="kite"> Master the Battle of Wits with the Best Chess Academy in India</h1>
      <div style={styles.cardList1}>
        {cards1.map((card1, index) => (
          <Card1
            key={index}
            title1={card1.title1}
            description1={card1.description1}
            imageUrl1={card1.imageUrl1}
          />
        ))}
      </div>
      <div className="poll">
        <h1 style={{color:'red', fontFamily:'fantasy', fontSize:'70px'}}>20+</h1>
        <h5 style={{color:'blue',fontFamily:'fantasy',fontSize:'15px'}}>Number of Countries</h5>
      </div>
      <div className="tall">
        <h1  style={{color:'red', fontFamily:'fantasy', fontSize:'70px'}}>1000+</h1>
        <h5 style={{color:'blue',fontFamily:'fantasy',fontSize:'15px'}}>Champions Created</h5>
      </div>
      <div className="note">
        <h1  style={{color:'red', fontFamily:'fantasy', fontSize:'70px'}}>50+</h1>
        <h5 style={{color:'blue',fontFamily:'fantasy',fontSize:'15px'}}>Qualified Tutors</h5>
      </div>
      <div className="move">
      <h1  style={{color:'red', fontFamily:'fantasy', fontSize:'70px'}}>50+</h1>
      <h5 style={{color:'blue',fontFamily:'fantasy',fontSize:'15px'}}>Events Conducted</h5>
      </div>
      <div className="loop">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708701755/jkgjjg_kfoudv.gif" width="250px"/>
      </div>
      <fieldset className="one">
        <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708707321/Icon-1-removebg-preview_jjwwgo.png" width="70px"/>
        <p>Personalized attention and small batches of 4-6 students</p>
      </fieldset><br></br>
      <fieldset className="two">
        <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708707489/Network-1-removebg-preview_ilyarr.png" width="70px"/>

        <p style={{marginLeft:'200px'}}>Global chess network</p>
      </fieldset><br></br>
      <fieldset className="three">
        <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708707509/15years-removebg-preview_srr6yi.png" width="70px"/>
        <p>Founders with individual experience of 15+ years</p>
      </fieldset>
      <h2 className="asd"> Our Gallery</h2>
      </div>
      <div className="gal5">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708699781/gallery_admn6r.png" width="1300px"/>
     
      </div>
      <Footer/>
       </div>
  );
};

export default HomePage;
