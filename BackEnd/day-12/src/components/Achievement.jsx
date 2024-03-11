import '../assets/Achievement.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="cd1">
      <img src={imageUrl} alt="Card" />
      <div className="cc1">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div>
    <Topbar/>
    <Sidebar/>
    <div className="card-container9">
    <div className='cards1'>
      <Card 
        title="won 1st price"
        content="competiton at bangalore"
        imageUrl={"https://res.cloudinary.com/dv3xtovhk/image/upload/v1709980555/kid5_xvz79v.jpg"}
      />
      </div>
      <div className='cards2'>
      <Card 
        title="won 2st price"
        content="competition at delhi"
        imageUrl={"https://res.cloudinary.com/dv3xtovhk/image/upload/v1709980555/kid2_ursv7t.jpg"}
      />
      </div>
      <div className='cards3'>
      <Card 
        title="Won gold medal"
        content="competition at vellore"
        imageUrl={"https://res.cloudinary.com/dv3xtovhk/image/upload/v1709980555/kid6_at8jxx.jpg"}
      />
      </div>
      <div className='card4'>
          <Card 
        title="won silver medal"
        content="Tcompetition at chennai"
        imageUrl={"https://res.cloudinary.com/dv3xtovhk/image/upload/v1709980556/kid1_udlle3.jpg"}
      />
      </div>
    </div>
    </div>
  );
};

export default Achievements;