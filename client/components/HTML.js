import React, {Component} from "react";
import PropTypes from "prop-types";
import {companyName} from "../../shared/constants/misc";


export default class HTML extends Component {

  static propTypes = {
    initialMarkup: PropTypes.string,
    initialState: PropTypes.object,
  };

  renderScripts () {
    if (process.env.NODE_ENV === "production") {
      return (
        <>
          <script src="https://unpkg.com/react@16.5.2/dist/react.min.js" type="text/javascript"></script>
          <script src="https://unpkg.com/react-dom@16.5.2/dist/react-dom.min.js" type="text/javascript"></script>
        </>
      );
    } else {
      return null;
    }
  }

  render () {
    const {initialMarkup, initialState} = this.props;

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="description" content="description"/>
          <meta name="keywords" content="keywords"/>
          <meta name="robots" content="all"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <link href={`/bundle/client.css`} rel="stylesheet"/>
          <title>{companyName}</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: initialMarkup}}></div>
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`}}></script>
          {this.renderScripts()}
          <script src={`/bundle/client.js`} type="text/javascript"></script>
        </body>
      </html>
    );
  }
}
