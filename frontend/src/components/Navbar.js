import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import Search from "@mui/icons-material/Search";
import { Avatar, Input } from "@mui/material";
import "./css/Navbar.css";
import { Modal } from "react-responsive-modal";
import CloseIcon from "@mui/icons-material/Close";
import "react-responsive-modal/styles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logout, selectUser } from "../feature/userSlice";
import { Button } from "@mui/material";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("https://quora-2-mern.onrender.com/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar__logo">
          <img
            src="data:image/png;base64,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"
            alt="logo"
          />
        </div>
        <div className="navbar__icons">
          <div className="navbar__icon">
            <HomeIcon />
          </div>
          <div className="navbar__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="navbar__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="navbar__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="navbar__icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className="navbar__input">
          <Search />
          <input type="text" placeholder="search questions" />
        </div>
       
        <button
          className="navbar-question"
          onClick={() => setIsModalOpen(true)}
        >
          Add questions
        </button>
        <div className="navbar__Rem">
          <Avatar src={user?.photo}  />
          <span className="logout" onClick={handleLogout}>
            <Button variant="outlined" color="error">
              LogOut
            </Button>
          </span>
        </div>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__title">
            This is modal.
            <h5>Add question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" src={user?.photo} />
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              text="text"
              placeholder="Start your question with 'What', 'How', 'Why' etc."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="Optional : include a link that gives context."
              />
              {inputUrl !== "" && (
                <img
                  style={{
                    height: "40vh",
                    objectFit: "contain",
                  }}
                  src={inputUrl}
                  alt="Displayimage"
                />
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>

            <button onClick={handleSubmit} className="add" type="submit">
              Add
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
