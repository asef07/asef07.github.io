import React from 'react';

import {Box, Stack, Typography} from "@mui/material";

import ServiceFigure from '../assets/service_figure.png';
import {ReactComponent as Indicator} from '../assets/indicator.svg';

const SERVICES = [
    {
        name: 'YouTube Promotion/Management.'
    },
    {
        name: 'Instagram Promotion.'
    },
    {
        name: 'Facebook Promotion.'
    },
    {
        name: 'Facebook Page Creation and Management.'
    },
    {
        name: 'Spotify Promotion.'
    },
    {
        name: 'Soundcloud Promotion.'
    },
    {
        name: 'TikTok Promotion.'
    },
    {
        name: 'Social Media Manager.'
    },
]

const ServiceList = () => {
    return (
        <Stack
            direction={{xs: 'column', sm: 'column', md: 'row'}}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            py={'2rem'}
            sx={{
                background: '#F2FAFF'
            }}
        >
            <Box
                sx={{
                    width: {xs: '100vw', sm: '100vw', md: 'auto'}
                }}
            >
                <img src={ServiceFigure} alt={'service_figure'} style={{width: 'inherit'}}/>
            </Box>
            <Box sx={{pl: {xs: '8px', sm: '8px', md: 0}}}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '36px',
                        fontWeight: 700,
                        letterSpacing: '4px',
                        mb: '1rem'
                    }}
                >
                    All the services I provide:
                </Typography>
                {
                    SERVICES.map((item) =>
                        <Stack direction={'row'} spacing={2} mt={'12px'}>
                            <Indicator style={{minHeight: 27, minWidth: 28}}/>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    letterSpacing: '2px'
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Stack>
                    )
                }
            </Box>
        </Stack>
    );
};

export default ServiceList;