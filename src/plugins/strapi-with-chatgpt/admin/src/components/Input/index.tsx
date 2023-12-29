/**
 *
 * Input
 *
 */

import React from 'react';
import { Loader, Flex, IconButton } from '@strapi/design-system';
import OpenAI from 'openai';
import * as S from './styles';
import { File } from '@strapi/icons';
import SvgCollapse from '@strapi/icons/Collapse.js';
import SvgRefresh from '@strapi/icons/Refresh.js';
import { Write } from '@strapi/icons';

const Input = () => {
  const [result, setResult] = React.useState('')
  const [apiKey, setApiKey] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')

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
      setError('')
      return completion.choices[0].message.content
    } catch (e: any) {
      setError(e.error.message as string)
    }
  }

  async function handlePromptContent() {
    setIsLoading(true)
    const prompt = await propmtContent(content)
    setIsLoading(false)
    setResult(prompt as string)
  }

  async function handlePromptReduceContent() {
    setIsLoading(true)
    const prompt = await propmtContent(result.concat(" Reduza esse conteúdo com menos quantidade de linhas."))
    setIsLoading(false)
    setResult(prompt as string)
  }

  function handleCopyContent() {
    navigator.clipboard.writeText(result)
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
        error={error !== "" ? error : false}
      />
      {result && (
        <Flex gap={3}>
          <IconButton
            label="Copiar texto"
            icon={<File />}
            onClick={handleCopyContent}
          />
          <IconButton
            label="Reduzir texto"
            icon={<SvgCollapse />}
            onClick={handlePromptReduceContent}
          />
          <IconButton
            label="Gerar novamente o conteúdo"
            icon={<SvgRefresh />}
            onClick={handlePromptContent}
          />
        </Flex>
      )}
      <S.ResultBox>
        {!isLoading ? result : <Loader small>Loading content...</Loader>}
      </S.ResultBox>
      <S.ButtonFull onClick={handlePromptContent} size="M" endIcon={<Write />}>Gerar conteúdo</S.ButtonFull>
    </S.Container>
  )
};

export default Input;
