import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { CssBaseline, Container, Typography } from '@material-ui/core';

export default (props) => {
  const { content, frontmatter } = props;
  function Image(props) {
    return <img {...props} style={{maxWidth: '100%'}} />
  }
  return (
    <Fragment>
      <CssBaseline/>
      <Container maxWidth="sm">
        <Typography component="h5" variant="h5" style={{ color: '#039be5'}}>
          {frontmatter.title}
        </Typography>
        <ReactMarkdown source={content} renderers={{image: Image}} />
      </Container>
    </Fragment>
  )
}