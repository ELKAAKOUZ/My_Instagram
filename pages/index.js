import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <div className="sm:grid place-content-center">
      <Head>
        <title>My_Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./instagram_photo.png" />
      </Head>
      <main className="  sm:max-w-md">
        {/* header */}
        <Header />
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
