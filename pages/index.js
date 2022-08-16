import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lolla e Tore</title>
        <link rel="icon" href="/icons/wedding-day-48.png" />
      </Head>

      <p className="caption">
        <a href="https://paypal.me/moodymood">Paypal Link</a>
      </p>

    </div>
  )
}
