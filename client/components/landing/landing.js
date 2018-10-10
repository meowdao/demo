import React, {Component} from "react";
import {FormattedMessage} from "react-intl";
import {Grid} from "react-bootstrap";


export default class Landing extends Component {
  render () {
    return (
      <Grid>
        <FormattedMessage id="text.main-page"/>
      </Grid>
    );
  }
}
