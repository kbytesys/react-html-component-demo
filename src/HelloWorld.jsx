import PropTypes from 'prop-types';
import React from 'react';
import ReactHTMLElement from 'react-html-element';

function HelloWorld(props) {
  return <h1>Hello, {props.name}</h1>;
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
};

class HelloWorldComponent extends ReactHTMLElement {
  connectedCallback() {
    this.render(
      <HelloWorld name={this.getAttribute("name")}/>
    );
  }
}

customElements.define('hello-world', HelloWorldComponent);
