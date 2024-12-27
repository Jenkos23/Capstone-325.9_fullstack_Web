import { useState, useEffect } from "react";
import React from "react";
import '../styles/fashion.css'

export default function DateTimeDisplay(){
    const [currentDatetime, setCurrentDateTime] =useState(new Date());


    useEffect(()=>{
        const intervalId  = setInterval(()=>{
            setCurrentDateTime(new Date())
        }, 1000); //update every 1 second



        //cleanup the interval when the component is umnounted
        return () => clearInterval(intervalId);
    }, []);

    //Format the current date and time to display
    const date = currentDatetime.toLocaleDateString();
    const time = currentDatetime.toLocaleTimeString();


    return(
        <div className="DateTimeDisplay">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
        </div>
    );
}