import { Paper } from '@mui/material'
import { Box, Stack } from '@mui/system';
import React from 'react';
import shelfBackground from '../shelfs/shelfBackground.jpg';
import shelf from '../shelfs/shelf.png';
import book1 from '../books/Moler/book1.png';
import book2 from '../books/Moler/book2.png';
import book3 from '../books/LopeDeVega/book3.png';

const styles = {
  paperContainer: {
    flexGrow: 1,
    flex: 1,
    padding: 0.1,
    backgroundImage: `url(${shelfBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
};

function MainPage() {
  return (
    <Paper style={styles.paperContainer}>
      <Stack direction={'column'} height={'100vh'} width={'100vw'}>
        <Stack direction={'row'} gap={0} height={'26vh'} mt={'15vh'} mb={'-35vh'} ml={'20vw'}>
          <Box component='img' src={book1} height={'100%'} ></Box>
          <Box component='img' src={book3} height={'100%'} ></Box>
          <Box component='img' src={book2} height={'100%'} ></Box>
        </Stack>
        <Box component='img' src={shelf} zIndex={0} pb={0} height={'45vh'}>
        </Box>
        <Box component='img' src={shelf} zIndex={0} pb={0} height={'45vh'}></Box>
      </Stack>
    </Paper>
  )
}

export default MainPage
