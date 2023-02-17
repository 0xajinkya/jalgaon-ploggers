import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Index = () => {
  return (
    <Box
        height={'93vh'}
        display={'flex'}
        flexDirection={'row'}
        gap={'5vw'}
    >
        <Box
            flex={1}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            position={'relative'}
            gap={'3vh'}
        >
            <Typography
                sx={{
                    fontFamily: 'Pacifico',
                    fontSize: '50px'
                }}
            >
                JalgaonPloggers
            </Typography>
            <Typography
                fontFamily={'Montserrat'}
                fontSize={'20px'}
                textAlign={'center'}
                fontWeight={600}
                mt={2}
            >
            &ldquo;Let&apos;s keep our planet pristine <br/> Join our mission for a cleaner world.&ldquo;
            </Typography>
            <Typography
                textAlign={'center'}
                width={'35vw'}
                fontFamily={'Quicksand'}
                fontSize={'18px'}
                fontWeight={500}
            >
            Our mission is to create a cleaner, more sustainable future by empowering individuals and communities to take action towards better hygiene practices and a cleaner environment.
            </Typography>
            <Image 
                src={'/images/BlueStroke.png'}
                width={300}
                height={50}
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    top: '37%',
                    left: '38%',
                    transform: 'rotate(-5deg)'
                }}
            />
        </Box>
        <Box
            flex={1}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Image 
                src={'/images/Main.svg'}
                width={400}
                height={400}
            />
        </Box>
    </Box>
  )
}

export default Index
