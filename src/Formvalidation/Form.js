import React, {useState} from "react";
 const Form =()=>{

 const [userData,setuserData]=useState({
  naming:"",
  section:"",
  numeric:""
 })

 const handleInput=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setuserData({...userData, [name]:value})
 }

 const [record,setRecords]=useState([]);

 const handleSubmit=(e)=>{
  e.preventDefault();
  const newRecord={...userData, id: new Date().getTime().toString()}
  setRecords([...record,newRecord])
   setuserData({naming:"",section:"",numeric:""})

  


 }

 
    return(
        <>
        <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1> 
        <div id="form-div">
          <form action="" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="naming"><h4>Name  :</h4></label>
            <input type="text" id="naming" name="naming" value={userData.naming} onChange={handleInput} required></input></div>
            <div>
            <label htmlFor="section"><h4>Department :</h4> </label>
            <input type="text" id="section" name="section" value={userData.section} onChange={handleInput} required></input></div>
            <div>
              <label htmlFor="numeric"><h4>Rating :</h4> </label>
          <input type="number" id="numeric" name="numeric" value={userData.numeric} onChange={handleInput} required></input></div>

          <button id="submit" >Submit</button>
          </form>

          <div id="flex">
            {
              record.map((currEle)=>{
                const {id,naming,section,numeric}=currEle;
                return(
                  <div className="showDataStyle" key={id}>
                    <p>{naming}||{section}||{numeric}</p>
                    
                  </div>
                )
              })
            }
          </div>
          
          
          
          </div>
        
        </>
    )
  
    }
    export default Form;