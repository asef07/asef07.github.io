import React from 'react';
import {Linking} from 'react-native';

import {Stack, Typography} from "@mui/material";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import {ReactComponent as Logo} from '../assets/logo.svg';

const Footer = () => {

    const composeEmail = () => {
        Linking.openURL('mailto:muhtadeeasef@gmail.com').catch((error) =>
            console.error('ComposeEmail -> Error', error))
    }

    return (
        <footer style={{ background: '#111A45'}}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                py={'1rem'}
            >
                <Logo/>
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
                    <Stack direction={'row'} spacing={{xs: 2, sm: 2, md: 3}}>
                        <MailOutlineIcon
                            onClick={composeEmail}
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <WhatsAppIcon
                            onClick={() => window.open("https://wa.me/+8801869354944", "_blank")}
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <LinkedInIcon
                            onClick={() => window.open("https://www.linkedin.com/in/muhtadeeasef/", "_blank")}
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <TwitterIcon
                            onClick={() => window.open("https://twitter.com/muhtadeeasef", "_blank")}
                            sx={{
                                fontSize: {xs: '20px', sm: '20px', md: '40px'},
                                cursor: 'Pointer',
                                color: '#FFF'
                            }}
                        />
                        <InstagramIcon
                            onClick={() => window.open("https://www.instagram.com/muhtadeeasef/", "_blank")}
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