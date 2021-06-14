import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
    questions: PropTypes.array,
    onSubmit: PropTypes.func,
};

Question.propsDefault = {
    questions: [],
    onSubmit: null,
};

function Question(props) {
    const {questions} = props;
    
    function handleSubmit(e) {
        e.preventDefault(e)
        console.log('ahihi');

    }

    return (
        <form className="block_input" onSubmit={handleSubmit}>
        {   
            questions.map(question => { 
                const answers = question.answer;    
                return (  
                    <>
                        <p key={question.id}>{question.test}</p>   
                        {/* {
                            answers.map(answer => {
                                return(
                                    <div className="block_answer">
                                        <input type="radio" />
                                        <label>{answer.answer}</label><br></br> 
                                    </div>  
                                )
                            })
                        } */}
                    </>               
                )  
            })
        }
        <input type="submit" value="Nộp bài" />
        </form>
    );
}

export default Question;






