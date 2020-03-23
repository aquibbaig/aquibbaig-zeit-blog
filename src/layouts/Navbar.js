import React from 'react';
import PropTypes from 'prop-types';
import { Mail as MailIcon } from '@material-ui/icons';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Navbar() {
  const title = 'Blog';
  const sections = [
    { title: 'Blog', url: '/' },
    { title: 'Tech', url: '/tech' },
    { title: 'Music', url: '/music' },
    { title: 'Me', url: '/me' },
  ];

  return (
    <React.Fragment>
      <Toolbar style={{ borderBottom: `1px solid black` }}>
        <Link href="mailto:aquibbaig97@gmail.com">
          Mail
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          style={{ flex: 1 }}
        >
          <Link href="/" style={{ color: 'black' }}>{title}</Link>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" 
        style={{ justifyContent: 'center', overflowX: 'auto', }}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            style={{ padding: '10px',
            flexShrink: 0, }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Navbar.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};