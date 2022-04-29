import React, {useState} from "react"
import './App.css';
function Apif() {
  const [users, setUsers] = useState([])
  const [isloading,setloading] = useState(false);
  const fetchData = async () => {
    setTimeout(()=>{
      setloading(false)
    },150)
    setloading(true)
    const response = await fetch("https://reqres.in/api/users?page=1")
    const data = await response.json()
    setUsers(data.data)
  }


  return (
    <div className="App">
       <nav>
        <h1>APiC</h1>
        {isloading ? <div><h2>Fetching</h2>
       <img className='gif' src='img/jkl.gif' /></div> :
       (<button onClick={fetchData}>
       Click</button>)}
       {/* {isloading ? <div><h2>Fetching</h2>
       <img src='img/jkl.gif' /></div> :'' } */}
       </nav>
       <div className="body">
       <h1>Your Data</h1>
      {users.map(data => (
        <table border="2">
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>picture</th>
          </tr>
          <tr>
          <td>{data.id}</td>
          <td>{data.email}</td>
          <td>{data.first_name}</td>
          <td>{data.last_name}</td>
          <td><img src={data.avatar} width="50px"></img></td>
        </tr>
        </table>
      ))}
     </div> 
    </div>
  )
}

export default Apif



