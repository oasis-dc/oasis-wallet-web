import React, { useContext } from 'react'
import { Box } from 'grommet/es6/components/Box'
import { Form } from 'grommet/es6/components/Form'
import { FormField } from 'grommet/es6/components/FormField'
import { Text } from 'grommet/es6/components/Text'
import { Select } from 'grommet/es6/components/Select'
import { useTranslation } from 'react-i18next'
import { ParaTimeContent } from '../ParaTimeContent'
import { ParaTimeFormFooter } from '../ParaTimeFormFooter'
import { useParaTimes } from '../useParaTimes'
import { getParaTimeName } from '../getParaTimeName'
import { useParaTimesNavigation } from '../useParaTimesNavigation'
import { ThemeContext } from 'styled-components'
import { ThemeType } from 'grommet/es6/themes'

type ParaTimeOptionProps = {
  label: string
  isEvm?: boolean
}
const ParaTimeOption = ({ label, isEvm }: ParaTimeOptionProps) => {
  const theme = useContext<ThemeType>(ThemeContext)
  const { t } = useTranslation()
  const paddingToMatchPlaceholder = theme.global?.input?.padding

  return (
    <Box direction="row" justify="between" width="240px" pad={paddingToMatchPlaceholder}>
      <span>{label}</span>
      {isEvm && <Text color="lightText">{t('paraTimes.selection.evmc', 'EVMc')}</Text>}
    </Box>
  )
}

export const ParaTimeSelection = () => {
  const { t } = useTranslation()
  const {
    availableParaTimesForSelectedNetwork,
    clearTransactionForm,
    isDepositing,
    setTransactionForm,
    ticker,
    transactionForm,
  } = useParaTimes()
  const { navigateToRecipient } = useParaTimesNavigation()
  const options = availableParaTimesForSelectedNetwork.map(item => ({
    label: <ParaTimeOption label={getParaTimeName(t, item.value)} isEvm={item.isEvm} />,
    value: item.value,
  }))

  return (
    <ParaTimeContent
      description={
        isDepositing
          ? t(
              'paraTimes.selection.depositDescription',
              'Please select which ParaTime you wish to deposit your {{ticker}} to and then click "{{nextButtonLabel}}".',
              {
                ticker,
                nextButtonLabel: t('paraTimes.footer.next', 'Next'),
              },
            )
          : t(
              'paraTimes.selection.withdrawDescription',
              'Please select which ParaTime you wish to withdraw your {{ticker}} from and then click "{{nextButtonLabel}}".',
              {
                ticker,
                nextButtonLabel: t('paraTimes.footer.next', 'Next'),
              },
            )
      }
    >
      <Form
        messages={{ required: t('paraTimes.validation.required', 'Field is required') }}
        onChange={nextValue => setTransactionForm(nextValue)}
        onSubmit={navigateToRecipient}
        value={transactionForm}
      >
        <Box style={{ maxWidth: 'min(100%, 300px)', margin: '0 auto' }}>
          <Box margin={{ bottom: 'medium' }}>
            <FormField name="paraTime" required>
              <Select
                name="paraTime"
                placeholder={t('paraTimes.selection.select', 'Select a ParaTime')}
                labelKey="label"
                valueKey={{ key: 'value', reduce: true }}
                value={transactionForm.paraTime}
                options={options}
              />
            </FormField>
          </Box>
        </Box>

        <ParaTimeFormFooter
          secondaryAction={clearTransactionForm}
          secondaryLabel={t('paraTimes.selection.cancel', 'Cancel transfer')}
          submitButton
          withNotice
        />
      </Form>
    </ParaTimeContent>
  )
}
