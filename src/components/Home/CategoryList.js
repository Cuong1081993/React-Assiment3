import { Fragment, useEffect, useState } from "react";
import classes from "./CategoryList.module.css";
import { Categories1, Categories2 } from "../Data/imageProduct";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import { toggleDetailActions } from "../../store/detail-product";
import { useDispatch, useSelector } from "react-redux";

const CategoryList = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [dataToptrending, setDataToptrending] = useState([]);
  const [information, setInformation] = useState();

  const toggleDetail = useSelector((state) => state.showHideDetail.showHide);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await response.json(response);
      setDataToptrending(data);
    };
    fetchProduct();
  }, []);

  const handlerProduct = () => {
    navigation("/shop");
  };
  return (
    <Fragment>
      {/* Categories */}
      <section>
        <div className={classes.title}>
          <p>CAREFULLY CREATED COLLECTIONS</p>
          <p>BROWSE OUR CATEGORIES</p>
        </div>
        <div className={classes.categories_1}>
          {Categories1.map((img, index) => (
            <ul key={index}>
              <li>
                <img src={img} alt="img-category" onClick={handlerProduct} />
              </li>
            </ul>
          ))}
        </div>
        <div className={classes.categories_2}>
          {Categories2.map((img, index) => (
            <ul key={index}>
              <li>
                <img src={img} alt="img-category" onClick={handlerProduct} />
              </li>
            </ul>
          ))}
        </div>
      </section>

      {/* Top trending products */}
      <section>
        <div className={classes.title_trending}>
          <p>MADE THE HARD WAY</p>
          <p>TOP TRENDING PRODUCTS</p>
        </div>
        <div className={classes.list_trending}>
          {dataToptrending.map((item, index) => (
            <ul key={index}>
              <li>
                <img
                  src={item.img1}
                  alt="img-product"
                  onClick={() => {
                    setInformation(item);
                    dispatch(toggleDetailActions.showDetail(item));
                  }}
                  className={classes.img_trending}
                />
              </li>
              <div className={classes.information}>
                <p className={classes.product_name}>{item.name}</p>
                <p className={classes.product_price}>
                  {parseInt(item.price).toLocaleString()}VND
                </p>
              </div>
            </ul>
          ))}
        </div>
      </section>
      {/* Other Information */}
      <section>
        <div className={classes.row_1}>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className={classes.col_name}>
                  <p>FREE SHIPPING</p>
                  <p>Free shipping worldwide</p>
                </div>
              </div>
              <div className="col">
                <div className={classes.col_name}>
                  <p>24/7 SERVICE</p>
                  <p>Free shipping worlwide</p>
                </div>
              </div>
              <div className="col">
                <div className={classes.col_name}>
                  <p>FESTIVAL OFFER </p>
                  <p>Free shipping worlwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.row_2}>
          <div className="row">
            <div className="col">
              <div className={classes.left_col}>
                <p>Let's be friend !</p>
                <p>Nisi nisi tempor consequat laboris nisi.</p>
              </div>
            </div>
            <div className="col">
              <div className={classes.right_col}>
                <input placeholder="Enter your email address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {toggleDetail && <Popup information={information} />}
    </Fragment>
  );
};
export default CategoryList;
