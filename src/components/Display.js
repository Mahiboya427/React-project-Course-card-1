import React from "react";
import Loading from "./Loading";
import './Display.css'
function Display({coursedetails,deletecourse}) {
  const course_detail=coursedetails.length ? coursedetails.map((item)=>{
    let {id,coursename,duration,des}=item;
    return(
      <div key={id} className='course-card'>
      <h2>{coursename}</h2>
      <h3>{duration}</h3>
      <p>{des}</p>
      <button onClick={()=>deletecourse(id)}>delete couse</button>
    </div>

    )
  }):<Loading/>
  return(
    course_detail
  )
  
}
export default Display;


/*import React from "react";
import Loading from "./Loading";
//object desrtucturing
function Display({studentdetails,deleterecord}) {
        //conditional rendering 
        const studentlist =studentdetails.length ? studentdetails.map((item,index)=>{
          let {name,course,duration,id}=item;//object destructing
            return(
                <div key={id}>
                    <h2>student name:{name}</h2>
                    <h3>course:{course}</h3>
                    <p>duration:{duration}</p>
                    <button onClick={()=>{deleterecord(id)}}>Delete record</button>
                </div>
            )}) : <Loading/>
    return(
        studentlist
    )
    
}

export default Display;

/*<div>
        <div>
            <h2>student name:{props.studentdetails[0].name}</h2>
            <h3>course:{props.studentdetails[0].course}</h3>
            <p>duration:{props.studentdetails[0].duration}</p>
          </div>
          <div>
            <h2>student name:{props.studentdetails[1].name}</h2>
            <h3>course:{props.studentdetails[1].course}</h3>
            <p>duration:{props.studentdetails[1].duration}</p>
          </div>
          <div>
            <h2>student name:{props.studentdetails[2].name}</h2>
            <h3>course:{props.studentdetails[2].course}</h3>
            <p>duration:{props.studentdetails[2].duration}</p>
          </div>
        </div>
*/