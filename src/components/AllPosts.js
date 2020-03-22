import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

export default (props) => {
  const { posts } = props;
  function truncateSummary(content) {
    return content.slice(0, 100).trimEnd();
  }

  return (
    <div>
      {posts.map((item, index) => (
        index !== 0 ? (
          <Card style={{ display: 'flex', borderRadius: '0', borderBottom: '1px solid grey' }}>
            <CardMedia
                style={{ width: 151, height: '10vw' }}
                image={`${item.mdDoc.frontmatter.image}.png`}
                title="Live from space album cover"
              />
            <div style={{ display: 'flex', flexDirection: 'column', }}>
              <CardContent style={{ flex: '1 0 auto', }}>
                <Typography component="h5" variant="h5">
                <Link href={`/blog/${item.slug}`} style={{ color: 'black' }}>
                  {item.mdDoc.frontmatter.title}
                </Link>
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {truncateSummary(item.mdDoc.content)}...
                </Typography>
              </CardContent>
              {/* <div style={{ display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '10',
                  paddingBottom: '10', }}>
                <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon style={{ height: 38, width: 38, }} />
                </IconButton>
                <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton>
              </div> */}
            </div>
          </Card>
        ) : (
          <></>
        ) 
      ))}
    </div>
  )
}