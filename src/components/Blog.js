import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { CssBaseline, Container } from '@material-ui/core';

export default (props) => {
  const { content, frontmatter } = props;
  function Image(props) {
    return <img {...props} style={{maxWidth: '100%'}} />
  }
  return (
    <Fragment>
      <CssBaseline/>
      <Container maxWidth="sm">
        {frontmatter.title}
        <ReactMarkdown source={content} renderers={{image: Image}} />
      </Container>
    </Fragment>
  )
}