/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
import pluginId from '../../pluginId';
// import { propmt } from '../../services/api';
import OpenAI from "openai";

const HomePage = () => {



  const openai = new OpenAI({
    apiKey: '',
    dangerouslyAllowBrowser: true
  });

  async function propmt(content: string) {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0]
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
      <button onClick={handlePrintPrompt}>Print</button>
    </div>
  );
};

export default HomePage;
