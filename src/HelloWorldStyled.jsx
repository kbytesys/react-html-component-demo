import PropTypes from 'prop-types';
import React from 'react';
import ReactHTMLElement from 'react-html-element';
import styled, {StyleSheetManager} from 'styled-components';

const Title = styled.h1`
  color: green;
`;

function HelloWorldStyled(props) {
  return <Title>Hello, {props.name}</Title>;
}

HelloWorldStyled.propTypes = {
  name: PropTypes.string.isRequired
};

class HelloWorldStyledComponent extends ReactHTMLElement {
  connectedCallback() {
    this.render(
      <StyleSheetManager target={this.shadow}>
        <HelloWorldStyled name={this.getAttribute("name")}/>
      </StyleSheetManager>
    );
  }
}

customElements.define('hello-world-styled', HelloWorldStyledComponent);
