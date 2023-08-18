import { useContext } from "react";
import About from "./coponents/about/About";
import Contact from "./coponents/contact/Contact";
import Intro from "./coponents/intro/intro";
import ProductList from "./coponents/Productlist/ProductList";
import Toggle from "./coponents/toogle/Toggle";
import { ThemeContext } from "./context";

const App = ()=>{

const theme = useContext(ThemeContext)

const darkMode = theme.state.darkMode;

    return <div style = {{backgroundColor:darkMode ? "#222": "white", color:darkMode && "white"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
        
        </div>;
};

export default App;