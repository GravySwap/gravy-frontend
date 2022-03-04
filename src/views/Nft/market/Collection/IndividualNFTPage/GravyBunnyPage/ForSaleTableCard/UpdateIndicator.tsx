import React, { useEffect, useState } from 'react'
import { Flex, useTooltip } from '@gravyswap/uikit'
import { useLoadingState } from 'state/nftMarket/hooks'
import { useTranslation } from 'contexts/Localization'
import CountdownCircle from './CountdownCircle'

const UpdateIndicator = () => {
  const { t } = useTranslation()
  const [secondsRemaining, setSecondsRemaining] = useState(10)
  const { isUpdatingGravyBunnies: isFetchingMoreGravyBunnies } = useLoadingState()
  const { tooltip, tooltipVisible, targetRef } = useTooltip(t('Items in the table update every 10 seconds'), {
    placement: 'auto',
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (!isFetchingMoreGravyBunnies) {
      setSecondsRemaining(10)
    }
  }, [isFetchingMoreGravyBunnies])

  return (
    <Flex justifyContent="center" ref={targetRef}>
      <CountdownCircle secondsRemaining={secondsRemaining} isUpdating={isFetchingMoreGravyBunnies} />
      {tooltipVisible && tooltip}
    </Flex>
  )
}

export default UpdateIndicator
