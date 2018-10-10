import "./header.less";
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {companyName} from "../../../shared/constants/misc";
import {FormattedMessage} from "react-intl";
import {localization} from "../../../shared/intl/setup";
import {enabledLanguages} from "../../../shared/constants/language";
import {updateIntl} from "react-intl-redux";


@withRouter
@connect()
export default class Header extends Component {

  static propTypes = {
    dispatch: PropTypes.func,
  };

  onSelect (language) {
    const {dispatch} = this.props;
    dispatch(updateIntl(localization[language]));
  }

  renderLogin () {
    return (
      <LinkContainer to="/login">
        <NavItem><FormattedMessage id="components.menu.login"/></NavItem>
      </LinkContainer>
    );
  }

  renderLang () {
    return (
      <NavDropdown title={<FormattedMessage id="components.switchLanguage"/>} id="lang_menu">
        {enabledLanguages.map(language =>
          <MenuItem key={language} eventKey={language} onSelect={::this.onSelect}>
            <FormattedMessage id={`components.language.${language}`}/>
          </MenuItem>,
        )}
      </NavDropdown>
    );
  }

  renderMenu () {
    return (
      <Nav navbar pullRight>
        {this.renderLang()}
      </Nav>
    );
  }

  render () {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">{companyName}</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse href="#">
          {this.renderMenu()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
