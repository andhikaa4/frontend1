import React from 'react'
import Table from 'react-bootstrap/Table';

export default function TableHome({
    data, setUsers,users, inputHandler, uniqueCity, uniqueGender, setId, handleShowEdit 
}) {
    function handleDelete(id) {
        const index = users?.findIndex(item => item.id === id);
    
        const newItems = users?.slice(0, index).concat(users.slice(index + 1));
    
        setUsers(newItems);
      }
      const getId = (item) => {
        setId(item)
      }
        
  return (
    <Table responsive="md" >
        <thead>
          <tr style={{borderBottom:'1px solid black'}} >
            <th>Image</th>
            <th>Username</th>
            <th>Password</th>
            <th>Fullname</th>
            <th><select className='fw-bold border-0' onChange={inputHandler}>
                    <option value='' >City</option>
                    {uniqueCity?.map((item, index) => (
                        <option key={index} value={item?.address?.city}>{item?.address?.city}</option>
                    ))}
                </select>
                </th>
            <th><select className='fw-bold border-0' onChange={inputHandler}>
                    <option value='' >Gender</option>
                    {uniqueGender?.map((item, index) => (
                        <option key={index} value={item.gender}>{item.gender}</option>
                    ))}
                </select></th>
            <th></th>

          </tr>
        </thead>
        <tbody >
            {data?.map((item, index) => (

            <tr key={index} className='align-middle bg-info bg-opacity-50 border-bottom border-light border-5 ' >
                <td><img src={item.image} alt="" style={{maxHeight:'70px', objectFit:'contain'}} /></td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.firstName +' ' + item.lastName}</td>
                <td>{item?.address?.city}</td>
                <td>{item.gender}</td>
                <td className='d-flex border-0 align-items-center pt-4' >
                    <i onClick={()=> handleDelete(item.id)} className="fa-solid fa-trash fs-5 me-2" style={{cursor:"pointer"}}></i> 
                    <i onClick={() => {getId(item); handleShowEdit()}} className="fa-solid fa-pen-to-square fs-5" style={{cursor:"pointer"}}></i></td>
            </tr>
            ))}

        </tbody>
      </Table>
  )
}
