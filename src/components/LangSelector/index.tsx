// region import
import React from 'react'

// contexts
import { useTranslation } from 'contexts/Localization'

// components
import { LangSelector as UIKitLangSelector } from '@gravyswap/uikit'

// configs
import { languageList } from 'config/localization/languages'
// endregion

function LangSelector() {
  const { currentLanguage, setLanguage } = useTranslation()
  return (
    <UIKitLangSelector
      hideLanguage
      buttonScale="md"
      color="textSubtle"
      langs={languageList}
      currentLang={currentLanguage.code}
      setLang={setLanguage}
    />
  )
}

export default LangSelector
