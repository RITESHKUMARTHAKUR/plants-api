import './App.css';
import {useState} from "react"


function App() {
  const styles = ["border-black border-2 rounded-[4px] w-[100%] mb-4"]
  const [name,setName ] = useState();
  const [category,setCategory ] = useState();
  const [commonname,setCommonName ] = useState();
  const [desc, setDesc ] = useState();
  const [size, setSize ] = useState();
  const [space, setSpace ] = useState();
  const [sunlight, setSunlight ] = useState();
  const [temperature, setTemp ] = useState();
  const [watering, setWatering ] = useState();



  const addUrl = `${process.env.REACT_APP_API_BASE_URL}/add`;
  const testAddUrl = `${process.env.REACT_APP_API_TEST_URL}/add`;
  const getUrl = `${process.env.REACT_APP_API_BASE_URL}/getPlants`;
  const getAllUrl = `${process.env.REACT_APP_API_BASE_URL}/getAllPlants`;
  const testGetUrl = `${process.env.REACT_APP_API_TEST_URL}/getPlants`;

  // console.log(apiUrl)
  // console.log(testAddUrl)
  // console.log(testGetUrl)
  // console.log("Add Url: ")
  // console.log(addUrl)
  // console.log(getUrl)

  const handleClick = async (e) => {
    e.preventDefault();
    const plantData = { name,category,commonname,desc,size,space,sunlight,temperature,watering } ;
    // console.log(plantData)
    // console.log(testAddUrl)
    const addData = await fetch(addUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })

    // console.log(addData.status)

    if(addData.status === 200){
      alert("Plant added Successfully")
    }
    else{
      alert("Plant already exist")
    }
  }

  // const getPlants = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await fetch(getUrl,{
  //       method: 'GET',
  //       headers: {
  //         "Content-Type" : "application/json",
  //       },
  //       body: JSON.stringify()

  //     }).then(data => {
  //       console.log(data);
  //     })
  //   } catch (error) {
  //     alert("Not Found")
  //   }
  // }

  return (
    <div className=" font-poppins h-screen flex flex-col items-center ">
      <div className="bg-green-300 w-full py-4 ">
        <p className="text-center font-bold">
          PLANTS API
        </p>
        <p className="text-[0.7em]">
          {getAllUrl}
        </p>
      </div>
      <div className="pt-6 md:flex-row md:pt-8 w-[80%] md:flex md:gap-20">
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
            <p>Description</p>
            <textarea className={`${styles} h-full`} onChange={(e) => setDesc(e.target.value) } type="text" />
          </div>
        </div>
        <div className=" flex flex-col  md:w-1/2">
          <div>
            <p>size</p>
            <input className={`${styles}`} onChange={(e) => setSize(e.target.value) } type="text" />
          </div>
          <div>
            <p>space</p>
            <input className={`${styles}`} onChange={(e) => setSpace(e.target.value) } type="text" />
          </div>
          <div>
            <p>Sunlight</p>
            <input className={`${styles}`} onChange={(e) => setSunlight(e.target.value) } type="text" />
          </div>
          <div>
            <p>Temperature</p>
            <input className={`${styles}`} onChange={(e) => setTemp(e.target.value) }  type="text" />
          </div>
          <div>
            <p>Watering</p>
            <input className={`${styles}`} onChange={(e) => setWatering(e.target.value) } type="text" />
          </div>
        </div>
      </div>
      <button className="mt-4 border-black border-2 w-[40%] py-2 font-bold rounded-[0.2em]" onClick={handleClick}>Submit</button>
      {/* <button onClick={getPlants}>
        Get Plants
      </button> */}
    </div>
    
  );
}

export default App;
