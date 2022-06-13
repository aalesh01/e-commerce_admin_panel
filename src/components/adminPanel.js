import './productP.css';
import AddProducts from "./addProducts"
import ViewProducts from "./viewProducts"
import React from 'react';


const AdminPanel = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    await fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(res => setData(res));

  }

  React.useEffect(() => { getData() }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    })
    getData();
  }

  return (
    <>
      <AddProducts />
      <div id="productP">
        {data.map(ele => <div key={ele.id}> <ViewProducts {...ele} handleDelete={handleDelete} /></div>)} 
      </div>

    </>
  )
}

export default AdminPanel