import { useState, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Box } from 'grommet/es6/components/Box'
import { Button } from 'grommet/es6/components/Button'
import { Inbox } from 'grommet-icons/es6/icons/Inbox'
import { selectContactsList } from 'app/state/contacts/selectors'
import { selectUnlockedStatus } from 'app/state/selectUnlockedStatus'
import { ContactAccount } from './ContactAccount'
import { AddContact } from './AddContact'
import { ScrollableContainer } from '../ScrollableContainer'

type ContactsListEmptyStateProps = {
  children: ReactNode
}

const ContactsListEmptyState = ({ children }: ContactsListEmptyStateProps) => (
  <Box flex="grow" gap="medium" align="center" pad={{ top: 'large' }}>
    <Inbox size="36px" />
    <Box flex="grow" pad="large">
      {children}
    </Box>
  </Box>
)

interface ContactsProps {
  closeHandler: () => any
}

export const Contacts = ({ closeHandler }: ContactsProps) => {
  const { t } = useTranslation()
  const [layerVisibility, setLayerVisibility] = useState(false)
  const contacts = useSelector(selectContactsList)
  const unlockedStatus = useSelector(selectUnlockedStatus)
  const isAvailable = unlockedStatus === 'unlockedProfile'
  const navigate = useNavigate()

  if (!isAvailable) {
    return (
      <ContactsListEmptyState>
        <Box style={{ display: 'block' }}>
          <Trans
            i18nKey="toolbar.contacts.notAvailable"
            t={t}
            components={{
              OpenWalletButton: (
                <Button
                  color="link"
                  onClick={() => {
                    closeHandler()
                    navigate('/open-wallet')
                  }}
                />
              ),
            }}
            defaults="To start adding contacts create a profile while <OpenWalletButton>opening a wallet</OpenWalletButton>."
          />
        </Box>
      </ContactsListEmptyState>
    )
  }

  return (
    <>
      <Box flex="grow" justify="between" gap="medium">
        {!contacts.length && (
          <ContactsListEmptyState>
            {t('toolbar.contacts.emptyList', 'You have no contacts yet.')}
          </ContactsListEmptyState>
        )}
        {!!contacts.length && (
          <ScrollableContainer>
            {contacts.map(contact => (
              <ContactAccount key={contact.address} contact={contact} />
            ))}
          </ScrollableContainer>
        )}
        <Box align="end">
          <Button
            primary
            label={t('toolbar.contacts.add', 'Add contact')}
            onClick={() => setLayerVisibility(true)}
          />
        </Box>
      </Box>
      {layerVisibility && <AddContact setLayerVisibility={setLayerVisibility} />}
    </>
  )
}
