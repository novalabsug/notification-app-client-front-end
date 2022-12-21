import react, { useEffect, useState } from "react";
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
import { addCompany } from "../../features/Company/companySlice";

const Messages = ({ user }) => {
  const messagesStore = useSelector((state) => state.message)?.messages;
  const companyStore = useSelector((state) => state.company);

  const [addNewCompanyData, setAddNewCompanyData] = useState({
    uniqueId: "",
    error: "",
  });

  const dispatch = useDispatch();

  let Mails = [];
  let Chats = [];
  let addCompanyResult = "";
  let addCompanyError = "";

  companyStore?.success?.addCompany
    ? (addCompanyResult = companyStore?.success.addCompany)
    : companyStore?.error.addCompanyError
    ? (addCompanyError = companyStore?.error.addCompanyError)
    : (addCompanyError = "");

  if (addCompanyResult == "success") {
    window.location.reload("false");
    addCompanyResult = "";
  }

  messagesStore.Mails ? (Mails = messagesStore?.Mails) : (Mails = []);

  messagesStore.Chats ? (Chats = messagesStore?.Chats) : (Chats = []);

  const addNewCompany = (e) => {
    e.preventDefault();

    const input = document.querySelector("#add-company");

    if (input.value == "") {
      input.parentElement.querySelector("p.error").innerHTML =
        "Account ID is required";

      return setTimeout(() => {
        input.parentElement.querySelector("p.error").innerHTML = "";
      }, 3000);
    }

    dispatch(
      addCompany({ userTempId: addNewCompanyData.uniqueId, user: user.id })
    );
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

  const handleChange = (e) => {
    setAddNewCompanyData({
      ...addNewCompanyData,
      [e.target.name]: e.target.value,
    });
  };

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
            <p className="num tab-btn">
              {Mails.length > 0 ? (Mails[0].emptyMail ? 0 : Mails.length) : 0}
            </p>
          </li>
          <li
            id="tab-btn"
            className="nav-link flx"
            data-target="1"
            onClick={handleTabSwitch}
          >
            <FontAwesomeIcon icon={faMessage} />
            <a className="nav-btn center-align">Chat</a>
            <p className="num">
              {Chats.length > 0 ? (Chats[0].emptyChat ? "0" : Chats.length) : 0}
            </p>
          </li>
        </ul>
        <form className="wrapper flx" onSubmit={addNewCompany}>
          <span>
            <button className="btn">Add Company</button>
          </span>
          <span>
            <input
              type="text"
              id="add-company"
              placeholder="Enter account unique ID"
              required
              name="uniqueId"
              onChange={handleChange}
            />
            <p className="error add-company-error">{addCompanyError}</p>
          </span>
          <div id="modal-form" className="company-list-wrapper">
            <h4>Results:</h4>
            <div className="results-wrapper"></div>
          </div>
        </form>
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
