import Navbar from "./components/navbar/page";
import Gallery from "./components/gallery/page"

import Header from "./components/sub-header/page"

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
           <Gallery />
           </div>
    </main>
  </div>
);

export default Home;