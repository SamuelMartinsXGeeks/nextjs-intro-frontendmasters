/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Index = ({ content }) => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
        <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      </div>
    </div>
  );
};

export default Index;

export async function getStaticProps() {

  return {
    props: { content: { title: "This is my really nice app." } }
  }
}