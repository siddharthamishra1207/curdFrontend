

import { Box, Typography, styled } from '@mui/material';



const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <center> 
            <Typography variant="h4">
                Basic 
                CURD 
            </Typography>
            </center>
            
        </Header>
    )
}

export default CodeForInterview;