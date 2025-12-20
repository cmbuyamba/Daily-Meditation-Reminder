import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Button,
  makeStyles,
  tokens
} from '@fluentui/react-components';
import { LocalLanguage24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  button: {
    minWidth: '80px',
    color: tokens.colorNeutralForeground1,
  },
});

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const styles = useStyles();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = {
    en: 'English',
    fr: 'Français',
  };

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance="subtle"
          icon={<LocalLanguage24Regular />}
          className={styles.button}
        >
          {languages[i18n.language] || languages.en}
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuItem onClick={() => changeLanguage('en')}>
            English
          </MenuItem>
          <MenuItem onClick={() => changeLanguage('fr')}>
            Français
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export default LanguageSwitcher;
