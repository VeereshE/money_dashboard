import { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { TailSpin as Loader } from "react-loader-spinner";
import Button from "@mui/material/Button";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroeMsg, setErrorMsg] = useState({ showErrorMsg: false, msg: "" });
  const [isLoading, setLoading] = useState(false);

 const history = useHistory();


 
   const userId = Cookies.get("USER_ID");
   if (userId !== undefined) {
     history.push("/");
   }

  const dataFormat = (data) => ({
    getUserId: data.get_user_id,
  });

  const onLoginApprove = (data) => {
    Cookies.set("USER_ID", data.getUserId[0].id);
    history.push("/");
  };


  const loginUser = async (e) => {
    e.preventDefault();
    setErrorMsg({ showErrorMsg: false, msg: "" });
    setLoading(true);
    const newUrl = `https://bursting-gelding-24.hasura.app/api/rest/get-user-id?email=${email}&password=${password}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      },
    };
    const response = await fetch(newUrl, options);
    const data = await response.json();
     
    if(response.ok){
      const formattedData = dataFormat(data);
      console.log(formattedData.getUserId[0]);
      formattedData.getUserId.length !== 0
        ? onLoginApprove(formattedData)
        : setErrorMsg({ showErrorMsg: true, msg: "Invalid Login credentials" }); 
    } else{
      console.log(data.error);
      setErrorMsg({ showErrorMsg: true, msg: data.error });
    }



    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img
          className="website-logo mobile-logo"
          alt="website logo"
          src="https://res.cloudinary.com/dqppfjvrw/image/upload/v1690698824/Frame_507_1_oseag1.png"
        />
        <img
          className="website-logo desktop-logo"
          alt="website logo"
          src="https://res.cloudinary.com/dqppfjvrw/image/upload/v1690698824/Frame_507_1_oseag1.png"
        />
        <form onSubmit={(e) => loginUser(e)} className="form-container">
          <div className="input-container">
            <label htmlFor="username">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-element"
              id="username"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">PASSWORD</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-element"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <Button
            variant="contained"
            fullWidth
            className="form-button"
            type="submit"
          >
            Login
          </Button>
          {isLoading ? <Loader color="#3449eb" height={20} /> : null}
          {erroeMsg.showErrorMsg ? (
            <p className="error-msg">*{erroeMsg.msg}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
