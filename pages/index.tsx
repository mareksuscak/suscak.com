import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Software Engineering — Suscak.com</title>
        <meta name="description" content="Oh hi! I'm Marek. I share my learnings and passion for computer systems." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Oh hi! 👋</h1>

        <p>
          I'm <strong>Marek</strong>, a pragmatic software craftsman on his lifelong learning journey. By day I engineer software systems and build products, by night I engage in the local tech community as a speaker and a mentor. I enjoy reading books on computer science, productivity, building and marketing products and behavioral psychology.
        </p>

        <p>
          I started out as a full-stack developer but gradually narrowed down my focus to front-end which is where I excel. I have an eye for detail and deeply care about the user experience. I enjoy improving engineering processes and helping professionally younger colleagues get up to speed quickly.
        </p>

        <p>
          Thanks to perseverance and my genuine enthusiasm for the field of computer science, I gained a wealth of experience through working on a variety of projects spanning several industries. I am an extremely curious person who needs to understand the big picture before hastily solving the wrong problem. Last but not least I'm a system thinking advocate.
        </p>

        <p>
          According to Meyers-Briggs personality test, I am a well-balanced ENFJ-T type which is said to be very rare forming only around 2% of the world population. My biggest strengths are empathy, charisma and strong self-reflection ability.
        </p>

        <p>
          <em>You can follow me on <a href="https://twitter.com/mareksuscak">Twitter</a>, <a href="https://github.com/mareksuscak">GitHub</a>, <a href="https://gitlab.com/mareksuscak">GitLab</a> or <a href="https://www.linkedin.com/in/mareksuscak/">LinkedIn</a></em>
        </p>
      </main>
    </div>
  )
}

export default Home
