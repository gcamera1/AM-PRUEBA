import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import Header from "../../components/header";


if (process.env.WEBPACK) require("./layout.scss");

class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = (this.props.title) ? `${this.props.title} - Almundo` : "Almundo";
    return (
      <div className="layout">

        <Helmet>
          <meta charSet="utf-8"/>
          <link rel='canonical' href={`${this.props.currentUrl}`}/>
          <meta name='description' content={this.props.description}/>
          <title>{title}</title>
        </Helmet>

        <Header/>

        <b>Hola Almundo!</b>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);