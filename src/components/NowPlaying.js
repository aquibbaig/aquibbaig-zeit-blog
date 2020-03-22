import React from 'react';
import ReactPlayer from 'react-player';
import { Grid, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

export default (props) => {
  const { song } = props;
  return (
    <div style={{ flexGrow: 1 }}>
      <Card style={{ maxWidth: '100%' }}>
        <CardActionArea>
          <CardMedia
            height="240"
          >
            <ReactPlayer url={`${song.url}`} style={{ maxWidth: '100%', height: '100%' }} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {song.artist}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {song.track}
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