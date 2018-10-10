import React, {Component} from "react";
import PropTypes from "prop-types";
import {Grid, Form, Button} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import Input from "../input/input.group.validation";
import withValidation from "../form/withValidation";
import withForm from "../form/withForm";


@withForm
@withValidation
export default class Login extends Component {

  static propTypes = {
    addValidationMessage: PropTypes.func,
    isValid: PropTypes.func,
    onChange: PropTypes.func,
    formData: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  };

  async onSubmit (e) {
    e.preventDefault();
    const {
      formData,
      addValidationMessage,
      isValid,
    } = this.props;

    if (!isValid()) {
      return;
    }

    const resp = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await resp.json();

    if (json.status) {
      json.errors.map(addValidationMessage);
    }
  }

  render () {
    const {
      onChange,
      formData: {
        email,
        password,
      },
    } = this.props;

    return (
      <Grid>
        <Form onSubmit={::this.onSubmit}>
          <Input
            type="email"
            name="email"
            onChange={onChange}
            defaultValue={email}
          />
          <Input
            type="password"
            name="password"
            onChange={onChange}
            defaultValue={password}
          />
          <Button type="submit">
            <FormattedMessage id="buttons.login"/>
          </Button>
        </Form>
      </Grid>
    );
  }
}
