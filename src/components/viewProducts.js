import React from 'react';


const ViewProducts = (ele, {handleDelete}) => {

    return (
        <>

            <div key={ele.id}>
                <h1>Title:{ele.title}</h1>
                <img src={ele.image} alt="" />
                <p>Gender:{ele.gender}</p>
                <p>Category:{ele.category}</p>
                <p>Price:{ele.price}</p>
                <button onClick={()=>handleDelete(ele.id)}>Delete</button>
            </div>
        </>
    )
}
export default ViewProducts;