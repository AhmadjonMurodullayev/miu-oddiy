import React from 'react'
import { SorchInputWrapper } from './style'
import { InputAdornment, TextField } from '@mui/material'
import SorchIcon from '../../../assets/icons/sorch-icon'

export default function SorchInputs({onChange}) {
  return (
    <SorchInputWrapper>
    <TextField
    onChange={onChange}
    placeholder="Поиск по товарам"
          fullWidth
          variant="filled"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SorchIcon/>
                </InputAdornment>
              ),
            },
          }}
        />
    </SorchInputWrapper>
  )
}
