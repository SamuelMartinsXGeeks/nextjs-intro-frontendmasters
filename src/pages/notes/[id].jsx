import React from "react";
import { useRouter } from 'next/router';

const Page = ({ note }) => {

  const router = useRouter()
  const { id } = router.query

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Title: {note.title} </h1>
      <h2>ID: {note.id} </h2>
    </div>
  )
};

export default Page;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/notes/${params.id}`);

  if (!response.ok) {
    //res.writeHead(302, { Location: '/notes' });
    //res.end();
    console.log("Not OK!");
    return {
      props: {}
    }
  }

  const { data } = await response.json();

  console.log(data);

  return {
    props: { note: data }
  };
};