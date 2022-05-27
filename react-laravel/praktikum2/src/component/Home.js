import { useState, useEffect} from "react";
import http from "../http";

function Home() {
    // const classes = useStyles();

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res =>{
            setUsers(res.data);
        })
    }

    return (
     <div className="container">
         <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Komentar</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index)=>(
                    <tr key={user.id}>
                        <td>{++index}</td>
                        <td>{user.comment}</td>
                    </tr>
                ))}
                
            </tbody>
         </table>
     </div>

    );
  }
  
export default Home;