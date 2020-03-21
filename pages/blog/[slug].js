import matter from 'gray-matter';
import BasicLayout from '../../src/layouts/BasicLayout';
import Blog from '../../src/components/Blog';

export default (props) => {
  // data from initialProps
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <BasicLayout>
      <Blog content={markdownBody} frontmatter={frontmatter}/>
    </BasicLayout>
  )
}

// Gets the props
export async function getServerSideProps(context) {
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
