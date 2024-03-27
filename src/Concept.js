export default function Concept(){
    const getApiData=async()=>{
        let response=await fetch("http://reqres.in/api/users?page=2",{method:"GET"});
        let res=response.json();
        console.log(res);
    }
    return(
        <>
          <h1>Reshma</h1>
          <button onClick={()=>getApiData}>Click to get Api</button>
        </>
    )
}