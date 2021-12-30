import axios from "axios";
import { http, DOMAIN } from "../../../Util/Setting";
export const getApiDanhSachCongViecTheoTen = () => {
  return (dispatch) => {
    //Gọi api ....
    let promise = http.get(`${DOMAIN}/api/jobs/by-name?name=v`);
    promise.then((result) => {
      dispatch({
        type: "GET_API_CONGVIEC_THEOTEN",
        data: result.data,
      });
    });
    console.log(promise);
  };
};
