/**
 *
 * Input
 *
 */

import React from 'react';
import { Flex, TextInput, Button, Loader } from '@strapi/design-system';
import OpenAI from 'openai';
import * as S from './styles';

const Input = () => {
  const [result, setResult] = React.useState('')
  const [apiKey, setApiKey] = React.useState('')
  const [content, setContent] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });

  async function propmtContent(content: string) {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content }],
        model: "gpt-3.5-turbo",
      });


      return completion.choices[0].message.content
    } catch (e) {
      console.log(e)
    }
  }


  async function handlePromptContent() {
    setLoading(true)
    const result = await propmtContent(content)
    setLoading(false)
    setResult(result as string)
    console.log(result)
  }

  React.useEffect(() => {
    if(!apiKey) {
      const local = localStorage.getItem('openai-key')
      setApiKey(local as string);
     }
  }, [])
  return (
    <S.Container alignItems="flex-end" gap="3" direction="column">
      <S.Input
        label="Como posso ajudar?"
        placeholder="Crie um texto para ..."
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
      />
      <S.ResultBox>
        {!loading ? result : <Loader small>Loading content...</Loader>}
      </S.ResultBox>
      <S.ButtonFull onClick={handlePromptContent} size="M">Gerar conteúdo</S.ButtonFull>
    </S.Container>
  )
};

export default Input;
