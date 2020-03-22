import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default (props) => {
  const { songs, setCurrMusic } = props;
  return (
    <div>
      {songs.map(song => (
        <Card key={song.track} style={{ display: 'flex', borderRadius: '0', borderBottom: '1px solid grey' }}>
          <CardMedia
              style={{ width: 151, height: '10vw' }}
              image="/song.png"
              title={`${song.track}`}
          />
          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <CardContent style={{ flex: '1 0 auto', }}>
              <Typography component="h5" variant="h5">
                {song.artist}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {song.track}
              </Typography>
            </CardContent>
            <div style={{ display: 'flex',
                alignItems: 'center',
                paddingLeft: '10',
                paddingBottom: '10', }}>
            <IconButton aria-label="play/pause" onClick={() => setCurrMusic(song)}>
              <PlayArrowIcon style={{ height: 38, width: 38, }} />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}