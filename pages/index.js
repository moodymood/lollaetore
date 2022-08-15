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

      <main>
        <Header title="Lolla e Tore Wedding" />
        <p className="header header--date">
          1 Ottobre 2022
        </p>
        <p className="desc desc--text">
          Ci sposiamo!
        </p>
        <p className="desc desc--link">
          <a href="https://paypal.me/moodymood">Mandaci da qualche parte <img src="/icons/send-94.png"></img></a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
