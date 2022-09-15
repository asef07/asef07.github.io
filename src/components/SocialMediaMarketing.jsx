import React from 'react';

import {Box, Stack, Typography} from "@mui/material";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Background from '../assets/sm_marketing_bg.png'

const SocialMediaMarketing = () => {
    return (
        <Stack
            justifyContent={'center'}
            sx={{
                height: '700px',
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <Box ml={{xs: '1rem', sm: '1rem', md: '10rem'}}>
                <Typography
                    sx={{
                        color: '#9FEEFF',
                        fontFamily: 'Poppins',
                        fontSize: {xs: '35px', sm: '35px', md: '50px'},
                        fontWeight: 600,
                        letterSpacing: '5px'
                    }}
                >
                    Social Media Marketing
                </Typography>
                <Typography
                    sx={{
                        maxWidth: '600px',
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        fontWeight: 450,
                        color: '#F5F5F5',
                        mr: {xs: '1rem', sm: '1rem', md: 0},
                        mt: {xs: '1rem', sm: '1rem', md: 0}
                    }}
                >
                    I'm a professional freelancer and digital marketer expert. And I have experience on this platform. I provide all kinds of digital-social marketing services. I can help you get to the top with organic audience reach and increase your social platform audience. As an expert, I can do it for you. Real and Organic Services.
                </Typography>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    mt={'1rem'}
                    spacing={1}
                    sx={{
                        width:'150px',
                        height:'50px',
                        background: '#9FEEFF',
                        borderRadius: '50px',
                        cursor: 'Pointer',
                    }}
                >
                    <Typography>
                        Read More
                    </Typography>
                    <ArrowForwardIosIcon sx={{fontSize: '1rem'}}/>
                </Stack>
            </Box>
        </Stack>
    );
};

export default SocialMediaMarketing;