import react from "react";
import Chat from "./Chat/Chat";

import { Inbox, ChatBubble, Send } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMessage,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

const Chats = () => {
  const addCompany = () => {
    const Companies = [
      {
        ID: 12345,
        name: "Digital Ocean",
      },
      {
        ID: 1234,
        name: "Namecheap",
      },
      {
        ID: 123,
        name: "Google",
      },
    ];

    const inputEl = document.querySelector("input#add-company");
    const modalForm = document.querySelector(
      "#modal-form.company-list-wrapper"
    );

    let searchCompanies = [];

    modalForm.classList.add("show");

    inputEl.addEventListener("input", (e) => {
      let char = inputEl.value;

      modalForm.querySelector(".results-wrapper").innerHTML = "";

      Companies.forEach((company) => {
        if (char.toString() !== "") {
          if (company.ID.toString().includes(char.toString())) {
            searchCompanies.push(company.name);
          }

          if (
            company.name
              .toString()
              .toLowerCase()
              .includes(char.toString().toLowerCase())
          ) {
            searchCompanies.push(company.name);
          }
        }
      });

      if (searchCompanies.length > 0) {
        searchCompanies.forEach((company) => {
          const el = document.createElement("h5");
          el.innerHTML = `${company}`;
          modalForm.querySelector(".results-wrapper").append(el);
        });
      } else {
        modalForm.querySelector(".results-wrapper").innerHTML =
          "No results found";
      }

      searchCompanies = [];
    });
  };
  return (
    <section id="chats">
      <div className="chats-nav flx">
        <ul className="nav-links flx">
          <li className="nav-link active flx">
            <FontAwesomeIcon icon={faInbox} />
            <a className="nav-btn center-align">Inbox</a>
            <p className="num">1</p>
          </li>
          <li className="nav-link flx">
            <FontAwesomeIcon icon={faMessage} />
            <a className="nav-btn center-align">Chat</a>
            <p className="num">11</p>
          </li>
          <li className="nav-link flx">
            <FontAwesomeIcon icon={faPaperPlane} />
            <a className="nav-btn center-align">Sent</a>
            <p className="num">0</p>
          </li>
        </ul>
        <div className="wrapper flx">
          <span>
            <button className="btn">Add Company</button>
          </span>
          <span>
            <input
              type="text"
              onMouseDown={addCompany}
              id="add-company"
              placeholder="Enter Company name / ID"
            />
          </span>
          <div id="modal-form" className="company-list-wrapper">
            <h4>Results:</h4>
            <div className="results-wrapper"></div>
          </div>
        </div>
      </div>
      <div className="chats-content">
        <Chat />
      </div>
    </section>
  );
};

export default Chats;
