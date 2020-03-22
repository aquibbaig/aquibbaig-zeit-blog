import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

export default (props) => {
  const { post } = props;
  function truncateSummary(content) {
    return content.slice(0, 100).trimEnd();
  }
  return (
    <div>
      <Card style={{ maxWidth: '100%', }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Latest Post"
            height="340"
            image={`${post.mdDoc.frontmatter.image}.png`}
            title={`${post.mdDoc.frontmatter.title}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Link href={`/blog/${post.slug}`} style={{ color: 'black' }}>
                {post.mdDoc.frontmatter.title}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {truncateSummary(post.mdDoc.content)}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}