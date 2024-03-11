import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../assets/Class.css';

import 'react-slideshow-image/dist/styles.css';
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Class = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
    <Topbar/>
    <Sidebar/>
    <div className="dot1">
    <h1 style={{fontFamily:'fantasy',fontSize:'40px'}}>Basic Level</h1>
      <Carousel responsive={responsive}>
        <iframe width="460" height="315" src="https://youtu.be/6IegDENuxU4?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/OCSbzArwB10?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/lfTVvUZO4GM?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/GQvR_fLkNKo?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/GQvR_fLkNKo?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/GQvR_fLkNKo?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Carousel>
    </div>
    <div className="dot2">
    <h1 style={{fontFamily:'fantasy',fontSize:'40px'}}>Intermediate Level</h1>
      <Carousel responsive={responsive}>
        <iframe width="460" height="315" src="https://youtu.be/CSA9se6t82I?feature=sharedE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/M5qtjq1NsH4?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/nXyJdetptXg?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/lfTVvUZO4GM?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/GQvR_fLkNKo?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/GQvR_fLkNKo?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Carousel>
    </div>
    <div className="dot3">
    <h1 style={{fontFamily:'fantasy',fontSize:'40px'}}>High Level</h1>
      <Carousel responsive={responsive}>
        <iframe width="460" height="315" src="https://youtu.be/txH-EdnYCAw?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/_iauzH55PSA?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://youtu.be/lkmQesHE_Wg?feature=shared" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/QXeEoD0pB3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/QXeEoD0pB3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/QXeEoD0pB3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Carousel>
    </div>
    </div>
  );
};

export default Class;
