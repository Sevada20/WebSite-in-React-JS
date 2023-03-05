import { Component } from "react";
import { connect } from "react-redux";
import { getAuthUsersDataThunkCreator } from "../../redux/authReducer";
import Header from "./Header";

class HeaderHoc extends Component {
  componentDidMount() {
    this.props.getAuthUsersDataThunkCreator();
  }

  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = {
  getAuthUsersDataThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHoc);
