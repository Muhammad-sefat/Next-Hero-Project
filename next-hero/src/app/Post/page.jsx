import React from "react";

const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
};

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <p className="text-2xl font-semibold text-center py-5">All Data Here</p>
      <div className="my-5 grid grid-cols-3 gap-5 px-5">
        {data.map(({ title, body, id }) => (
          <div key={id} className="border border-orange-600 p-3 rounded">
            <p>
              <span className="font-medium">Title :</span> {title}
            </p>
            <p>
              <span className="font-medium pt-3">Description :</span> {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
