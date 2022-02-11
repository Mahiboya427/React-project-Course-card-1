import React,{Component} from "react";
import './Display.css'
class Addcourse extends Component{
    state={
        coursename:'',
        duration:'',
        des:'',
    }
    handlechange=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.id]:event.target.value
        });
    }
    handlesubmit=(event)=>{
        console.log("clicked")
        this.props.adddetails(this.state)
        event.preventDefault();
        this.setState({
            coursename:'',
            duration:'',
            des:'',
        });
    }
    render(){
        console.log(this.state);
        return(
            <form onSubmit={this.handlesubmit} className='course-card'>
                <label>course name</label><br/>
                <input type='text'
                value={this.state.coursename}
                id="coursename"
                onChange={this.handlechange}
                placeholder="course name"></input><br/>
                <label>duration</label><br/>
                <input type='number'
                value={this.state.duration}
                id='duration' 
                onChange={this.handlechange} 
                placeholder="duration"></input><br/>
                <label>description</label><br/>
                <input type='text'
                value={this.state.des}
                id='des' 
                onChange={this.handlechange}
                placeholder="description"></input><br/>
                <input type='submit'></input>
            </form>
        )
    }
}

export default Addcourse;







/*
import React,{Component} from "react";

class AddDetails extends Component{
    state={
        name:'',
        course:'',
        duration:''
    }
    handlechange=(event)=>{
        this.setState({
            [event.target.id]:event.target.value

        });
    }

    handlesubmit = (event) => {
        
        this.props.newdetails(this.state)
        event.preventDefault();
        //controlled componets
        this.setState({
            name:'',
            course:'',
            duration:''

        }); 
    }

    
    render(){
        console.log(this.state)
        return(
            <form onSubmit={this.handlesubmit}>
                <label>student name</label><br/>
                <input type='text'
                    id="name"
                    placeholder="name"
                    required
                    value={this.state.name}
                    onChange={this.handlechange}></input><br/>
                <label>course</label><br/>
                <input type='text'
                     id="course" 
                     placeholder="course" 
                     required
                     value={this.state.course}
                     onChange={this.handlechange}></input><br/>
                <label>duration</label><br/>
                <input type='number' 
                    id="duration" 
                    placeholder="duration" 
                    required
                    value={this.state.duration}
                    onChange={this.handlechange}></input><br/>
                <input type='submit' value='add student'></input>
            </form>
        )
    }
}
export default AddDetails;


--------------------------------------------------------------------------
    handlename=(event)=>{
        console.log("change name")
        this.setState({
            name:event.target.value
        });
    }
    handlecourse=(event)=>{
        console.log("change course")
        this.setState({
            course:event.target.value
        });
    }
    handleduration=(event)=>{
        console.log("change duration")
        this.setState({
            duration:event.target.value
        });
    }

    render(){
        console.log(this.state)
        return(
            <form>
                <label>student name</label><br/>
                <input type='text' placeholder="name" onChange={this.handlename}></input><br/>
                <label>course</label><br/>
                <input type='text' placeholder="course" onChange={this.handlecourse}></input><br/>
                <label>duration</label><br/>
                <input type='number' placeholder="duration" onChange={this.handleduration}></input><br/>
                <input type='submit'></input>
            </form>
        )
    }
*/ 