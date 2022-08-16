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

      <div className="caption">
        <div class="title">
          <span class="title__names">Lolla & Salvatore</span>
          <span class="title__date">01 10 2022</span>
        </div>
        <div class="main">
          <div>
            Ciao Amici,
            <br />
            siamo felici di condividere con voi la nostra gioia.
          </div>
          <div>Non abbiamo una lista nozze, ma se vi va potete mandarci da qualche parte in giro per il mondo.</div>
        </div>
        <div class="footer"><a href="https://paypal.me/moodymood">Paypal Link</a></div>

      </div>

    </div>
  )
}
