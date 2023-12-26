import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


function List(){

    const [Users,setUsers]=useState([]);
    const [name,setName]=useState("");
    const postBtn=((e)=>{
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users",{name:name})
      

        .then((res)=>{
            setUsers([...Users,res.data])
            setName(" ")
        })

    })
  

    const upBtn=(e)=>{
        e.preventDefault()
        axios.patch(`https:jsonplaceholder.typicode.com/users/${5}` ,{name:name})

        .then((res)=>{
           
            console.log(res.data);
        })
        console.log("Updated");
    }

  

    const delBtn=(e)=>{
        e.preventDefault()
        axios.delete(`https:jsonplaceholder.typicode.com/users/${5}`,{name:name})

        .then((res)=>{
            
            console.log(res.data);
        })
        console.log("deleted");
    }
     useEffect(()=>{
          
          axios.get("https://jsonplaceholder.typicode.com/users")

          .then((res)=>{
            setUsers(res.data)
          })
     },[])
     
    return(
        <div className='edit'>
            {
                Users.map((use,i)=>(
       
                    <div key={i}> 
                         <h2>{use.name}</h2>
                    </div>
                   
                 ))
            }
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button  onClick={postBtn}>Show</button>
            <button onClick={upBtn}>Update</button>
            <button onClick={delBtn}>Delete</button>
        </div>

    )
}
export default List;