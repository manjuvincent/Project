
import './AccurateHome.css';
import Header from "../components/Header";
import Innovation from '../components/Innovation';



export default function Homepage() {
    return (
        <div className="Homepage">
            <div className="Homepage_header">
                <Header></Header>
            </div >
            <div className="Homepage_Innov">
                <Innovation></Innovation>
                
            </div>
           
        </div>
    )
}