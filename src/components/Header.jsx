import React from "react";

import {Box, Stack, Typography} from "@mui/material";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {ReactComponent as Logo} from '../assets/logo.svg';

const NAV_BUTTONS = [
    {
        name: 'HOME'
    },
    {
        name: 'Youtube Promotion'
    },
    {
        name: 'Instagram & Facebook Marketing'
    },
    {
        name: 'Spotify & Soundcloud Promotion'
    }
]

const Header = () => {
    return <header style={{background: '#F2FAFF'}}>
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mx={{xs: 0, sm: 0, md: '10rem'}}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#111A45',
                    py: '4px',
                    px: '4rem',
                    borderRadius: '0 0 20px 20px'
                }}
            >
                <Logo/>
            </Box>
            <Stack direction={{xs: 'column', sm: 'column', md: 'row'}} alignItems={'center'}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        mr: {md: '1rem'}
                    }}
                >
                    Contact Us
                </Typography>
                <Stack direction={'row'} spacing={{xs: 0, sm:2, md: 3}}>
                    <WhatsAppIcon sx={{fontSize: '20px', cursor: 'Pointer'}}/>
                    <LinkedInIcon sx={{fontSize: '20px', cursor: 'Pointer'}}/>
                    <TwitterIcon sx={{fontSize: '20px', cursor: 'Pointer'}}/>
                    <ShoppingCartIcon sx={{fontSize: '20px', cursor: 'Pointer'}}/>
                </Stack>
            </Stack>
        </Stack>
        <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            spacing={{xs: 1, sm: 1, md: 0}}
            mx={{xs: 0, sm: 0, md: '10rem'}}
        >
            {
                NAV_BUTTONS.map((item) =>
                    <Typography
                        sx={{
                            p: {xs: 0, sm: '.5rem', md: '1rem'},
                            my: '1rem',
                            fontFamily: 'Poppins',
                            transition: '300ms ease-in-out',
                            textAlign: 'center',
                            '&:hover': {
                                background: '#9FEEFF',
                                cursor: 'Pointer',
                            }
                        }}
                    >
                        {item.name}
                    </Typography>
                )
            }
        </Stack>
    </header>
}

export default Header