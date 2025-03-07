import { useTranslation } from 'react-i18next'
import { Box } from 'grommet/es6/components/Box'
import { Menu } from 'grommet/es6/components/Menu'
import { Text } from 'grommet/es6/components/Text'
import { Language } from 'styles/theme/icons/language/Language'
import { SelectWithIcon } from '../SelectWithIcon'
import { languageLabels, LanguageKey } from '../../../locales/i18n'
import { ButtonExtendedProps } from 'grommet/es6/components/Button'

const languageOptions: { value: LanguageKey; label: string }[] = languageLabels.map(lang => ({
  value: lang[0],
  label: lang[1],
}))

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation()

  if (!i18n.resolvedLanguage) {
    return null
  }

  return (
    <SelectWithIcon
      icon={<Language size="24px" />}
      id="language"
      label={t('language', 'Language')}
      name="language"
      onChange={option => i18n.changeLanguage(option)}
      options={languageOptions}
      value={i18n.resolvedLanguage}
    />
  )
}

export const LanguageMenu = () => {
  const { i18n } = useTranslation()

  if (!i18n.resolvedLanguage) {
    return null
  }

  const languageOptions: ButtonExtendedProps[] = languageLabels.map(([key, label]) => ({
    value: key,
    label: label,
    onClick: () => i18n.changeLanguage(key),
    primary: key === i18n.resolvedLanguage,
  }))
  const selectedLabel = languageOptions.find(lang => lang.value === i18n.resolvedLanguage)?.label

  return (
    <Box
      background={'background-front'}
      justify="end"
      round="5px"
      border={{ color: 'background-front-border', size: 'xsmall' }}
    >
      <Menu
        size="small"
        style={{ border: 0 }}
        dropProps={{
          align: { top: 'bottom', left: 'left' },
          elevation: 'xlarge',
        }}
        items={languageOptions}
        fill
        a11yTitle="Language"
      >
        <Box direction="row" gap="small" pad="small" responsive={false}>
          <Language />
          <Text>{selectedLabel}</Text>
        </Box>
      </Menu>
    </Box>
  )
}
