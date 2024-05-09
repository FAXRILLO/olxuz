import React, { useEffect, useState } from 'react'
import { useInfoContext } from "../../context/Context";
import { getUser } from "../../api/deleteRequests";
import "./Userlar.scss"

const Userlar = ({chat}) => {
    const { currentUser, exit, onlineUsers, serverUrl } = useInfoContext();

    const [userData, setUserData] = useState(null);

    const userId = chat.members.find((id) => id !== currentUser._id);

    const online = () => {
        const onlineUser = onlineUsers.find((user) => user.userId === userId);

        return onlineUser ? true : false;
    };

    useEffect(() => {
      const getUserData = async () => {
        try {
          const { data } = await getUser(userId);
          setUserData(data.user);
        } catch (error) {
          if (error.response.data.message === "jwt expired") {
            exit();
          }
        }
      };
      getUserData();
    }, [userId]);
    console.log(userData);
    return (
    <div className='user'>
        <img className='img1' src={
          userData?.profilePicture
            ? `${userData?.profilePicture.url}`
            : "yoq"
        } alt="img" />
        <div className="row">
          <div className="col-xl-10 col-lg-10 col-md-6 col-sm-10 col-12">
            <div className="box">
              <span className='name'>{userData?.firstname ? userData.firstname : 'Yengi foydalanuvchi'}{userData?.authName}</span>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-2 col-12">
            <div className="box2">
              <span className='data'>{new Date(userData?.createdAt).toLocaleDateString()}</span>
              <br />
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Userlar
