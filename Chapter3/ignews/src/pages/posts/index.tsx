import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>30 de Março de 2021</time>
            <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae. Quaerat maxime pariatur accusamus totam velit quam, a fugiat eligendi dignissimos asperiores natus quidem provident consequuntur reiciendis, vitae, placeat magnam!</p>
          </a>
          <a>
            <time>30 de Março de 2021</time>
            <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae. Quaerat maxime pariatur accusamus totam velit quam, a fugiat eligendi dignissimos asperiores natus quidem provident consequuntur reiciendis, vitae, placeat magnam!</p>
          </a>
          <a>
            <time>30 de Março de 2021</time>
            <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae. Quaerat maxime pariatur accusamus totam velit quam, a fugiat eligendi dignissimos asperiores natus quidem provident consequuntur reiciendis, vitae, placeat magnam!</p>
          </a>
        </div>
      </main>
    </>
  )
}