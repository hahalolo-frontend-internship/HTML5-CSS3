import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    session__answer: {
        margin: '10px 0'
    },
    input: {
        marginRight: '8px'
    },
    p: {
        fontSize: '18px',
        fontWeight: 'bold'
    }
})

export default function Question(props) {
    const classes = useStyles();
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
                            <Typography component="p" class={classes.p} key={question.id}>{(key + 1) + '. ' + question.content}</Typography>   
                            {
                                answers && 
                                answers.map(answer => {
                                    return(
                                        <Box key={answer.id} className={classes.session__answer}>
                                            <Typography component="input"
                                                className={classes.input}
                                                type="radio" 
                                                name={'answer' + answer.questionId} 
                                                value={answer.result} 
                                                onChange={() => handleChange(answer)} 
                                            />
                                            <Typography component="label">{answer.numerical_order + '. ' + answer.answer}</Typography><br></br> 
                                        </Box>  
                                    )
                                })
                            }
                        </>               
                    )  
                })
            }
            <Box textAlign="center">
                <Button variant="contained" type="submit" color="secondary">Xem thêm</Button>
            </Box> 
        </form>
    );
}