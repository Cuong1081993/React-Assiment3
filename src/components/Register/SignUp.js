import classes from "./SignUp.module.css";
import logoBanner from "../../image/banner1.jpg";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";
import { saveToStorage, userArr } from "../storage";
import { User } from "../../models/User";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPassword = (value) => value.length > 8;

const SignUp = () => {
  const navigation = useNavigate();

  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);

  const submitHandler = (e) => {
    // lay ra cac email dang nhap de kiem tra email co ton tai k..

    const emailArr = userArr.map((item) => item.email);

    // data register

    const dataRegister = new User(
      fullNameValue,
      emailValue,
      passwordValue,
      phoneValue
    );
    e.preventDefault();
    // check email co ton tai hay k ?
    if (emailArr.includes(emailValue)) {
      alert("Email is exist ! ");
      fromIsValid = false;
    }
    // neu email chua ton tai thi push vao mang userArr
    if (fromIsValid) {
      userArr.push(dataRegister);
      saveToStorage("USER_ARRAY", userArr);
      alert("Register Successful ! ");
      navigation("/login");
    }
    if (!fromIsValid) {
      alert("Please check your information again ! ");
      return;
    }
    resetFullName();
    resetEmail();
    resetPassword();
    resetPhone();
  };

  let fromIsValid = false;

  if (fullNameIsValid && emailIsValid && passwordIsValid && phoneIsValid) {
    fromIsValid = true;
  }
  const handlerSignUp = () => {
    navigation("/login");
  };
  return (
    <div className={classes.login_form}>
      <div className={classes.img_banner}>
        <img src={logoBanner} alt="banner" />
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <p className={classes.title}>Sign Up</p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            id="formGroupExampleInput2"
            value={fullNameValue}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
          />
          {fullNameHasError && <p className={classes.error}>Fullname is required</p>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            id="formGroupExampleInput2"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <p className={classes.error}>Please input a valid email. Ex :abc@gmail.com</p>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            id="formGroupExampleInput2"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}

          />
          {passwordHasError && <p className={classes.error}>Password must be longer than 8</p>}
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            id="formGroupExampleInput2"
            value={phoneValue}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
          {phoneHasError && <p className={classes.error}>Phone is required</p>}
        </div>

        <button className={classes.btn_signUp} type="submit">
          Sign Up
        </button>
        <div className={classes.footer_signUp}>
          <span onClick={handlerSignUp}>Login ?</span>
          <span>Click</span>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
