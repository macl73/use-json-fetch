import React from 'react'
import useJSONFetch from "../hooks/useJSONFetch.js"

function Data() {

const {data, loading, error} = useJSONFetch("http://localhost:7070/data", null);

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

export default Data;