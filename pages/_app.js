import Script from "next/script";
import Head from "next/head";
//import '../styles/navbar.modules.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"crossOrigin="anonymous"/>
        <script src="https://kit.fontawesome.com/7c23ca5550.js" crossorigin="anonymous"></script>
      </Head>
      <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      <Component {...pageProps} />
    </>)
     
}
