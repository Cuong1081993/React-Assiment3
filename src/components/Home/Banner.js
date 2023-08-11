import { Fragment } from "react";
import classes from "./Banner.module.css";
import banner from "../../image/banner1.jpg";
import { useNavigate } from "react-router-dom";
const Banner = () => {
    const navigation = useNavigate();
    const collectionHandler=()=>{
        navigation('/shop')
    }
  return (
    <Fragment>
      <div className={classes.banner}>
        <img src={banner} alt="banner" className={classes.banner_img} />
        <div className={classes.content}>
          <p>NEW INSPIRATION 2020</p>
          <p>20% OFF ON NEW SEASON</p>
          <button onClick={collectionHandler}> Browse collections</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Banner;
