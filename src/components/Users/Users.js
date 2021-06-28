import React, { useEffect, useMemo, useState } from 'react'
import Header from './Header/Header';
import { useHistory } from 'react-router';
function Users() {
    const [users, setUsers] = useState([]);
    let localItemCount = localStorage.getItem('items') || 3;
    const [totalItems, setTotalItems] = useState(localItemCount);
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(data => setUsers(data))
      },[]);
      const header = [
          {name: "Name", field: "name"},
          {name: "Email", field: "email"},
          {name: "Website", field: "website"},
      ]

      const history = useHistory();
      const singleUser = (user) => {
        history.push(`/user/${user}`);
    }
    const setTotalUserItem = (items) =>{
        setTotalItems(items);
        localStorage.setItem("items", items);
        console.log(localStorage.getItem('items'))
        setTotalItems(localStorage.getItem('items'));
    }
    return (
        <div>
            <p onClick={()=>setTotalUserItem(3)} className="badge badge-info ml-3"><a href="#" className="text-white">3</a></p>
            <p onClick={()=>setTotalUserItem(5)} className="badge badge-info ml-3"><a href="#" className="text-white">5</a></p>
            <p onClick={()=>setTotalUserItem(users.length)} className="badge badge-info ml-3"><a href="#" className="text-white">All</a></p>
            <table className="table">
                <Header header={header}></Header>
                <tbody>
                {
                    users.slice(0, totalItems).map((user) => 
                    <tr key={user.id}>
                        <td><a href="#" onClick={() => singleUser(user.id)}>{user.name}</a></td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>
                    )
                } 
                </tbody>
            </table>
        </div>




  
    )
}

export default Users
