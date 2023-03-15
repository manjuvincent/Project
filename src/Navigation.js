import { BrowserRouter ,Routes,Route} from "react-router-dom";
import AccurateHome from './pages/AccurateHome.js'
import InnovPage from './pages/InnovPage.js'


export default function Navigation(){
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<AccurateHome/>}></Route>
            <Route path="/InnovPage" element={<InnovPage/>}></Route>
                   </Routes>
        </BrowserRouter>
    );
}