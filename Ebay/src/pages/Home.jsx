import React from "react";
import Slider1 from "../components/home/Slider1";
import Category from "../components/home/Category";
import Slider2 from "../components/home/Slider2";
import Next2Footer from "../components/home/Next2Footer";
import Footer from "../components/home/Footer";
import Navigation from "../components/header/Navigation";
import NavigationAbove from "../components/header/NavigationAbove";
import ProductGrid from "../components/product/ProductGrid";
import NavigationBelow from "../components/header/NavigationBelow";

const Home = () => {
    return(
        <div>
            <NavigationAbove />
            <Navigation />
            <NavigationBelow />
           <Slider1 />
           <ProductGrid />
           <Category />
           <Slider2 />
           <Next2Footer />
           <Footer />
        </div>
    )
}

export default Home;