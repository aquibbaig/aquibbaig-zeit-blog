import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import BasicLayout from '../src/layouts/BasicLayout';
import NowPlaying from '../src/components/NowPlaying';
import AllSongs from '../src/components/AllSongs';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const songsList = [
  {
    artist: 'Pink Floyd',
    track: 'Another Brick in the wall (Part 2)',
    description: 'Pink Floyd were an English rock band formed in London in 1965. Gaining a following as a psychedelic rock group, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre. They are one of the most commercially successful and influential bands in popular music history.',
    url: 'https://www.youtube.com/watch?v=HrxX9TBj2zY'
  },
  {
    artist: 'Pink Floyd',
    track: 'Shine On You Crazy Diamond (Full Length: Parts I - IX)',
    url: 'https://www.youtube.com/watch?v=8UXircX3VdM',
    description: 'Pink Floyd'
  },
  {
    artist: 'Pink Floyd',
    track: 'Time',
    url: 'https://www.youtube.com/watch?v=lke-uABclNk',
    description: 'Pink Floyd'
  }
]

const Music = () => {
  const [currMusic, setCurrMusic] = useState(songsList[0]);
  return (
    <BasicLayout>
      <Typography>
        *All music are imported from YouTube
        with the help of <a href="https://github.com/CookPete/react-player">React-player</a>.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <NowPlaying song={currMusic}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AllSongs setCurrMusic={setCurrMusic} songs={songsList.filter(item => item !== currMusic)}/>
        </Grid>
      </Grid>
    </BasicLayout>
  )
}

export default Music;