import React from 'react'
import { Stack,Button,Checkbox,FormControlLabel,TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { Label } from '@mui/icons-material';

const Contact = () => {
  return (
    <Stack spacing={2} direction='row'>
        
       
          {/* <FormControlLabel
            control={
              <Checkbox
                size='large'
              />
            }
            
            Label="Testing"
          />
          <TextField
            variant='filled'
            type="email"
            label="Email"
            placeholder='test@gmail.com'
            size='large'
            
          /> */}
            <Button
            endIcon={<SaveIcon/>}
              
                style={{fontSize:24}}
                 variant='contained' color='secondary'>
                Hello world
            </Button>
            <Button
            endIcon={<SaveIcon/>}
              
                style={{fontSize:24}}
                 variant='contained' color='secondary'>
                Hello world
            </Button>
            <Button
            endIcon={<SaveIcon/>}
              
                style={{fontSize:24}}
                 variant='contained' color='secondary'>
                Hello world
            </Button>
      
    </Stack>
  )
}

export default Contact