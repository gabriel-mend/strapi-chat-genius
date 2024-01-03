import { useEffect, useState } from "react";
import OpenAI from 'openai';
import { useIntl } from 'react-intl';
import getTrad from '../utils/getTrad';
import api from "../api/api";

export function usePrompt () {
  const { formatMessage } = useIntl();
  const [result, setResult] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

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
    const reduceText = formatMessage({
      id: getTrad("Component.Input.Function.Reduce"),
      defaultMessage: ' Reduce this content with fewer lines.'
    })

    const prompt = await propmtContent(result.concat(reduceText as string))
    setIsLoading(false)
    setResult(prompt as string)
  }

  function handleCopyContent() {
    navigator.clipboard.writeText(result)
  }

  useEffect(() => {
    if(!apiKey) {
      api.getKey().then(({ data }) => {
        setApiKey(data?.key as string);
       })
     }
  }, [])

  return {
    result,
    content,
    handleCopyContent,
    handlePromptContent,
    handlePromptReduceContent,
    isLoading,
    error,
    setContent
  }
}
