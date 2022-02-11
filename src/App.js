import React,{Component} from 'react'
import './App.css'
import Addcourse from './components/Addcourse';
import Display from './components/Display';
class CourseDetails extends Component{
  state={
    coursedetails:[{id:1,coursename:'c++',duration:20,des:'long'},
                    {id:2,coursename:'java',duration:20,des:'long long'},
                    {id:3,coursename:'python',duration:20,des:'medium'},

    ]
  }
  adddetails=(a_details)=>{
    console.log("new details",a_details)
    a_details.id=(4 + Math.ceil(Math.random()*100));
    let new_details=[...this.state.coursedetails,a_details]
    this.setState({
      coursedetails:new_details
    });
  }
  deletecourse=(id)=>{
      console.log("delete",id);
      let finallist=this.state.coursedetails.filter(finallist=>{
        return finallist.id!==id
      });
      console.log(finallist)
      this.setState({
        coursedetails:finallist
      });
  
}


  render(){
    return(
      <div className='App'>
        <Display coursedetails={this.state.coursedetails}
                 deletecourse={this.deletecourse}  
        />
        <Addcourse adddetails={this.adddetails}/>
      </div>
      
    )
  }
}
export default CourseDetails; 















/*
import './App.css'
import React,{Component} from 'react';
import Display from './components/Display';
import AddDetails from './components/Addcourse';

class Details extends Component{
    state={
      studentdetails:[
      {id:1,name:'mahesh',course:'react',duration:19},
      {id:2,name:'shiva',course:'python',duration:30},
      {id:3,name:'venkat',course:'java',duration:40}
    ]}
   addCourse = (course_detail) => {
      console.log(course_detail);
      course_detail.id = (4 + Math.ceil(Math.random()*100));

       let courseDetails = [...this.state.courseDetails, course_detail]
       console.log('New array', courseDetails);

      this.setState({
        // courseDetails: this.state.courseDetails.push(course_details)
        courseDetails
      })
 
    newdetails=(new_details)=>{
      console.log(new_details);
      new_details.id=(4+Math.ceil(Math.random()*100));

      let studentdetails=[...this.state.studentdetails, new_details]
      //console.log('New array',studentdetails);

      this.setState({
        studentdetails
      });

    }
    deleterecord=(id)=>{
        console.log('deleted',id);
        //filter
        let finallist=this.state.studentdetails.filter(finallist=>{
          return finallist.id!==id
          })
        console.log(finallist)
        this.setState({
          studentdetails:finallist
        });
      
    }
    
    render(){
      return(
        <div className='App'>
          <Display studentdetails={this.state.studentdetails}
            deleterecord={this.deleterecord}/>
          <AddDetails newdetails={this.newdetails}/>
        </div>
      )
    }
}



export default Details;
*/