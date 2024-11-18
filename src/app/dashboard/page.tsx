"use client"

import Navbar from "../components/navbar/page";
import Gallery from "../hotel/gallery/page"

import Header from "../components/sub-header/page"
import Tabs from "../components/tabs/page";
import PropertyDetails from "../components/propertyDetails/page"
import ExploreArea from "../components/explore_area/page";
import RoomsSection from "../components/room_section/page"
import Gallery from '../hotel/gallery/page';

const Home = () => (



  
  <div>
    <div  >
    <Navbar />
    <div   className=" px-20">
    <Header />
    </div>
    
    </div>
   
    <main>
      {/* Page content */}
      <div className=" px-20">
      
          
           <Tabs />
           <PropertyDetails />
           <ExploreArea />
           <RoomsSection />

           </div>
          
           
    </main>

    
    
    
  </div>
);

export default Home;