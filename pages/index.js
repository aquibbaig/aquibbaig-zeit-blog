import Head from 'next/head';
import BasicLayout from '../src/layouts/BasicLayout';
import matter from 'gray-matter';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Row, Card, CardActionArea, CardMedia, CardContent, Typography, Link } from '@material-ui/core';

const Home = (props) => {
  const allPosts = props.allBlogPosts;
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  return (
    <BasicLayout>
      <div className="container">
        <Head>
          <title>Blog | aquibbaig</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Content */}
        <main>
        <Grid container spacing={3} style={{ height: '30vw' }}>
          <Grid item xs={12} sm={6}>
            <Card className="cardroot" style={{ height: '30vw' }}>
              <Typography style={{ color: 'grey' }} className="category">{allPosts[0].mdDoc.frontmatter.category}</Typography>
              <CardActionArea>
                <CardMedia
                  className="cardmedia"
                  title="Latest Post"
                >
                  <img src="/gsoc.png" />
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link style={{ color: 'black' }} href={`/blog/${allPosts[0].slug}`}>{allPosts[0].mdDoc.frontmatter.title}</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {truncateSummary(allPosts[0].mdDoc.content)}
                </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} style={{ height: '31vw', overflowY: 'scroll' }}>
            {allPosts.map((item, index) => (
              index !== 0 ? (
                <Card style={{ paddingBottom: '5px' }}>
                  <Typography style={{ color: 'grey' }} className="category">{item.mdDoc.frontmatter.category}</Typography>
                  <Card key={index}>
                    <CardMedia
                      className="cardmedia"
                      title="Latest Post">
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <Link style={{ color: 'black' }} href={`/blog/${item.slug}`}>{item.mdDoc.frontmatter.title}</Link>
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {truncateSummary(item.mdDoc.content)}
                      </Typography>
                      </CardContent>
                  </Card>
                </Card>
              ) : (
                <></>
              )
            ))}
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
            Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
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
