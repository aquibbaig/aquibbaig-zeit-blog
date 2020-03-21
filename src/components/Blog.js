import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { CssBaseline, Container } from '@material-ui/core';

export default (props) => {
  const { content, frontmatter } = props;
  return (
    <Fragment>
      <CssBaseline/>
      <Container maxWidth="sm">
        {frontmatter.title}
        <ReactMarkdown source={content} />
      </Container>
    </Fragment>
  )
}