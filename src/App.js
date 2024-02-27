import './App.css'
import Navbar from './Component/Navbar/Navbar';
import TopBar from './Component/TopBar/TopBar';
import AllProducts from './Component/AllProduct/AllProducts';
import Footer from './Component/Footer/Footer';
import RelatedProducts from './Component/RelatedProducts/RelatedProducts.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <TopBar />
      <AllProducts />
      <RelatedProducts />
      <Footer />
    </div>
  );
}

export default App;
