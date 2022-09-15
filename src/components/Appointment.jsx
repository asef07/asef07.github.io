import React from 'react';
import {Stack, Typography} from "@mui/material";

const Appointment = () => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                background: '#E2F0F9',
                textAlign: 'center',
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: {xs: '50px', sm: '50px', md: '60px'},
                    fontWeight: 600,
                    letterSpacing: '4px',
                    mb: '1rem'
                }}
            >
                Want More?
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '20px',
                    fontWeight: 500,
                    maxWidth: '700px',
                    mb: '2rem'
                }}
            >
                Social media marketing is an online marketing method that utilizes different social media platforms, such as Facebook, Instagram, YouTube, etc, to establish brand recognition, capture customers' attention, and connect brands with a broader, more diverse audience segment.
            </Typography>
            <Stack
                direction={{xs: 'column', sm: 'column', md: 'row'}}
                spacing={{xs: 2, sm: 2, md: 15}}
                alignItems={'center'}
                mb={'2rem'}
            >
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '27px',
                        fontWeight: 600,
                    }}
                >
                    Schedule An Appointment
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        fontWeight: 500,
                        background: '#9FEEFF',
                        borderRadius: '30px',
                        textAlign: 'center',
                        px: '30px',
                        py: '15px'
                    }}
                >
                    yourEmail@example.com
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Appointment;