// import React, {useState} from "react";

// function Dashboard(){
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       name: name,
//       description: description,
//       price: price,
//       category: category
//     };
//     const requestOption ={
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };
//       try{
//         const response = await fetch('https://dummyjson.com/products/add', requestOption);
//         if(!response.ok){
//           throw new Error('Failed to add product');
//         }
//         console.log('product added successfully!');
//       }catch(error){
//         console.error('Error adding product:', error.message);
//       }
//     };
//     return(
//       <div>
//         <h2>Add product</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)}/><br />
//            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/><br />
//            <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/><br />
//            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/><br />
//            <button type='submit'>Add Product</button>
//         </form>
//       </div>

//     );
//  }
// export default Dashboard


// import React, {useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Sample(){
//   const handleIncrement = () =>{
//     SVGAnimatedNumber(num + 1)
//   }
//   const navigate = useNavigate()
//   const GoTo = () =>{
//     navigate('/dashboard')
//   }
//   return(
//     <div>
//       <input type="text" ref={inputRef} placeholder="Type Something Here..."/>
//       <button onclick={focusInput
//     </div>
//   )
//   const inputRef = useRef(null);
//   const focusInput = () =>{
//     inputRef.current.focus();
//   };
//   }

function Dashboard(){
    <h1 classname='fade-in'>WELCOME</h1>
}