import { useState } from "react";
import style from "./Login.module.css";
import Input from "../components/Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserStore } from "../Store";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  async function handleLogin() {
    console.log("first");
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/user/login`,
        credentials
      );
      if (response) {
        console.log(response);
        setUser(response.data);
        toast.success(`Welcome Back ${response.data.firstName}`);
        return navigate("/", { replace: true });
      }
    } catch (error) {
      if (error.message === "Network Error") {
        console.log(error);
        toast.error("Server Error");
        setLoading(false);
      }

      setLoading(false);
    }
  }
  return (
    <section className={style.loginPageContainer}>
      <section className={style.loginFormContainer}>
        <h1 className={style.header}>Sign In</h1>
        <section className={style.inputsContainer}>
          <Input
            value={credentials}
            setValue={setCredentials}
            label="Email or Username"
            control="username"
            isDisabled={loading}
            required
          />
          <Input
            value={credentials}
            setValue={setCredentials}
            label="Password"
            control="password"
            type="password"
            required
          />
          <section className={style.btnsWrapper}>
            <button className={style.loginButton} onClick={handleLogin}>
              Login
            </button>
          </section>
          <span>
            You don't have an account?{" "}
            <NavLink className={style.navLink} to="/signup">
              SignUp
            </NavLink>
          </span>
        </section>
      </section>
    </section>
  );
}

export default Login;
