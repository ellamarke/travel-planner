import './css/App.css'
import HomeSearch from './HomeSearch';
import Hero from './Hero';


function Container() {
    return(
        <div className="container">
           <Hero /> 
           <HomeSearch />  
        </div>
    )
};

export default Container; 