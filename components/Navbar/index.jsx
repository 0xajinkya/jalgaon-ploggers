import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Typography } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';

const Index = () => {

    const [tab, setTab] = useState('Home');

  return (
    <Box
      position={'relative'}
      display={'flex'}
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
                        backgroundColor:  tab === 'Home' ? '#6C63FF' : 'transparent',
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
                        backgroundColor:  tab === 'About' ? '#6C63FF' : 'transparent',
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
                        backgroundColor:  tab === 'Drives' ? '#6C63FF' : 'transparent',
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
                        backgroundColor:  tab === 'Events' ? '#6C63FF' : 'transparent',
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
                        backgroundColor:  tab === 'Blogs' ? '#6C63FF' : 'transparent',
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
  )
}

export default Index
