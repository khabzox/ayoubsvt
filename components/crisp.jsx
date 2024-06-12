import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("736e46a4-26a7-4735-84a2-bc98048042c9");
  }

  render () {
    return null;
  }
}
export default CrispChat