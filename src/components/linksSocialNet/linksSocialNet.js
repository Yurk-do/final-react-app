import React from "react";
import * as GrIcons from "react-icons/gr";
import "components/linksSocialNet/linksSocialNet.css";

function LinksSocialNet() {
  return (
    <div className="links-social-net">
      <a href="https://www.instagram.com/nytimes/">
        <GrIcons.GrInstagram />
      </a>
      <a href="https://twitter.com/nytimes">
        <GrIcons.GrTwitter />
      </a>
      <a href="https://www.facebook.com/nytimes">
        <GrIcons.GrFacebook />
      </a>
      <a href="https://www.youtube.com/channel/UCqnbDFdCpuN8CMEg0VuEBqA">
        <GrIcons.GrYoutube />
      </a>
    </div>
  );
}

export default LinksSocialNet;
