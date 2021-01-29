import React, {useState, useEffect} from "react";


function Summary(props){

const [dollars, setCount] = useState(1000);
const [tagline, setTagline] = useState('I love to build.')


    return (
        <div>
            <h2>Hi my name is Ambrose. I am a passionate developer and {tagline} </h2>
            <button onClick={ () => setCount(dollars+1000)}>Lets make more money $$$  </button>

            <h6>By the time I turn 30, I hope to make {dollars} dollars</h6>
        </div>
    )
};


export default Summary