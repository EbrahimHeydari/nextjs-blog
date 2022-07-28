import Head from 'next/head'
import Link from 'next/link'
import { Card, CardHeader, CardBody, Button, CardFooter } from 'reactstrap'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'

export default function Home({ postsData }) {
  const router = useRouter()

  if (router.isFallback)
    return <div style={{ margin: 10 }}>Loading...</div>

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A React Developer</p>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <Card className={utilStyles.listItem} key={id}>
              <CardHeader>
                {title}
              </CardHeader>
              <CardBody>
                {id}
                <br />
                {date}
              </CardBody>
              <CardFooter>
                <Link href='posts/[id]' as={`posts/${id}`}>
                  <Button color='secondary'>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const postsData = getSortedPostsData()

  return {
    props: {
      postsData,
    },
  }
}