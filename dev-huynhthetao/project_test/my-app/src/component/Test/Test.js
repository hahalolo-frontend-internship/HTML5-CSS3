import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

function Test(props) {
    const [ data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('http://localhost:3000/question');
            setData(result.data);
        }
        fetchData();
    }, []);

    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // pick 10 questions at random
        if(data.length > 0) {
            if(questions.length >= 10) return;
            const key = Math.floor(Math.random() * data.length);
            const question = data[key];
            data.splice(key, 1);
            setQuestions([...questions, question]);  
        } 
    });

    function handleFormSubmit(formAnswers) {
        console.log(formAnswers);
    }

    return (
        <div>
            <Question questions={questions} onSubmit={handleFormSubmit} />
        </div>   
    );
}

export default Test;



