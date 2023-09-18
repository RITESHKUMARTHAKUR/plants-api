import './App.css';
import {useState} from "react"


function App() {
  const styles = ["border-black border-2 rounded-[4px] w-[100%] mb-4"]
  const [plantname,setName ] = useState();
  const [category,setCategory ] = useState();
  const [commonname,setCommonName ] = useState();
  const [desc, setDesc ] = useState();
  const [space, setSpace ] = useState();
  const [sunlight, setSunlight ] = useState();
  const [temperature, setTemp ] = useState();
  const [watering, setWatering ] = useState();



  const addUrl = `${process.env.REACT_APP_API_BASE_URL}/add`;

  // console.log(apiUrl)
  // console.log(addUrl)

  const handleClick = async (e) => {
    e.preventDefault();

    const plantData = { plantname,category,commonname,desc,space,sunlight,temperature,watering } ;
  
    try {
      await fetch(addUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plantData),
      }).then(
        alert("Data added Successfully !!")
      );
      
    } catch (error) {
      console.log(error)  
    }
  }
  return (
    <div className=" font-poppins h-screen flex flex-col items-center ">
      <div className="bg-green-300 w-full py-4 ">
        <p className="text-center font-bold">
          PLANTS API
        </p>
      </div>
      <div className="pt-6 md:flex-row md:pt-20 w-[80%] md:flex md:gap-20">
        <div className=" flex flex-col  md:w-1/2">
          <div>
            <p>Name</p>
            <input className={`${styles}`} onChange={(e) => setName(e.target.value) }  type="text" />
          </div>
          <div>
            <p>Category</p>
            <input  className={`${styles}`} onChange={(e) => setCategory(e.target.value) } type="text" />
          </div>
          <div>
            <p>Common Name</p>
            <input className={`${styles}`} onChange={(e) => setCommonName(e.target.value) } type="text" />
          </div>
          <div>
            <p>desc</p>
            <input className={`${styles}`} onChange={(e) => setDesc(e.target.value) } type="text" />
          </div>
        </div>
        <div className=" flex flex-col  md:w-1/2">
          <div>
            <p>space</p>
            <input className={`${styles}`} onChange={(e) => setSpace(e.target.value) } type="text" />
          </div>
          <div>
            <p>sunlight</p>
            <input className={`${styles}`} onChange={(e) => setSunlight(e.target.value) } type="text" />
          </div>
          <div>
            <p>Temperature</p>
            <input className={`${styles}`} onChange={(e) => setTemp(e.target.value) }  type="text" />
          </div>
          <div>
            <p>watering</p>
            <input className={`${styles}`} onChange={(e) => setWatering(e.target.value) } type="text" />
          </div>
        </div>
      </div>
      <button className="mt-4 border-black border-2 w-[40%] py-2 font-bold rounded-[0.2em]" onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
