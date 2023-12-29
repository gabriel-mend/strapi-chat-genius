/**
 *
 * Input
 *
 */

import React from 'react';
import { Loader, Flex, IconButton } from '@strapi/design-system';
import { Write, Refresh, Collapse, File } from '@strapi/icons';

import * as S from './styles';

import { useIntl } from 'react-intl';
import getTrad from '../../utils/getTrad';
import { usePrompt } from '../../hooks/usePrompt'


const Input =  React.forwardRef(() => {
  const { formatMessage } = useIntl();
  const {
    content,
    result,
    error,
    handleCopyContent,
    handlePromptContent,
    isLoading,
    handlePromptReduceContent,
    setContent
  } = usePrompt()

  return (
    <S.Container alignItems="flex-end" gap="3" direction="column">
      <S.Input
        label={formatMessage({
          id: getTrad("Component.Input.label"),
          defaultMessage: 'How can I help you?'
        })}
        placeholder={formatMessage({
          id: getTrad("Component.Input.placeholder"),
          defaultMessage: 'Create text for ...'
        })}
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)}
        error={error !== "" ? error : false}
      />
      {result && (
        <Flex gap={3}>
          <IconButton
            label={formatMessage({
              id: getTrad("Component.Input.IconButton.Copy"),
              defaultMessage: 'Copy content'
            })}
            icon={<File />}
            onClick={handleCopyContent}
          />
          <IconButton
            label={formatMessage({
              id: getTrad("Component.Input.IconButton.Reduce"),
              defaultMessage: 'Reduce content'
            })}
            icon={<Collapse />}
            onClick={handlePromptReduceContent}
          />
          <IconButton
            label={formatMessage({
              id: getTrad("Component.Input.IconButton.Reset"),
              defaultMessage: 'Regenerate content'
            })}
            icon={<Refresh />}
            onClick={handlePromptContent}
          />
        </Flex>
      )}
      <S.ResultBox>
        {!isLoading ? result : <Loader small>Loading content...</Loader>}
      </S.ResultBox>
      <S.ButtonFull onClick={handlePromptContent} size="M" endIcon={<Write />}>
        {formatMessage({
          id: getTrad("Component.Input.Button.text"),
          defaultMessage: 'Generate content'
        })}
      </S.ButtonFull>
    </S.Container>
  )
});

export default Input;
