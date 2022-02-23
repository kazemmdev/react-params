import React, { Component } from "react";
import { withUrlParams } from "../utils/urlParams";

class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { year, month, slug } = this.props.params;

    return (
      <div className="wrap">
        <h1>Post params</h1>
        <ul>
          <li>
            Year: <strong>{year}</strong>
          </li>
          <li>
            Month: <strong>{month}</strong>
          </li>
          <li>
            Slug: <strong>{slug}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default withUrlParams(PostPage);
