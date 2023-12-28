import styled from "styled-components";
import { Flex, TextInput, Button } from '@strapi/design-system';


export const Container = styled(Flex)`
  & > div {
    width: 100%;
  }

`

export const Input = styled(TextInput)``

export const ButtonFull = styled(Button)`
  width: 100%;
  text-align: center;
`

export const ResultBox = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 24px;

  border-radius: 8px;
  background-color: #181826;

  font-size: 16px;
  line-height: 100%;
  color: #fff;
`
