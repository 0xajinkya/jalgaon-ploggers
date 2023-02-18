import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Typography, AppBar, Toolbar, Drawer, IconButton, Slide } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Apps from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AcUnit, CloseOutlined, MoreVert } from '@mui/icons-material'
import GrainIcon from '@mui/icons-material/Grain';


const Index = () => {

    const [tab, setTab] = useState('Home');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Box
                position={'relative'}
                display={['none', 'flex']}
                flexDirection={'row-reverse'}
                justifyContent={'space-between'}
                height={'7vh'}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'2vw'}
                >
                    <Button
                        sx={{
                            color: tab === 'Home' ? 'white' : '#6C63FF',
                            border: tab === 'Home' ? '1px solid #6C63FF' : '1px solid transparent',
                            borderRadius: '30px',
                            backgroundColor: tab === 'Home' ? '#6C63FF' : 'transparent',
                            paddingX: '20px',
                            ":hover": {
                                border: '1px solid #6C63FF',
                                backgroundColor: tab === 'Home' ? '#6C63FF' : 'transparent',
                                color: tab === 'Home' ? 'white' : '#6C63FF'
                            }
                        }}
                        onClick={() => setTab('Home')}
                    >
                        Home
                    </Button>
                    <Button
                        sx={{
                            color: tab === 'About' ? 'white' : '#6C63FF',
                            border: tab === 'About' ? '1px solid #6C63FF' : '1px solid transparent',
                            borderRadius: '30px',
                            backgroundColor: tab === 'About' ? '#6C63FF' : 'transparent',
                            paddingX: '20px',
                            ":hover": {
                                border: '1px solid #6C63FF',
                                backgroundColor: tab === 'About' ? '#6C63FF' : 'transparent',
                                color: tab === 'About' ? 'white' : '#6C63FF'
                            }
                        }}
                        onClick={() => setTab('About')}
                    >
                        About
                    </Button>
                    <Button
                        sx={{
                            color: tab === 'Drives' ? 'white' : '#6C63FF',
                            border: tab === 'Drives' ? '1px solid #6C63FF' : '1px solid transparent',
                            borderRadius: '30px',
                            backgroundColor: tab === 'Drives' ? '#6C63FF' : 'transparent',
                            paddingX: '20px',
                            ":hover": {
                                border: '1px solid #6C63FF',
                                backgroundColor: tab === 'Drives' ? '#6C63FF' : 'transparent',
                                color: tab === 'Drives' ? 'white' : '#6C63FF'
                            }
                        }}
                        onClick={() => setTab('Drives')}
                    >
                        Drives
                    </Button>
                    <Button
                        sx={{
                            color: tab === 'Events' ? 'white' : '#6C63FF',
                            border: tab === 'Events' ? '1px solid #6C63FF' : '1px solid transparent',
                            borderRadius: '30px',
                            backgroundColor: tab === 'Events' ? '#6C63FF' : 'transparent',
                            paddingX: '20px',
                            ":hover": {
                                border: '1px solid #6C63FF',
                                backgroundColor: tab === 'Events' ? '#6C63FF' : 'transparent',
                                color: tab === 'Events' ? 'white' : '#6C63FF'
                            }
                        }}
                        onClick={() => setTab('Events')}
                    >
                        Events
                    </Button>
                    <Button
                        sx={{
                            color: tab === 'Blogs' ? 'white' : '#6C63FF',
                            border: tab === 'Blogs' ? '1px solid #6C63FF' : '1px solid transparent',
                            borderRadius: '30px',
                            backgroundColor: tab === 'Blogs' ? '#6C63FF' : 'transparent',
                            paddingX: '20px',
                            ":hover": {
                                border: '1px solid #6C63FF',
                                backgroundColor: tab === 'Blogs' ? '#6C63FF' : 'transparent',
                                color: tab === 'Blogs' ? 'white' : '#6C63FF'
                            }
                        }}
                        onClick={() => setTab('Blogs')}
                    >
                        Blogs
                    </Button>
                </Box>
                <Typography
                    sx={{
                        fontFamily: 'Pacifico',
                        fontSize: '35px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    JP
                    <BoltIcon
                        sx={{
                            fontSize: '40px',
                            color: '#6C63FF',
                            mt: 0.3
                        }}
                    />
                </Typography>
            </Box>

            <Box
                display={['flex', 'flex', 'none']}
            >
                <AppBar
                    sx={{
                        // paddingX: '20px',
                        boxShadow: '0.1px 0.2px 5px black',
                    }}
                >
                    <Toolbar
                        sx={{
                            width: '100vw',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Pacifico',
                                fontSize: '35px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            JP
                            <BoltIcon
                                sx={{
                                    fontSize: '40px',
                                    color: 'white',
                                    mt: 0.3
                                }}
                            />
                        </Typography>

                        <IconButton
                            size='large'
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            sx={{
                                marginRight: '5vw'
                            }}
                        >
                            <GrainIcon
                                sx={{
                                    fontSize: ['30px', '30px'],
                                }}
                            />
                        </IconButton>

                        <Drawer
                            id="basic-menu"
                            anchorEl={anchorEl}
                            TransitionComponent={Slide}
                            anchor={'right'}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{
                                backgroundColor: 'transparent!important',
                                backdropFilter: 'blur(2px)!important',
                            }}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                minWidth={['70vw', '50vw']}
                                justifyContent={'space-between'}
                                paddingTop={'15px'}
                                paddingBottom='20px'
                                maxHeight='100vh'
                                height={'100vh'}
                            >
                                <Box
                                    display={'flex'}
                                    flexDirection={'column'}
                                    gap='20px'
                                // flexGrow={1}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingX: '20px',
                                            marginTop: '-8px',
                                        }}
                                    >
                                        <Box
                                            visibility={'hidden'}
                                        >

                                        </Box>
                                        <IconButton
                                            sx={{
                                                zIndex: '999'
                                            }}
                                            onClick={handleClose}
                                        >
                                            <CloseOutlined
                                                sx={{
                                                    color: 'purple',
                                                    fontSize: '30px'
                                                }}
                                            />
                                        </IconButton>
                                    </Box>
                                    <Button
                                        title='Home'
                                        onClick={() => setTab('Home')}
                                        sx={{
                                            paddingY: '10px',
                                            fontSize: '20px',
                                            color: '#6C63FF', fontFamily: 'Quicksand'
                                        }}
                                    >
                                        Home
                                    </Button>

                                    <Button
                                        title='About'
                                        onClick={() => setTab('About')}
                                        sx={{
                                            paddingY: '10px',
                                            fontSize: '20px',
                                            color: '#6C63FF', fontFamily: 'Quicksand'
                                        }}
                                    >
                                        About
                                    </Button>
                                    <Button
                                        title='Events'
                                        onClick={() => setTab('Events')}
                                        sx={{
                                            paddingY: '10px',
                                            fontSize: '20px',
                                            color: '#6C63FF', fontFamily: 'Quicksand'
                                        }}
                                    >
                                        Events
                                    </Button>
                                    <Button
                                        title='Drives'
                                        onClick={() => setTab('Drives')}
                                        sx={{
                                            paddingY: '10px',
                                            fontSize: '20px',
                                            color: '#6C63FF', fontFamily: 'Quicksand'
                                        }}
                                    >
                                        Drives
                                    </Button>

                                    <Button
                                        title='Join'
                                        sx={{
                                            paddingY: '10px',
                                            fontSize: '20px',
                                            color: '#6C63FF', fontFamily: 'Quicksand'
                                        }}
                                    >
                                        Join
                                    </Button>
                                </Box>
                                <Box
                                    width={'100%'}
                                    display='flex'
                                    flexDirection={'row'}
                                    justifyContent={'space-evenly'}
                                >
                                    <Link
                                        href={'https://instagram.com/bitlordsofficial'}
                                        target="_blank"
                                        rel='noreferrer noopener'
                                    >
                                        <IconButton>
                                            <InstagramIcon
                                                sx={{
                                                    fontSize: '35px',
                                                    color: '#E75480'
                                                }}
                                            />
                                        </IconButton>
                                    </Link>

                                    <Link
                                        href={'https://github.com/bitlordsofficial'}
                                        target="_blank"
                                        rel='noreferrer noopener'
                                    >
                                        <IconButton>
                                            <GitHubIcon
                                                sx={{
                                                    fontSize: '35px',
                                                    color: 'black'
                                                }}
                                            />
                                        </IconButton>
                                    </Link>

                                    <Link
                                        href={'https://linkedin.com/in/bitlordsofficial'}
                                        target="_blank"
                                        rel='noreferrer noopener'
                                    >
                                        <IconButton>
                                            <LinkedInIcon
                                                sx={{
                                                    fontSize: '35px',
                                                    color: 'darkblue'
                                                }}
                                            />
                                        </IconButton>
                                    </Link>
                                    <Link
                                        href={'https://twitter.com/in/bitlordsoff'}
                                        target="_blank"
                                        rel='noreferrer noopener'
                                    >
                                        <IconButton>
                                            <TwitterIcon
                                                sx={{
                                                    fontSize: '35px',
                                                    // color: '#50D9D7'
                                                    color: '#1DA1F2'
                                                }}
                                            />
                                        </IconButton>
                                    </Link>
                                </Box>
                            </Box>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Index
