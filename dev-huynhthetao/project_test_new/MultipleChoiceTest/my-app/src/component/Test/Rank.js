import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    session__result: {
        width: '30%',
        height: '380px',
        border: 'solid 1px #d9d9d9',
        borderRadius: '8px',
        marginLeft: '15px'
    },
    card__title: {
        background: '#3a4bcd',
        color: '#fff',
        fontSize: '20px',
        padding: '15px',
        textAlign: 'center',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px'
    },
    row: {
        display: 'flex',
        padding: '15px 5px',
        borderBottom: 'solid 1px #d9d9d9'
    },
    row__col_1_2: {
        width: '49%'
    },
    row__col_1_4: {
        width: '25%',
        textAlign: 'center'
    }
})

function Rank(props) {
    const classes = useStyles();
    const [dataUsers, setDataUsers] = useState();
    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => {
            // console.log(res.data);
            setDataUsers(res.data);
        }) 
        // sortRank();
    }, [])
     
    // function sortRank() {
    //     if(dataUsers) {
    //         dataUsers.sort((a, b) => {
    //         }
    //     )};
    // }
    

    return (
        <Box className={classes.session__result}>
            <Typography variant="h2" className={classes.card__title}>Top 3/273 lượt thi</Typography>
            <Box p={1}>
                <Box className={classes.row}>
                    <Box className={classes.row__col_1_2}>Tên</Box>
                    <Box className={classes.row__col_1_4}>Điểm</Box>
                    <Box className={classes.row__col_1_4}>Thời gian</Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.row__col_1_2}>Nguyễn Văn A</Box>
                    <Box className={classes.row__col_1_4}>10</Box>
                    <Box className={classes.row__col_1_4}>05:45</Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.row__col_1_2}>Nguyễn Văn B</Box>
                    <Box className={classes.row__col_1_4}>9</Box>
                    <Box className={classes.row__col_1_4}>08:04</Box>
                </Box>
                <Box className={classes.row}>
                    <Box className={classes.row__col_1_2}>Nguyễn Văn C</Box>
                    <Box className={classes.row__col_1_4}>9</Box>
                    <Box className={classes.row__col_1_4}>09:45</Box>
                </Box>
            </Box>    
            <Box textAlign="center">
                <Button variant="contained" color="secondary">Xem thêm</Button>
            </Box>    
        </Box>  
    );
}

export default Rank;