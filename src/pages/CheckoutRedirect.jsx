import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

const URLS = {
  completo: 'https://pay.lowify.com.br/checkout?product_id=eCUU2y',
  basico:   'https://pay.lowify.com.br/checkout.php?product_id=8Sj2aC',
}

const VALUES = { completo: 14.99, basico: 9.99 }
const IDS    = { completo: 'eCUU2y', basico: '8Sj2aC' }

export default function CheckoutRedirect() {
  const [params] = useSearchParams()
  const p = params.get('p') === 'basico' ? 'basico' : 'completo'

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: VALUES[p],
        currency: 'BRL',
        num_items: 1,
        content_ids: [IDS[p]],
      })
    }
    window.location.replace(URLS[p])
  }, [p])

  return (
    <>
      <Analytics />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0038A8' }}>
        <p style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '1rem' }}>Redirecionando…</p>
      </div>
    </>
  )
}
