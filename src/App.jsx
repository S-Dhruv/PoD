import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
function App() {
  const NASA_KEY= import.meta.env.VITE_NASA_API_KEY;
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [showModel , setShowModel] = useState(false);
  function handleToggle(){
    setShowModel(!showModel);
  }
  useEffect( ()=>{
    async function fetchData() {
      const url="https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apidata = JSON.parse(localStorage.getItem(localKey))
        setData(apidata)
        console.log('Fetched from Cache');
        return
      }
      localStorage.clear();
      try{
        const res = await fetch(url);
        const apidata = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apidata))
        setData(apidata);
        console.log('Fetched from Api');
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[])
  return (
    <>
      {data ? (<Main data={data}/>) :
         <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
         </div>
      }
      {showModel && (<Sidebar data={data} handleToggle={handleToggle} />)}
      {data  ? (<Footer data={data} handleToggle={handleToggle}/>) :
        <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
       </div>
      }
    </>
  )
}

export default App
