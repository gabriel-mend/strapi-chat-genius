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
import { useIntl } from 'react-intl';
import getTrad from '../../utils/getTrad';

const HomePage = () => {
  const { formatMessage } = useIntl();

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
        title={formatMessage({
          id: getTrad("Homepage.BaseHeaderLayout.title"),
          defaultMessage: 'Strapi with chatgpt'
        })}
        subtitle={formatMessage({
          id: getTrad("Homepage.BaseHeaderLayout.subtitle"),
          defaultMessage: 'Make content creation easier with AI.'
        })}
      />
      <ContentLayout>
        <Flex direction="column" alignItems="flex-start" gap="5">
          <Flex alignItems="flex-end" gap="3">
            <TextInput
              label="Api key"
              placeholder={formatMessage({
                id: getTrad("Homepage.Input.placeholder"),
                defaultMessage: 'Add your openai apikey'
              })}
              value={apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApiKey(e?.target.value)}
            />
            <Button size="M" onClick={handleAddApikey}>
              {formatMessage({
                id: getTrad("Homepage.Button.text"),
                defaultMessage: 'Save'
              })}
            </Button>
          </Flex>
          <Link isExternal href="https://platform.openai.com/api-keys">
            {formatMessage({
              id: getTrad("Homepage.link"),
              defaultMessage: 'Where can I find the api key?'
            })}
          </Link>
        </Flex>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
