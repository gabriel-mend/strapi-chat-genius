/*
 *
 * SettingsPage
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
import api from '../../api/api';
import Alert from '../../components/Alert';

const SettingsPage = () => {
  const { formatMessage } = useIntl();

  const [apiKey, setApiKey] = React.useState('')
  const [toggle, setToggle] = React.useState(false)

  function handleAddApikey() {
    try {
      if(!apiKey) {
        alert("Preencha o campo de api key!")
        return
      }
      api.postKey(apiKey)
      setToggle(true)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    if(!apiKey) {
     api.getKey().then(({ data }) => {
      setApiKey(data?.key as string);
     })
    }
  }, [])

  return (
    <Layout sidenav>
      {toggle ? <Alert toggle={toggle} setToggle={setToggle} variant='success'>{formatMessage({
          id: getTrad("SettingsPage.Alert.success"),
          defaultMessage: 'Strapi with chatgpt'
        })}</Alert> : <></>}
      <BaseHeaderLayout
        title={formatMessage({
          id: getTrad("SettingsPage.BaseHeaderLayout.title"),
          defaultMessage: 'Strapi with chatgpt'
        })}
        subtitle={formatMessage({
          id: getTrad("SettingsPage.BaseHeaderLayout.subtitle"),
          defaultMessage: 'Make content creation easier with AI.'
        })}
      />
      <ContentLayout>
        <Flex direction="column" alignItems="flex-start" gap="5">
          <Flex alignItems="flex-end" gap="3">
            <TextInput
              label="Api key"
              placeholder={formatMessage({
                id: getTrad("SettingsPage.Input.placeholder"),
                defaultMessage: 'Add your openai apikey'
              })}
              value={apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApiKey(e?.target.value)}
            />
            <Button size="M" onClick={handleAddApikey}>
              {formatMessage({
                id: getTrad("SettingsPage.Button.text"),
                defaultMessage: 'Save'
              })}
            </Button>
          </Flex>
          <Link isExternal href="https://platform.openai.com/api-keys">
            {formatMessage({
              id: getTrad("SettingsPage.link"),
              defaultMessage: 'Where can I find the api key?'
            })}
          </Link>
        </Flex>
      </ContentLayout>
    </Layout>
  );
};

export default SettingsPage;
