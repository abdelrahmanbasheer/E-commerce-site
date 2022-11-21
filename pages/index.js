import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import FranchiseIcons from "../components/FranchiseIcons";
import SecondHero from "../components/SecondHero";
import Footer from "../components/Footer";
import Head from "next/head";
export default function Home() {
  return (
  
    <div className="bg-black">
        <Head>
          <title>Canadian Bears</title>
        </Head>
      <div className="bg-hero  bg-no-repeat h-[1000px]">
      <Navbar></Navbar>
      <Hero></Hero>
      </div>
      <FranchiseIcons></FranchiseIcons>
      <SecondHero></SecondHero>
      <Footer></Footer>
    </div>
  )
}
