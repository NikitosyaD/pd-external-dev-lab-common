import React from 'react';

function NewStudents(props) {

    return (
        <div>
            {
                props.NewStudents.length > 0 &&
                <p>{props.NewStudents.length} New students are waiting for your actions</p>
            }
        </div>
    );
}

export default NewStudents;
