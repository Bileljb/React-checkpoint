import  Image  from './imgsrc.jpg'
import './style.css'
function Jsxcheckpoint(){
    return(
<div style={{border:"solid 1px black",maxMidth:"100vw"}}>


    <h1 className="titleRed">Bilel Jabrane</h1>

    <br />

    <img width="320" height="240" src={Image} />

    <br />

    <img width="320" height="240" src={"/imgPublic.jpg"} />


    <video width="320" height="240" controls >

    <source src="myVideo.mp4" type="video/mp4" />

    </video>
</div>   )}
export default Jsxcheckpoint