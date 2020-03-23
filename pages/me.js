import React from 'react';
import BasicLayout from '../src/layouts/BasicLayout';
import { Container } from '@material-ui/core';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Timeline } from 'react-material-timeline';
import { Avatar, Icon } from '@material-ui/core';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const events = [
  {
    title: 'Hello!',
    subheader: 'My name is Aquib Baig.',
    description: (<div>I am a <a href="https://en.wikipedia.org/wiki/Front-end_web_development">frontend developer.</a></div>),
    icon: <Avatar><Icon></Icon></Avatar>,
  },
  {
    title: 'Home',
    subheader: 'Home is a feeling!',
    description: (<span>Home? <a href="http://www.zairza.in">Zairza.</a></span>),
    icon: <Avatar><Icon></Icon></Avatar>,
  }
];

export default function Me() {
  return (
    <BasicLayout>
      <Container maxWidth="md">
        <Timeline events={events}/>
      </Container>
    </BasicLayout>
  )
}