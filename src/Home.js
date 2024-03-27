import Footer from "./Footer"
import Header from "./Header"
import './Common.css';
export default function Home(){
  let firstName='this is react app';
  let mobileNo='12345';
  let nameList=['abc','efg','hij'];
  let cityList=['res','hma','imr'];
  let cityDetails=[{'name':'reshma'},{'name':'imran'}];
  return(
    <div>
      <Header/>
      <div className="content">
        <div className="left-content">
         <h1>This is left Home</h1>
        </div>
        <div>
          <h1>This is Home</h1>
          <h2>{firstName}</h2>
          <h2>{mobileNo}</h2>

     
        </div>
        <div className="right-content">
         <h1>This is Right Home</h1>
        </div>

      </div>
      {
        nameList.map((obj,index)=>{
          return(
            <h4>{obj}</h4>
          )


        }
        )
      }
      {
        cityList.map((val,key)=>{
          return(
            <h4>{val}</h4>
          )

        }
        )
      }
      {
        cityDetails.map(obj=>{
          return <p key={obj.name}>
            <span>{obj.name}</span>
            <a href="http:/google.com">Google</a>
          </p>
            

          


        })
      }
      
      <Footer/>
    </div>
  )
}
