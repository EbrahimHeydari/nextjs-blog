import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
      </Head>
      <Card>
        <CardHeader>{postData.title}</CardHeader>
        <CardBody dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <CardFooter>
          <Date dateString={postData.date} />
        </CardFooter>
      </Card>
    </Layout>
  )
}

export function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}