import React from 'react'

export const Message = ({ msg, bgColor }) => {

    let styles = {
        padding:"1rem",
        marginBottom:"1rem",
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        width:"100%",

        backgroundColor:bgColor,
    };

    console.log("code error message", typeof(code));

    return (
        <div style={styles}>
            <p>{ msg }</p>
        </div>
    )
}
