import { Typography, Stack } from '@mui/material'
import React from 'react'

const InfoText = ({ children, info, sx = {}}: {children: any, info: any, sx?:any}) => {
  return (
    <Stack direction='row' sx={sx}>
        <div style={{width: 5, backgroundColor: 'gray', borderRadius: 10}}/>
        <Stack direction='column'>
            <Typography variant='body2' sx={{mt: 'auto', pl:0.5, color: 'gray'}}>{info}</Typography>
            <Typography variant='h6' sx={{float: 'right', pl: 0.4}}>{children}</Typography>
        </Stack>
    </Stack>
  )
}

export default InfoText