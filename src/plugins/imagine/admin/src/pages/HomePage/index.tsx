/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
import pluginId from '../../pluginId';
// import { propmt } from '../../services/api';
import OpenAI from "openai";
import Input from '../../components/Input';

const HomePage = () => {
  const [response, setResponse] = useState('')


  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  });

  async function propmt(content: string) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content }],
      model: "gpt-3.5-turbo",
    });

    setResponse(completion.choices[0].message.content || '')
  }
  const [text, setText] = useState('')

  async function handlePrintPrompt() {
    const result = await propmt(text)
    console.log(result)
  }

  return (
    <div>
      <h1>IMAGINE</h1>
      <input type='text' value={text} onChange={e => setText(e.target.value)}/>
      {response}
      <button onClick={handlePrintPrompt}>Print</button>
    </div>
  );
};

export default HomePage;
