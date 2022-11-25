import AboutBwaji from "../components/AboutBwaji";
import Categories from "../components/Categories";
import Layout from "../layouts/Default";

export default function Home() {
  return (
    <Layout>
        <Categories/>
        <AboutBwaji/>
    </Layout>
  )
}
