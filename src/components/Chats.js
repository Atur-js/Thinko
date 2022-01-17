import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import styles from "./Chats.module.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContextProvider";
import LoadingGif from "../assets/loading.gif";
const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "f8d3a860-bba0-4e6f-8f67-e3f0efc6de85",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "e82893d3-9b34-4565-951f-5bebbffd0625",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading)
    return <img className={styles.gif} src={LoadingGif} alt="gif" />;

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="f8d3a860-bba0-4e6f-8f67-e3f0efc6de85"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
