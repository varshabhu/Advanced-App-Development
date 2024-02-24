import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../assets/Course.css';
import { Link } from 'react-router-dom';

const Course = () => {
  const [flipped, setFlipped] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4:false,
    card5:false,
    card6:false
  });

  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  const handleClick = (card) => {
    setFlipped(prevState => ({
      ...prevState,
      [card]: !prevState[card]
    }));
  };

  const handleMouseEnter = (desc) => {
    setDescription(desc);
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div>
      <Topbar />
      <Sidebar />
      <div className="nail">
      
        <h1 className="pot">Courses Offered</h1>
      
      <div className="flp">
        <div className={`card ${flipped.card1 ? 'flipped' : ''}`} onClick={() => handleClick('card1')}>
          <div className="card-inner" onMouseEnter={() => handleMouseEnter('Level 1')} onMouseLeave={handleMouseLeave}>
            <div className="card-front">
              <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708684085/sold_nwzppe.jpg" width ='300px'height="270px"/>
            </div>
            <div className="card-back">
            
                Introduction to chessboard and pieces and their values, object of the game,
                placement of chessboard, and arranging the pieces, movement of each price
                <Link to="/enroll">
                <button type="submit">Enroll</button>
                </Link>

            </div>
          </div>
          {showDescription && flipped.card1 && <div className="tooltip">{description}</div>}
        </div>
        <div className={`card ${flipped.card2 ? 'flipped' : ''}`} onClick={() => handleClick('card2')}>
          <div className="card-inner1" onMouseEnter={() => handleMouseEnter('Level 2')} onMouseLeave={handleMouseLeave}>
            <div className="card-front1">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708684713/horser_xym0tf.jpg" width="300px" height="270px"/>
            </div>
            <div className="card-back1">
           *Elementary checkmates like two rook mate, queen mate, one rook mate and double bishops mate<br></br>
*Problem solving - checkmate in one move (around 20 different positions are covered)<br></br>
             <button type="submit">Enroll</button>
            </div>
          </div>
          {showDescription && flipped.card2 && <div className="tooltip">{description}</div>}
        </div>
        <div className={`card ${flipped.card3 ? 'flipped' : ''}`} onClick={() => handleClick('card3')}>
          <div className="card-inner2" onMouseEnter={() => handleMouseEnter('Level 3')} onMouseLeave={handleMouseLeave}>
            <div className="card-front2">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708709804/oljhg_mmyihk.jpg" width="300px" height="270px"/>
            </div>
            <div className="card-back2">
              Back Side
            <button type="submit">Enroll</button>
            </div>
          </div>
          {showDescription && flipped.card3 && <div className="tooltip">{description}</div>}
        </div>
        </div>
        
        <div className="flp2">
        <div className={`card ${flipped.card4 ? 'flipped' : ''}`} onClick={() => handleClick('card4')}>
          <div className="card-inner" onMouseEnter={() => handleMouseEnter('Level 4')} onMouseLeave={handleMouseLeave}>
            <div className="card-front">
             <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708712566/mvbv_m_pdmgr7.jpg" width="300px" height="270px"/>
            </div>
            <div className="card-back">
              Back Side
              <button type="submit">Enroll</button>
            </div>
          </div>
          {showDescription && flipped.card4 && <div className="tooltip">{description}</div>}
        </div>
        <div className={`card ${flipped.card5 ? 'flipped' : ''}`} onClick={() => handleClick('card5')}>
          <div className="card-inner1" onMouseEnter={() => handleMouseEnter('Level 5')} onMouseLeave={handleMouseLeave}>
            <div className="card-front1">
             <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708714150/kkkk_ccwzxd.jpg" width="300px" height="270px"/>
            </div>
            <div className="card-back1">
              Back Side
              <button type="submit">Enroll</button>
            </div>
          </div>
          {showDescription && flipped.card5 && <div className="tooltip">{description}</div>}
        </div>
        <div className={`card ${flipped.card6 ? 'flipped' : ''}`} onClick={() => handleClick('card6')}>
          <div className="card-inner2" onMouseEnter={() => handleMouseEnter('Level 6')} onMouseLeave={handleMouseLeave}>
            <div className="card-front2">
              <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708712846/bbvnb_ivwo2f.jpg" width="300px" height="270px"/>
            </div>
            <div className="card-back2">
              Back Side
              <button type="submit">Enroll</button>
            </div>
          </div>
          {showDescription && flipped.card6 && <div className="tooltip">{description}</div>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
