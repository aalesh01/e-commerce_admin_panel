import React from 'react';

const AddProducts = () => {

    const [formData, setformData] = React.useState({
        title: "",
        gender: "",
        price: "",
        category: "",
        image: ""
    })

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
       
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        await fetch(`http://localhost:3000/products`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "content-type": "application/json" }
        })
        alert("Product Added");
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Add a Product</h1>
                <input onChange={handleAdd} name="title" placeholder="Enter a title" type="text" /> <br />
                <select onChange={handleAdd} name="gender"> 
                    <option value="male">Male</option>
                    <option value="female">Fe-male</option>
                </select> <br />
                <input onChange={handleAdd} name="category" placeholder="Enter a category" type="text" /> <br />
                <input onChange={handleAdd} name="price" placeholder="Enter a Price" type="text" /> <br />
                <input onChange={handleAdd} name="image" placeholder="Enter a image url" type="text" /> <br />
                <input value="ADD PRODUCT" type="submit" />
            </form>
        </>
    )
}

export default AddProducts;