// import Header from "./Header";
// import Content from "./Content";
// import Footer from "./Footer";
import MyProducts from "./MyProducts";
import './index.css';
function App(){
  
  return (
  <div className="App">
     <MyProducts
        name="Temitope"
        description="The product has fantastic features"
        price={1000}
      />
    {/* <Header />
    <Content />
    <Footer /> */}

  </div>
  
  );
    
  }

export default App;
