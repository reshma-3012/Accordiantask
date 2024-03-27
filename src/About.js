import Footer from "./Footer";
import Header from "./Header";

export default function About() {
  return (
    <div >
      <Header/>
      <div className="content">
        <div className="left-content"> 
         <h1>This is  left About</h1>
     
        </div>
        <div>
          <h1>This is About</h1>
     
        </div>
        <div className="right-content">
           <h1>This is  right About</h1>
     
        </div>

      </div>
      
      <Footer/>
      
      
    </div>
    
  );
}

 