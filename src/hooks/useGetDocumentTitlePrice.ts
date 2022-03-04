import { useEffect } from 'react'
import { useGravyBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const gravyPriceBusd = useGravyBusdPrice()
  useEffect(() => {
    const gravyPriceBusdString = gravyPriceBusd ? gravyPriceBusd.toFixed(2) : ''
    document.title = `Gravy Swap - ${gravyPriceBusdString}`
  }, [gravyPriceBusd])
}
export default useGetDocumentTitlePrice
