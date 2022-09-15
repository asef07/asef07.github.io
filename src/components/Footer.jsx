import React from 'react';

import {Stack, Typography} from "@mui/material";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {ReactComponent as Logo} from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer style={{ background: '#111A45'}}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                py={'1rem'}
            >
                <Logo />
                <Stack direction={{xs: 'column', sm: 'row', md: 'row'}} alignItems={'center'}>
                    <Typography
                        sx={{
                            color: '#FFF',
                            fontFamily: 'Poppins',
                            fontSize: {xs: '20px', sm: '20px', md: '25px'},
                            fontWeight: 500,
                            textTransform: 'Uppercase',
                            letterSpacing: '4px',
                            mr: {xs: 0, sm: '2rem', md: '2rem'}
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Stack direction={'row'} spacing={{xs: 2, sm:2, md: 3}}>
                        <MailOutlineIcon
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <WhatsAppIcon
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <LinkedInIcon
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <TwitterIcon
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <ShoppingCartIcon
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </footer>
    );
};

export default Footer;