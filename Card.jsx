import React from "react";

function Card({name, course, feedback }){
    return(
        <div>
            <h3>{name}</h3>
            <p><b>Course:</b>{course}</p>
            <p><b>Feedback:</b>{Feedback}</p> 
        </div>
    )
}