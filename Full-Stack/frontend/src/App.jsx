import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  useEffect(() =>{
  (async () =>{
      const response = await axios.get('/api/data')
      console.log(response.data)
      setData(response.data)
  })()
  },[])


  // useEffect(() =>{
  //   axios.get('/api/data')
  //   .then((response) =>{    
  //       console.log(response.data);

  //       setData(response.data)   
  //   })
  //   .catch((error) =>{
  //       console.log(error);   
  //   })
  // },[])

  return (
    <>
    <div>
      <h3>Data Fetching . . . </h3>
    </div>
    <div>
        {/* {data.map((data) =>(
          <div key={data.id}>
             {data.title} 
             <br />
             {data.description}
          </div>
        ))} */}
    </div>
    </>
  )
}

export default App
