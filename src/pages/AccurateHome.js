
import './AccurateHome.css';
import Header from "../components/Header";
import InnovationShort from '../components/InnovationShort';
import Imgdesc from '../components/Imgdesc';


export default function Homepage() {
    return (
        <div className="Homepage">
            <div className="Homepage_header">
                <Header></Header>
            </div >
            <div className="Homepage_Innov">
                <InnovationShort></InnovationShort>
            </div>
            <div className="Homepage_Imgdesc">
                <Imgdesc></Imgdesc>
            </div>
        </div>
    )
}