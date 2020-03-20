import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import BasicLayout from '../../src/layouts/BasicLayout';

export default (props) => {
  // data from initialProps
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <BasicLayout>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </BasicLayout>
  )
}

// Gets the props
export async function getStaticProps(context) {
  const { params: { slug } } = context;
  // grab the file based on the query
  const content = await import(`../../posts/blog/${slug}.md`);
  const data = matter(content.default);
  return {
    props: {
      title: data.data.title,
      content: data.content,
      data: data.data,
    }
  }
}

export async function getStaticPaths() {
  return  {
    paths: [
      { 
        params: {
          slug: 'hello'
        }
      }
    ], 
    fallback: true
  };
}