import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Index = () => {
  return (
    <Box
        minHeight={'93vh'}
        display={'flex'}
        flexDirection={['column', 'row']}
        gap={'5vw'}
        mt={[10, 0]}
    >
        <Box
            flex={1}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            position={'relative'}
            gap={'4vh'}
        >
            <Typography
                sx={{
                    fontFamily: 'Pacifico',
                    fontSize: ['40px', '60px']
                }}
            >
                JalgaonPloggers
            </Typography>
            <Typography
                fontFamily={'Montserrat'}
                fontSize={['18px', '25px']}
                textAlign={'center'}
                fontWeight={600}
                mt={2}
            >
            &ldquo;Let&apos;s keep our planet pristine <br/> Join our mission for a cleaner world.&ldquo;
            </Typography>
            <Typography
                textAlign={'center'}
                width={['90vw', '35vw']}
                fontFamily={'Quicksand'}
                fontSize={['15px', '20px']}
                fontWeight={500}
            >
            Our mission is to create a cleaner, more sustainable future by empowering individuals and communities to take action towards better hygiene practices and a cleaner environment.
            </Typography>
            <Box
                display={['none', 'flex']}
            >
            <Image 
                src={'/images/BlueStroke.png'}
                width={300}
                height={25}
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    top: '31%',
                    left: '43%',
                    transform: 'rotate(-5deg)'
                }}
            />
            </Box>

            <Box
                display={['flex', 'none']}
            >
            <Image 
                src={'/images/BlueStroke.png'}
                width={300}
                height={25}
                style={{
                    zIndex: -1,
                    position: 'absolute',
                    top: '12%',
                    left: '2%',
                    transform: 'rotate(-5deg)'
                }}
            />
            </Box>
        </Box>
        <Box
            flex={1}
            display={['none', 'flex']}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Image 
                src={'/images/Main.svg'}
                width={500}
                height={500}
            />
        </Box>
        <Box
            flex={1}
            display={['flex', 'none']}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Image 
                src={'/images/Main.svg'}
                width={250}
                height={250}
            />
        </Box>
    </Box>
  )
}

export default Index
