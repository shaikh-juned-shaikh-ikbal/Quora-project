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

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const Close = <CloseIcon />;
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar__logo">
          <img
            // src='././public/logo.png'
            src="https://cdn-icons-png.flaticon.com/512/4096/4096393.png"
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
        <div className="navbar__Rem">
          <Avatar />
        </div>
        <button
          className="navbar-question"
          onClick={() => setIsModalOpen(true)}
        >
          Add questions
        </button>
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
            <Avatar className="avatar" />
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="modal__Field">
            <Input
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
              {
                inputUrl !== "" && <img style={{
                  height: "40vh",
                  objectFit: "contain",
                }} src={inputUrl}
                 alt="Displayimage" /> 

              }
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>

            <button className="add" type="submit">
              Add
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
