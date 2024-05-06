import React, { useEffect, useState } from 'react'
import { useInfoContext } from "../../context/Context";
import { getUser } from "../../api/deleteRequests";

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
    <div>
        <img className='img1' src={
          userData?.profilePicture
            ? `${serverUrl}/${userData?.profilePicture}`
            : "yoq"
        } alt="img" />
        <div className="box">
        <span className='name'>{userData?.name}</span>
        <br />
        <span className='text'>fmfkrfrkfr</span>
        <br />
        <span className='message'>eded</span>
        </div>
        <div className="box2">
            <span className='data'>24.01</span>
            <br />
            <i class="fa-regular fa-bookmark"></i>
        </div>
    </div>
  )
}

export default Userlar
