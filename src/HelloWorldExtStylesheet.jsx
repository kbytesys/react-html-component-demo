import PropTypes from 'prop-types';
import React from 'react';
import ReactHTMLElement from 'react-html-element';

import './HelloWorldExtStylesheet.scss';

function HelloWorldExtStylesheet(props) {
  return <h1>Hello, {props.name}</h1>;
}

HelloWorldExtStylesheet.propTypes = {
  name: PropTypes.string.isRequired
};

class HelloWorldExtStylesheetComponent extends ReactHTMLElement {
  connectedCallback() {
    this.render(
      <div className="hello-world-stylesheet">
        <link href={"./index.bundle.css"} rel={"stylesheet"} />
        <HelloWorldExtStylesheet name={this.getAttribute("name")}/>
      </div>
    );
  }
}

customElements.define('hello-world-stylesheet', HelloWorldExtStylesheetComponent);
