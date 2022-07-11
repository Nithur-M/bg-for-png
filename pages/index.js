import Head from 'next/head'
import {useRouter} from 'next/router'

const Home = () => {
  const router = useRouter();
  const { imgUrl } = router.query;
  return (
    <div>
      <Head>
        <title>Get back png images with background</title>
        <meta name="description" content="Send a PNG image url and get back it with background added" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img style={{ width: '100px', height: '100px', objectFit: 'contain', objectPosition: 'center', backgroundColor: 'white', borderRadius: '50%' }} src={imgUrl} />
    </div>
  )
}

export default Home;