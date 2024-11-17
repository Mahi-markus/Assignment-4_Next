import Navbar from "./components/navbar/page";
import Gallery from "./components/gallery/page"

import Header from "./components/sub-header/page"

const Home = () => (
  <div>
    <div>
    <Navbar />
    <Header />
    </div>
   
    <main>
      {/* Page content */}
      <Gallery />
    </main>
  </div>
);

export default Home;