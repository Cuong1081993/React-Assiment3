import { useNavigate } from "react-router-dom";
import logoBanner from "../../image/banner1.jpg";
import classes from "./Login.module.css";
import useInput from "../hooks/use-input";
import { saveToStorage, userArr } from "../storage";

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

const Login = () => {
  const navigation = useNavigate();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    valueChangeHandler: passwordChangeHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!fromIsValid) {
      alert("Please check email or password !");
      return;
    }
    if (fromIsValid) {
      // tim kiem thong tin user login co trong storage k
      const user = userArr.find(
        (item) => item.email === emailValue && item.password === passwordValue
      );
      // neu co thi ok !
      if (user) {
        saveToStorage("currentUser", user);
        alert("Login successful !");
        navigation("/");
        // khong co thi nhap lai
      } else {
        alert("Please check again !");
        resetEmail();
        resetPassword();
      }
    }
  };

  let fromIsValid = false;

  if (emailIsValid && passwordIsValid) {
    fromIsValid = true;
  }
  const signUpHandler = () => {
    navigation("/register");
  };
  return (
    <div className={classes.login_form}>
      <div className={classes.img_banner}>
        <img src={logoBanner} alt="logo-banner" />
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <p className={classes.title}>Sign In</p>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            id="formGroupExampleInput"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={classes.error}>Please enter email...</p>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={passwordValue}
            id="formGroupExampleInput2"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={classes.error}>Password is incorrect !</p>
          )}
        </div>
        <button className={classes.btn_signIn} type="submit">
          Sign In
        </button>
        <div className={classes.footer_signIn}>
          <span onClick={signUpHandler}>Create an account?</span>
          <span>Sign up</span>
        </div>
      </form>
    </div>
  );
};
export default Login;
