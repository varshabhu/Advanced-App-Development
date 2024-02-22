import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import '../assets/Home.css'
import Slideshow from "./Slideshow";

const HomePage = () => {
  return (
    <div>
    <Topbar/>
    <Sidebar/>
    <Slideshow/>
    <div >
    <h4 className="an" >We've taught more than 100,000 kids chess</h4>
    <p className="abcd">
      BOOKIE  Academy  as  Silver  Knights  when  a  pair  of  brothers  who  grew  up loving  chess  wanted  to  share  their  enthusiasm  with  kids.<br/>
      After  ten  years  teaching  chess  at  hundreds  of  schools,  we  partnered  with  Magnus  Carlsen,  the  world  chess  champion,  to  grow  the<br/>
      game! We'd  be  excited  to  have  your  child  join  our  online  academy,  where  kids  ages  5-14  from  48  states  and  20+  countries  come  to <br/>
       learn,  have  FUN,  and  play  chess!</p>
    </div>
    <div className="jip">
    <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708597904/close-up-chess-board_v8xtnk.jpg" width="500px"/>
    </div>
    <div className="tee">
      <img src=""/>
    </div>
    {/* <div className="dot">
      <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1708592560/curve-vector-1.png_pz0jxz.png" width="1300px"/>
    </div> */}
    </div>
  );
}

export default HomePage;
