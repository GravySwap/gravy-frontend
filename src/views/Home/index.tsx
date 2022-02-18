import React from 'react'
import { PageMeta } from 'components/Layout/Page'
import DividerSectionServices from 'components/DividerSectionServices'
import DividerSectionSwap from 'components/DividerSectionSwap'
import DividerSectionEarn from 'components/DividerSectionEarn'
import DividerSectionGravy from 'components/DividerSectionGravy'
import DividerSectionStart from 'components/DividerSectionStart'
import DividerSectionHero from 'components/DividerSectionHero'

const Home: React.FC = () => {
  return (
    <>
      <PageMeta />
      <DividerSectionHero />
      <DividerSectionServices />
      <DividerSectionSwap />
      <DividerSectionEarn />
      <DividerSectionGravy />
      <DividerSectionStart />
    </>
  )
}

export default Home
