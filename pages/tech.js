import React from 'react';
import BasicLayout from '../src/layouts/BasicLayout';
import { Grid, Typography, Grow, Link, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useState } from 'react';
import { Attachment as AttachmentIcon, Loop as LoopIcon } from '@material-ui/icons';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function CardComponent(device, url, image) {
  return (
    <Card key={device} style={{ display: 'flex', borderRadius: '0', borderBottom: '1px solid grey' }}>
      <CardMedia
          style={{ width: 151, height: '20vh' }}
          image={image}
          title={`${device}`}
      />
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent style={{ flex: '1 0 auto', }}>
          <Typography component="h5" variant="h5">
            {device}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <Link href={url}>
              <AttachmentIcon/>
            </Link>
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default function Tech() {
  const [hiddenItems, showHiddenItems] = useState(true);
  return (
    <BasicLayout>
      {hiddenItems ? (<>
        <Grid container spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '70vh', position: 'absolute' }}>
            <img src="/bagpack.png" onClick={() => showHiddenItems(false)}/>
          <Typography component="h3">What's in my bag?</Typography>
        </Grid>
      </>) : (
        <Grow in={!hiddenItems} {...(!hiddenItems ? { timeout: 1000 } : {})}>
        <div style={{ flexGrow: 1 }}>
          <Grid container spacing={3} direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: '30vh', position: 'absolute' }}>
            <Grid xs={12} sm={3} style={{ borderRadius: '2px' }}>
              {CardComponent('MacBook Pro', 'https://www.apple.com/in/macbook-pro-13/', '/mac.jpeg')}
            </Grid>
            <Grid xs={12} sm={3}>
              {CardComponent('iPhone 11', 'https://www.apple.com/in/iphone-11/', '/iphone.png')}
            </Grid>
            <Grid xs={12} sm={3}>
              {CardComponent('Bose QC 35', 'https://www.boseindia.com/en_in/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html', '/qc.jpeg')}
            </Grid>
            {/* <Grid xs={12} sm={4}>
              {CardComponent('iPhone 11', 'www.apple.in/iPhone', '/js.png')}
            </Grid> */}
            <IconButton onClick={() => showHiddenItems(true)}>
              <LoopIcon/>
            </IconButton>
          </Grid>
        </div>
        </Grow>
      )}
      <style jsx>
        {`
          img {
            border-radius: 50%;
            -webkit-transition: -webkit-transform .8s ease-in-out;
                    transition:         transform .8s ease-in-out;
          }
          img:hover {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }
        `}
      </style>
    </BasicLayout>
  )
}