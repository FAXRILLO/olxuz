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
    return (
    <div className='user'>
        {userData?.profilePicture?.url ? <img style={{width: "50px", height: "50px", borderRadius: "50%"}} src={userData.profilePicture.url} alt="" className='profile-img'/>
                : <img style={{width: "50px", height: "50px", borderRadius: "50%"}} src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" className='profile-img'/>}
          <div className="mmb">

            <div className="box">
              <span className='name'>{userData?.firstname ? userData.firstname : 'Yengi foydalanuvchi'}{userData?.authName}</span>
            </div>
            <div className="box2">
              <span className='data'>{new Date(userData?.createdAt).toLocaleDateString()}</span>
              <br />
              <i class="fa-regular fa-bookmark"></i>
            </div>
        </div>
    </div>
  )
}

export default Userlar
