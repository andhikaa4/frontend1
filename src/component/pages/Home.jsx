import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { Pagination } from "../DataManipulation/Pagination";
import Create from "../modal/Create";
import Edit from "../modal/Edit";
import TableHome from "../tables/TableHome";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const [inputText, setInputText] = useState("");
    const [users, setUsers] = useState(null)
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const[id, setId] = useState(null)
    const handleShow = () => setShow(true);
    const handleShowEdit = () => setShowEdit(true);

    const { data, refetch } = useQuery("dataCache", async () => {
        const response = await API.get('/users')
        setUsers(response.data.users)
        return response.data.users;
    });

    const inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };

    const filteredData = users?.filter((el) => {
        if (inputText === '') {
            return el;
        }
        else {
            return el?.gender.toLowerCase().includes(inputText) 
            || el?.username.toLowerCase().includes(inputText) 
            || el?.password.toLowerCase().includes(inputText) 
            || el?.firstName.toLowerCase().includes(inputText) 
            || el?.lastName.toLowerCase().includes(inputText) 
            || el?.address.city.toLowerCase().includes(inputText) 
        }
    }) 
    const currentPosts = filteredData?.slice(firstPostIndex, lastPostIndex)

    const uniqueCity = users?.filter((city, index, self) => {
        return self.map(p => p?.address?.city).indexOf(city?.address?.city) === index;
      }); 
    const uniqueGender = users?.filter((gender, index, self) => {
        return self.map(p => p.gender).indexOf(gender.gender) === index;
      }); 


    return (
        <div className="d-flex justify-content-center py-5" >
            <div className="rounded-5 bg-white w-75 p-5 " style={{ borderStyle: "dashed", minHeight: '85vh' }}>
                <h2>Users List</h2>
                <div className="d-flex my-3">
                    <input type="text" placeholder="Search Anything Here" className="rounded-pill px-2 me-auto" onChange={inputHandler} />
                    <button className="btn btn-outline-success" onClick={handleShow} >Add User</button>
                </div>
                <TableHome 
                data={currentPosts} 
                refetch={refetch} 
                setUsers={setUsers} 
                users={users} 
                inputHandler={inputHandler}
                uniqueCity={uniqueCity}
                uniqueGender={uniqueGender}
                setId={setId}
                handleShowEdit={handleShowEdit}
                />

                <Pagination
                    totalPosts={filteredData?.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}                  
                />
                <Create show={show} setShow={setShow} setUsers={setUsers} users={users} />
                <Edit show={showEdit} setShowEdit={setShowEdit} setUsers={setUsers} users={users} id={id} />
            </div>
        </div>
    )
}