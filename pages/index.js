import Head from 'next/head';
import BasicLayout from '../src/layouts/BasicLayout';
import AllBlogPosts from '../src/components/AllPosts';
import LatestPost from '../src/components/LatestPost';
import matter from 'gray-matter';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const Home = (props) => {
  const allPosts = props.allBlogPosts;
  return (
    <BasicLayout>
      <div className="container">
        <Head>
          <title>Blog | aquibbaig</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Content */}
        <main>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <LatestPost post={allPosts[0]}/>
          </Grid>
          {/* All Posts */}
          <Grid item xs={12} sm={6} style={{ height: '35vw', overflowY: 'auto' }} className="second-grid">
            <Typography style={{ paddingLeft: '30px' }}>ALL POSTS</Typography>
            <AllBlogPosts posts={allPosts}/>
          </Grid>
        </Grid>
        </main>
        {/* Footer */}
        <footer>
          <a
            href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog by <img src="/zeit.svg" alt="Aquib Baig" />
          </a>
        </footer>

        <style jsx>{`
          .container {
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
          }

          .paper: {
            padding: 10px;
            text-align: 'center';
          }

          .cardroot {
            height: 'auto',
            max-width: '100%',
          }

          main {
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

          .link {
            color: black;
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

            .second-grid {
              font-size: 11px;
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
        ...document.data.date && { date: Date.parse(document.data.date) },
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
  posts.sort(function(a, b){
    return new Date(b.mdDoc.date) - new Date(a.mdDoc.date);
  });
  return {
    props: {
      allBlogPosts: posts
    }
  }
}

export default Home
