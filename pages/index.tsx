import Head from "next/head"
import About from "../components/About"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Services from "../components/Services"

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </>
  )
}

export default Home