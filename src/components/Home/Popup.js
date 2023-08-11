import classes from "./Popup.module.css";
import Modal from "../UI/Modal";
import { toggleDetailActions } from "../../store/detail-product";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Popup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const information = useSelector((state) => state.showHideDetail.viewDetail);
  const handlerMoveDetailPage = (id) => {
    dispatch(toggleDetailActions.hideDetail());
    navigation("/detail/" + id);
  };

  return (
    <div>
      <Modal>
        <form className={classes.form}>
          <img src={information.img1} alt="img" />
          <div className={classes.detail}>
            <button onClick={() => dispatch(toggleDetailActions.hideDetail())}>
              X
            </button>
            <p>{information.name}</p>
            <p>{parseInt(information.price).toLocaleString()}VND</p>
            <p>{information.long_desc}</p>
            <button
              onClick={() => handlerMoveDetailPage(information._id.$oid)}
              className={classes.btn_viewDetail}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span>View Detail</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default Popup;
