import React from "react";

const getDetailsData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { title, body } = await getDetailsData(params.id);
  return (
    <div className="h-screen mt-5 px-8">
      <p className="mb-5">
        {" "}
        <span className="font-semibold">Title : </span>
        {title}
      </p>
      <p>
        <span className="font-semibold">Description :</span> {body}
      </p>
    </div>
  );
};

export default page;
