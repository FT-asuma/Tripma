import React from 'react'
import styles from './utils.module.css'
import {Button as Submitter} from '@mui/material';
export const Button = ({children, value, setter}: {
    children: string
    value: boolean
    setter: Function
}) => {
  return (
    <Submitter onClick={()=> {
      setter(!value)
    }} className={styles.button}>
        {children}
    </Submitter>
  )
}
