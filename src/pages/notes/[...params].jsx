import React from "react";
import { useRouter } from 'next/router';

const Page = () => {

  const router = useRouter();

  //notes/1/2/3 params is [1,2,3,4]
  const { params } = router.query;
  console.log(params);
  return <div>Params: {params}</div>;
};

export default Page;
