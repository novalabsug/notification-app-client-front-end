import react, { useEffect } from "react";
import Mail from "./Mail/Mail";
import Chat from "./Chat/Chat";

import { Inbox, ChatBubble, Send } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMessage,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "../../actions/actions";

import { Navigate, useNavigate, useLocation } from "react-router-dom";

const Messages = ({ user }) => {
  const results = useSelector((state) => state?.company);
  const dispatch = useDispatch();

  let Mails = [];
  let Chats = [];
  let Error = "";
  let addCompanyResult = "";

  results?.addCompany
    ? (addCompanyResult = results?.addCompany)
    : results?.addCompanyError
    ? (Error = results?.addCompanyError)
    : (Error = "");

  if (addCompanyResult == "success") {
    window.location.reload("false");
    addCompanyResult = "";
  }

  results.Mails ? (Mails = results?.Mails) : (Mails = []);

  results.Chats ? (Chats = results?.Chats) : (Chats = []);

  const addNewCompany = () => {
    const input = document.querySelector("#add-company");

    if (input.value == "") return input.classList.add("error");

    dispatch(addCompany(input.value, user.result._id));
  };

  function handleTabSwitch(e) {
    const tabBtns = document.querySelectorAll("#tab-btn");

    const tabs = document.querySelectorAll(".tab-menus");

    if (e.target.classList.contains("nav-link")) {
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
        tabs[parseInt(e.target.getAttribute("data-target"))].classList.add(
          "active"
        );
        handleRemovingActive(
          parseInt(e.target.getAttribute("data-target")),
          tabBtns,
          tabs
        );
      }
    } else {
      if (!e.target.parentElement.classList.contains("active")) {
        e.target.parentElement.classList.add("active");
        tabs[
          parseInt(e.target.parentElement.getAttribute("data-target"))
        ].classList.add("active");
        handleRemovingActive(
          parseInt(e.target.parentElement.getAttribute("data-target")),
          tabBtns,
          tabs
        );
      }
    }
  }

  function handleRemovingActive(index, btns, tabs) {
    btns.forEach((btn, key) => {
      if (key != index) {
        btn.classList.remove("active");
        tabs[key]?.classList.remove("active");
      }
    });
  }

  return (
    <section id="messages">
      <div className="messages-nav flx">
        <ul className="nav-links flx">
          <li
            id="tab-btn"
            className="nav-link active flx tab-btn"
            data-target="0"
            onClick={handleTabSwitch}
          >
            <FontAwesomeIcon icon={faInbox} />
            <a className="nav-btn center-align tab-btn">Inbox</a>
            <p className="num tab-btn">0</p>
          </li>
          <li
            id="tab-btn"
            className="nav-link flx"
            data-target="1"
            onClick={handleTabSwitch}
          >
            <FontAwesomeIcon icon={faMessage} />
            <a className="nav-btn center-align">Chat</a>
            <p className="num">0</p>
          </li>
        </ul>
        <div className="wrapper flx">
          <span>
            <button className="btn" onClick={addNewCompany}>
              Add Company
            </button>
          </span>
          <span>
            <input
              type="text"
              id="add-company"
              placeholder="Enter account unique ID"
              required
            />
            <p className="error">{Error}</p>
          </span>
          <div id="modal-form" className="company-list-wrapper">
            <h4>Results:</h4>
            <div className="results-wrapper"></div>
          </div>
        </div>
      </div>
      <div className="messages-content">
        <section id="mail-tab" className="tab-menus active" data-target="0">
          {Mails?.length > 0 ? (
            Mails.map((mail) => <Mail key={mail._id} mail={mail} />)
          ) : (
            <p className="center-align empty-mail">
              Select a company to display mails
            </p>
          )}
        </section>
        <section id="chat-tab" className="tab-menus" data-target="1">
          {Chats?.length > 0 ? (
            Chats.map((chat) => <Chat key={chat._id} chat={chat} />)
          ) : (
            <p className="center-align empty-chat">
              Select a company to display Chats
            </p>
          )}
        </section>
      </div>
    </section>
  );
};

export default Messages;
