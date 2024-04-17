import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useInfoContext } from "../../context/Context";
import { toast } from "react-toastify";
import { googleAuth } from "../../api/authRequest";

const Test = () => {
  const { setCurrentUser } = useInfoContext();
  return (
    <div>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          let data = jwtDecode(credentialResponse.credential);
          toast.loading("PLease wait...");
          let res;
          let newUser = {
            name: data.given_name,
            surname: data.name,
            email: data.email,
            profilePicture: data.picture,
          };
          res = await googleAuth(newUser)
          console.log(res);
          toast.dismiss();
          localStorage.setItem("profile", JSON.stringify(res?.data?.findUser))
          localStorage.setItem("token", JSON.stringify(res?.data?.token))
          setCurrentUser(newUser)
          toast.success(res?.data?.message)
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Test;
