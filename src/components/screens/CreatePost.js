import React, { useState } from 'react'

const CreatePost =()=>{
  const [title,setTitle]=useState("");
  const [body,setBody]=useState("");
  const [image,setImage]=useState("");

  const postDetails=()=>{
    const data= new FormData();
    data.append("file",image)
    data.append("upload_preset","insta-clone");
    data.append("cloud_name","dqcrx5nr5")
    fetch("https://res.cloudinary.com/v1_1/dqcrx5nr5/image/upload",{
    method:"post",
    body:data
  })
  .then(res=>res.json)
  .then(data=>{
    console.log(data)
  }).catch(err=>{
    console.log(err)
  })
  }




return(
    <div className="card input-filed"
     style={{
            margin:"10px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }} 
>
<input type="text"
 placeholder="title"
 value={title}
 onChange={(e)=>setTitle(e.target.value)}
 />
<input type="text" 
placeholder="body"
value={body}
 onChange={(e)=>setBody(e.target.value)}
/>

    <div className="file-field input-field">
      <div className="btn">
        <span>Upload Image</span>
        <input type="file" onChange={(e)=>console.log(e.target.files)}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" 
    onChange={()=>postDetails()}>
   SUBMIT POST
  </button>
  

    </div>
    
)
}

export default CreatePost