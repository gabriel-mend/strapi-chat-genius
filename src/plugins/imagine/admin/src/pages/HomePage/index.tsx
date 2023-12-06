/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
import pluginId from '../../pluginId';
import { propmt } from '../../services/api';

const HomePage = () => {
  const [text, setText] = useState('')

  async function handlePrintPrompt() {
    const result = await propmt({ content: text })
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
