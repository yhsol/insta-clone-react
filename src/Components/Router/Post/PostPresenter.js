import React from "react";

const PostPresenter = ({ user, files }) => {
  console.log(files);
  const { url } = files[0];
  return (
    <div>
      <img src={url} alt={"instagram post!"} />
    </div>
  );
};

export default PostPresenter;
