/*
 *
 * HomePage
 *
 */

import React from 'react';
import {
  BaseHeaderLayout,
  ContentLayout,
  Layout,
  TextInput,
  Link, Flex,
  Button,
} from '@strapi/design-system';

const HomePage = () => {
  const [apiKey, setApiKey] = React.useState('')

  function handleAddApikey() {
    if(!apiKey) {
      alert("Preencha o campo de api key!")
      return
    }
    localStorage.setItem('openai-key', apiKey)
  }

  React.useEffect(() => {
    if(!apiKey) {
     const local = localStorage.getItem('openai-key')
     setApiKey(local as string);
    }
  }, [])

  return (
    <Layout sidenav>
      <BaseHeaderLayout
        title="Strapi with gpt"
        subtitle="Facilite a criação de conteúdo com IA."
      />
      <ContentLayout>
        <Flex direction="column" alignItems="flex-start" gap="5">
          <Flex alignItems="flex-end" gap="3">
            <TextInput
              label="Api key"
              placeholder="Adicione a sua api da openai"
              value={apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApiKey(e?.target.value)}
            />
            <Button size="M" onClick={handleAddApikey}>Teste</Button>
          </Flex>
          <Link isExternal href="https://platform.openai.com/api-keys">
            Onde posso encontrar a api key?
          </Link>
        </Flex>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
