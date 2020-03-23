import React from 'react';
import BasicLayout from '../src/layouts/BasicLayout';
import { Container, Tooltip, Grid, Typography, Link } from '@material-ui/core';
import Router from 'next/router';
import NProgress from 'nprogress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const handles = [
  {
    id: '1',
    title: 'Github',
    url: 'www.github.com/aquibbaig'
  },
  {
    id: '2',
    title: 'Twitter',
    url: 'https://twitter.com/BaigAquib',
  },
  {
    id: '3',
    title: 'LinkedIn',
    url: ''
  }
  // {
  //   id: '2',
  //   title: '',
  //   url: ''
  // }
]

const achievements = [
  {
    id: '1',
    title: 'GSoC 2019',
    url: 'summerofcode.withgoogle.com'
  },
  {
    id: '2',
    title: 'GSSoC 2019',
    url: 'www.gssoc19.com'
  },
  {
    id: '3',
    title: 'GDG Hackfest',
    url: ''
  }
]

const popularRepos = [
  {
    id: '1',
    title: 'Bench Routes',
    url: 'https://github.com/zairza-cetb/bench-routes'
  },
  {
    id: '2',
    title: 'Pbench Dashboard',
    url: 'https://github.com/distributed-system-analysis/pbench-dashboard'
  },
  {
    id: '3',
    title: 'Librecores',
    url: 'https://github.com/aquibbaig/librecores-web'
  },
  {
    id: '4',
    title: 'Mevn-Cli',
    url: 'https://github.com/madlabsinc/mevn-cli'
  }
  // {
  //   title: '',
  //   url: ''
  // }
]

const renderList = (arr) => (
  <List dense style={{ width: '100%', maxWidth: 360, backgroundColor: '#f5f5f5', }}>
      {arr.map(item => {
        return (
          <ListItem key={item.id} button>
          <Link style={{ color: 'black' }}>    
            <ListItemText id={item.id} primary={item.title}/>
          </Link>
          </ListItem>
        );
      })}
  </List>
)

export default function Me() {
  return (
    <BasicLayout>
      <Container maxWidth="sm" style={{ paddingTop: '10vh' }}>
        <Grid container spacing={2}>
          <Grid sm={2}>
            {renderList(handles)}
          </Grid>
          <Grid sm={10} style={{ textAlign: 'justify' }}>
            {/* Section */}
            <Typography gutterBottom variant="h3" style={{ color: '#039be5', textAlign: 'center' }}>
              About Me
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hi, my name is Aquib Baig. I am a 22 year old
              {' '}<Tooltip title="I wish!"><a href="https://en.wikipedia.org/wiki/Front-end_web_development">frontend</a></Tooltip>{' '}
              developer from Bhubaneswar, India.
              Home?<Tooltip title="Home"><a href="http://www.zairza.in"> Zairza.</a></Tooltip>{' '}
              I play football, listen to music, seldom paint and mostly code now
              a days. 
            </Typography>
            <Typography variant="body1" gutterBottom>
              I follow tech quite a lot. I am voracious follower of Bloomberg and WSJ.
              I do not like novels, so please do not suggest one. I didn't quite have the patience
              to read. Guess why? <Tooltip title="There's documentation"><u> Yes. </u></Tooltip>
            </Typography>
            <Typography variant="body1" gutterBottom>
              I am a big Pink Floyd fan. If you don't know what that is hop on to 
              <Tooltip title="Music"><a href="/music"> Music</a></Tooltip>. Apart from
              psychedelic rock, I also listen to soft pop, Indie pop and sometimes heavy metal.
            </Typography>
            {/* Section */}
            <Typography gutterBottom variant="h3" style={{ color: '#039be5', textAlign: 'center', paddingTop: '5vh' }}>
              What I do?
            </Typography>
            <Typography variant="body1" gutterBottom>
              I mostly have worked with Javascript from 3 years now. I mostly work on Reactjs and Nodejs.
              However nothing ever stops me from working my curiosity. I have also worked on Php, Golang,
              Rust, Java and C++.
            </Typography>
            <Typography gutterBottom variant="h4" style={{ color: '#bdbdbd', textAlign: 'left' }}>
              Popular Repositories
            </Typography>
            <Grid>
              {renderList(popularRepos)}
            </Grid>
            {/* Section */}
            <Typography gutterBottom variant="h3" style={{ color: '#039be5', textAlign: 'center', paddingTop: '5vh' }}>
              Why computers?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Okay big question? So, here it goes. The {' '}
              <b>Steve Jobs</b> said, <b>"Everybody in this country should learn how to program a computer because it teaches you how to think"</b>.
              {' '}Making a computer do what you want it to do is a really amazing thing that makes us dive deeper into 
              how <Tooltip title="Westworld?"><u>human</u></Tooltip> systems function in the first place. I always 
              had the interest to create something new, that excites me in a different way. I'd come to that in a bit
              in the <Tooltip title="Home"><u>Zairza</u></Tooltip> section. Coding not only solves the problems
              of the world but also of one's own self. Look around you? Don't you see that everything around you
              is programmable and then and there lies an opportunity. Anyways, the most important thing is that 
              a <b>"Perfectly programmed computer never makes mistakes."</b> Yeah, Just created this line!
            </Typography>
            <Typography gutterBottom variant="h4" style={{ color: '#bdbdbd', textAlign: 'left' }}>
              Achievements
            </Typography>
            <Grid>
              {renderList(achievements)}
            </Grid>
            <Typography variant="body1" gutterBottom style={{ paddingTop: '10vh' }}>
              Thanks for listening to my <Tooltip title="Pratyush Mallick"><u>Ted Talk.</u></Tooltip>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </BasicLayout>
  )
}
