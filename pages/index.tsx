import Layout from '../components/Layout';
import type { NextPageWithLayout } from './_app'
import type {ReactElement} from "react"


const Home: NextPageWithLayout = () => {
  return (
    <div>aaaa</div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home;