import React from 'react'
import Header from '../Header'
import { Box } from '@mui/material'
import { addListener } from 'process'

const Dashboard = () => {
  return (
    <Box m={'20px'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Header title='Dashboard' subtitle='basic info'/>
        </Box>
    </Box>
  )
}

export default Dashboard