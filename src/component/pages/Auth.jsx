import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";


export default function Auth() {
    const [page, setPage] = useState('login')
    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    })
    console.log(data);
    return (
        <div className="d-flex justify-content-center align-items-center"style={{ minHeight: '100vh' }} >
            <div className="d-flex justify-content-center align-items-center rounded-5 bg-white w-25 p-5" style={{borderStyle:"dashed"}}>
                <div className=" w-100 ">
                {page === 'login' ? 
                <Login setPage={setPage} data={data} /> : page === 'register' &&
                        <Register setPage={setPage} setData={setData}/>
            }
                </div>
            </div>
        </div>
    )
}