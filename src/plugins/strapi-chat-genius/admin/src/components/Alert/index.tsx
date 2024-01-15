import {
  Box,
  Alert as AlertComponent
} from '@strapi/design-system';
import { Dispatch, ReactNode, useEffect } from 'react';

interface AlertProps {
  toggle: boolean;
  variant: "success" | "warning" | "danger"
  setToggle: Dispatch<boolean>
  children: ReactNode
}

const Alert = ({ toggle, variant, setToggle, children }: AlertProps) => {

  useEffect(() => {
    setTimeout(() => {
      setToggle(false)
    }, 1000);
  }, [toggle])
  return (
    <Box style={{
      width: 400,
      margin: '0 auto',
      paddingTop: '48px',
      position: 'absolute',
      left: '50%'
    }}>
      <AlertComponent closeLabel="Close alert" onClose={() => setToggle(false)}  variant={variant}>
        {children}
      </AlertComponent>
    </Box>
  )
}

export default Alert
