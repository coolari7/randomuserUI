import React from 'react';
import './StudentTable.css';

function generateStudentData(students, func){
    try {
        return students.map((student, index) => {
            let {dob, email, name} = student;
            return (
                <div 
                    className="card" 
                    title="Click to know more" 
                    key={index}
                    name="card"
                    onClick={(e) => {
                        try {
                            // console.log(e.target, e.target);
                            let card = e.target.getAttribute("name") === "card" ? e.target : e.target.parentNode;
                            let allStudents = Array.from(card.parentNode.childNodes);
                            try {
                                allStudents.find(elem => elem.classList.contains("activeBG")).classList.remove("activeBG");
                            } catch (error) {
                                console.error(error.message);
                            } finally {
                                card.classList.add("activeBG");
                            }
                        } catch (error) {
                            console.error(error.message);
                        } finally {
                            func(student)
                        }
                    }}
                >
                    <h2 className="card-heading">{`${name.first} ${name.last}`}</h2>
                    <p>DOB: {new Date(dob.date).toDateString()}</p>
                    <p>Email: {email}</p>
                </div>
            )
        })
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const StudentTable = (props) => {
    let output;
    if (props.students.length === 0){
        output = (
            <div>Loading...</div>
        )
    } else {
        output = generateStudentData(props.students, props.onStudentClick)
    }
    return (
        <div className="table__wrapper">
            <div className="table__wrapper-heading">
                <h1>Student Details</h1>
            </div>
            <div className="table__wrapper-table">
                {output}
            </div>
        </div>
    )
}

export default StudentTable;