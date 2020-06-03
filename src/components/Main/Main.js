import React, { Component } from 'react'
import './Main.css';

import Header from '../Header/Header';
import StudentTable from '../StudentTable/StudentTable';
import StudentDetails from '../StudentDetails/StudentDetails';

export default class Main extends Component {

    constructor(){
        super();
        this.state = {
            students: [],
            student: null
        }
        this.onStudentClick = this.onStudentClick.bind(this);
    }
    onStudentClick(student){
        this.setState(() => ({
            student
        }))
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(({results}) => {
                this.setState(() => ({
                    students: results
                }))
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    render(){
        return (
            <div className="app__main">
                <Header />
                <StudentTable students={this.state.students} onStudentClick={this.onStudentClick} />
                <StudentDetails student={this.state.student} />
            </div>
        )
    }
}