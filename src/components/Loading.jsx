import React from 'react'
import useJSONFetch from "../hooks/useJSONFetch.js"

function Loading() {

const {data, loading, error} = useJSONFetch("http://localhost:7070/loading", null);

if (error) {
  console.log(error);
};

  return (
    <>
    {loading && <div>Loading</div>}
    {data && <div>{data}</div>}
    </>
  );
};

export default Loading;