import React from 'react';
import './StudentDetails.css';

const StudentDetails = (props) => (
    <div className="details__wrapper">
        {
            !props.student ?
            null
            :
            <div className="details__all">
                <div className="details__all-heading">
                    <img src={props.student.picture.large} alt="thumbnail" />
                    <div className="details__all-description">
                        <h1>{`${props.student.name.first} ${props.student.name.last}`}</h1>
                        <h2>{`${props.student.gender.toUpperCase()}`}</h2>
                        <h2>{`${props.student.dob.age}`}</h2>
                    </div>
                </div>
                <div className="details__all-data">
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{props.student.login.password}</td>
                            </tr>
                            <tr>
                                <td>Cell</td>
                                <td>{props.student.cell}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td>{new Date(props.student.dob.date).toDateString()}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{props.student.email}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{`
                                    ${props.student.location.city}, 
                                    ${props.student.location.state},
                                    ${props.student.location.country} - 
                                    ${props.student.location.postcode}
                                `}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{props.student.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        }
    </div>
)

export default StudentDetails;