import Head from "next/head"
import Link from "next/link"
import { Button } from "reactstrap"
import styles from '../styles/404.module.css'

export default function Custome404() {
  return (
    <>
      <Head>
        <title>Page not found!</title>
      </Head>
      <div className={styles.error__container}>
        <h2>Error 404!</h2>
        <p>the Page your looking for, not found!</p>
        <Link href='/'>
          <Button color="primary">Back to home</Button>
        </Link>
      </div>
    </>
  )
}