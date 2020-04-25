import React, {useState} from "react";
import ReactDOM from "react-dom";
import Slide from "./components/slide";
// import Dot from "./components/dot";
import '../../style.css';

const images = [
    require("../../images/rsz_beautiful-beauty-blue-bright-414612.jpg"),
    require("../../images/rsz_bloom-blooming-blossom-blur-462118.jpg"),
    require("../../images/rsz_landscape-nature-wilderness-view-68147.jpg"),
    require("../../images/rsz_trees-in-park-257360.jpg")
];


const Index = () => {
    const [activeIndex, setActive] = useState(0);
    return (
        <div className="slider-wrapper">
            <div className="slider">
                {images.map((image, i) => (
                    <Slide key={i} index={i} activeIndex={activeIndex} image={image.default} />
                ))}
            </div>
            <div className="slide-pagination">
                {
                    images.map((image, i) => (
                        // <Dot key={i} index={i+1} activeIndex={activeIndex} onClick={() => {console.log("does it work?")}} />
                        <div key={i} className={i ===activeIndex ? 'dot active':'dot'} onClick={() => setActive(i)}></div>
                ))}
            </div>
        </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));