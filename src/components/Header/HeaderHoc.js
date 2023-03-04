import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/authReducer";
import Header from "./Header";

class HeaderHoc extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        const { id, email, login } = response.data.data;
        if (response.data.resultCode === 0) {
          this.props.setUserDataAC(id, email, login);
        }
      });
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
  setUserDataAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHoc);
