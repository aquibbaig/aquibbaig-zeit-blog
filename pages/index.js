import Head from 'next/head';
import BasicLayout from '../src/layouts/BasicLayout';
import matter from 'gray-matter';

const Home = (props) => {
  return (
    <BasicLayout>
      <div className="container">
        <Head>
          <title>Blog | aquibbaig</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Content */}
        <main>
          App
        </main>
        {/* Footer */}
        <footer>
          <a
            href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
          </a>
        </footer>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </BasicLayout>
  )
}

export async function getServerSideProps(context) {
  // gets all .md files
  const posts = (context => {
    // grab all keys
    const keys = context.keys();
    // grabs the values
    const values = keys.map(context);
    // go through each file
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      const mdDoc = {
        content: document.content,
        frontmatter: document.data,
      }
      // return the .md content & pretty slug
      return {
        mdDoc,
        slug,
      }
    })
    // return all the posts
    return data;
  })(require.context('../posts', true, /\.md$/));
  return {
    props: {
      allBlogs: posts
    }
  }
}

export default Home
