import styled from "styled-components";
import { Flex, TextInput, Button, Alert as AlertStrapi } from '@strapi/design-system';


export const Container = styled(Flex)`
  & > div {
    width: 100%;
  }

`

export const Input = styled(TextInput)``

export const ButtonFull = styled(Button)`
  width: 100%;
  justify-content: center;
`

export const ResultBox = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: #181826;

  font-size: 16px;
  line-height: 100%;
  color: #fff;
`

export const Alert = styled(AlertStrapi)`
  width: 400px !important;
  position: absolute;
  top: 100px;
  left: 60%;
`


