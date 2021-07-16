import React from 'react';
import PropTypes from 'prop-types';

Question.propTypes = {
    questions: PropTypes.array,
    onHandleChange: PropTypes.func,
    onSubmit: PropTypes.func,
};

Question.defaultProps = {
    questions: [],
    onHandleChange: null,
    onSubmit: null
};

export default function Question(props) {
    const { questions, onHandleChange, onSubmit } = props;

    function handleChange(answer) {
        if(onHandleChange) {
            onHandleChange(answer)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!onSubmit) return;
        onSubmit();
    }

    return (
        <form className="form__test" onSubmit={handleSubmit}>
        {
            questions.map((question, key) => { 
                const answers = question.answers;
                return (  
                    <>
                        <p key={question.id}>{(key + 1) + '. ' + question.content}</p>   
                        {
                            answers && 
                            answers.map(answer => {
                                return(
                                    <div key={answer.id} className="session__answer">
                                        <input 
                                            type="radio" 
                                            name={'answer' + answer.questionId} 
                                            value={answer.result} 
                                            onChange={() => handleChange(answer)} 
                                        />
                                        <label>{answer.numerical_order + '. ' + answer.answer}</label><br></br> 
                                    </div>  
                                )
                            })
                        }
                    </>               
                )  
            })
        }
        <input className="button button__test" type="submit" value="Nộp bài" />
        </form>
    );
}

// loi key child










