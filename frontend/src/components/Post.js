import React from "react";
import "./css/Post.css";
import { Avatar } from "@mui/material";
import {
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
  RepartitionOutlined,
  ChatBubbleOutlined,
  ShareOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";

function Post() {
  return (
    <div className="post">
      <div className="post__info">
        <Avatar />
        <h4>Username</h4>
        <small>Timestep</small>
      </div>
      <div className="post__body">
        <div className="post__question">
        <p>This is Test Question</p>
        <button className="post__btnAnswer">Answer</button>
        </div>         
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepartitionOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        1 Answer
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container"
        >
          <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
           className="post-answered">
            <Avatar />
            <div style={{
                    margin: "0px 10px",
                  }}
            className="post-info">
              <p>username</p>
              <span>Timestep</span>
            </div>
          </div>
          <div className="post-answer">This is test Answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
