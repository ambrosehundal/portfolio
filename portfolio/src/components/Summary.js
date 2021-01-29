import React, {useState, useEffect} from "react";


function Summary(props){

const [dollars, setCount] = useState(1000);
const [tagline, setTagline] = useState('I love to build.')

useEffect(() => {
    const timeout = setTimeout(() => {
        setTagline(getNextState(tagline));
    }, 2000);


   function getNextState() {
       var soccer = 'I love playing soccer'
       var coding = 'I love to build'
       var workout = 'I like to cook chicken thighs'
       if(tagline === coding){
           return soccer;
       };
       if(tagline === soccer) {
           return workout;
       };
       
        return coding;
       
   }

    return () => {
        clearTimeout(timeout);
    };
}, [tagline]);

    return (
        <div>
            <h2>Hi my name is Ambrose
             I am a passionate developer and {tagline} </h2>
            <button onClick={ () => setCount(dollars+1000)}>Lets make more money $$$  </button>

            <h6>By the time I turn 30, I hope to make {dollars} dollars</h6>
        </div>
    )
};


export default Summary