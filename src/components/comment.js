import React from "react";

const Comment = ({ user: { img_url, handle }, id, message, children = [] }) => (
  <li key={id}>
    <div className="flex items-center lh-copy pa3 ph0-l bb b--black-10 avenir">
      <img className="w2 h2 w3-ns h3-ns br-100" src={img_url} alt={handle} />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70 b">{handle}</span>
        <span className="f6 db black-70">{message}</span>
      </div>
    </div>
    <div style={{ marginLeft: 20 }}>
      {children.length ? (
        <div>{children.map(comment => Comment(comment))}</div>
      ) : null}
    </div>
  </li>
);

export default Comment;
