import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slideImages = [
  {
    url: "https://res.cloudinary.com/dv3xtovhk/image/upload/v1708582049/cherio_hit7bi.jpg",
    caption: '1'
  },
  {
    url: "https://res.cloudinary.com/dv3xtovhk/image/upload/v1708582378/rtoie_zuseol.jpg",
    caption: '2'
  },
  {
    url: "https://res.cloudinary.com/dv3xtovhk/image/upload/v1708582982/Viswanathan-Anand-Tata-Chess1-696x348_isrdn5.webp",
    caption: '1'
  }

];
const divStyle = {
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
 marginTop:"-10px",
  marginLeft:"200px",
  width:'1300px',
  backgroundRepeat: "no-repeat", // Prevent background repeat
  backgroundSize: "cover" // Ensure background covers the entire div
};
// const spanStyle = {
//   fontSize: "20px",
//   background: "#efefef",
//   color: "#000000"
// };
const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Fade autoplay={true} duration={600} arrow={false}>
        {slideImages.map((image, index) => (
          <div key={index} style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
            {/* <span style={spanStyle}>{image.caption}</span> */}
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;






