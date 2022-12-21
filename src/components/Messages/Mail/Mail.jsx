import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../../../features/Company/companySlice";
import { readMail } from "../../../features/Messages/messageSlice";

const Mail = ({ mail }) => {
  const dispatch = useDispatch();

  const messagesStore = useSelector((state) => state.message);

  let response = "";

  messagesStore.response == "SUCCESS"
    ? (response = messagesStore.response)
    : (response = "");

  const handleRead = (e) => {
    // handle changing mail read status
    if (e.target.classList.contains("mail-wrapper")) {
      if (e.target.parentElement.classList.contains("unread")) {
        dispatch(readMail(e.target.parentElement.getAttribute("data-target")));
        dispatch(fetchCompanies(JSON.parse(localStorage.getItem("user"))));
        e.target.parentElement.classList.remove("unread");
      }
    } else {
      if (e.target.parentElement.parentElement.classList.contains("unread")) {
        dispatch(
          readMail(
            e.target.parentElement.parentElement.getAttribute("data-target")
          )
        );
        dispatch(fetchCompanies(JSON.parse(localStorage.getItem("user"))));
        e.target.parentElement.parentElement.classList.remove("unread");
      }
    }

    // handle enlarging mail
    if (e.target.classList.contains("mail-wrapper")) {
      if (e.target.classList.contains("read")) {
        e.target.classList.remove("read");
      } else {
        e.target.classList.add("read");
      }
    } else {
      if (e.target.parentElement.classList.contains("read")) {
        e.target.parentElement.classList.remove("read");
      } else {
        e.target.parentElement.classList.add("read");
      }
    }
  };

  return mail.emptyMail ? (
    <section className="empty-mail active">
      <p className="center-align">{mail.emptyMail}</p>
    </section>
  ) : mail.status == "unread" ? (
    <section className="mail unread" data-target={mail._id}>
      <div className="mail-wrapper" onClick={handleRead}>
        <h3 className="f-size-reg">{mail.title}</h3>
        <p>{mail.message + " "}</p>
        <h5 className="date-wrapper">{moment(mail.createdOn).fromNow()}</h5>
      </div>
    </section>
  ) : (
    <section className="mail" data-target={mail._id}>
      <div className="mail-wrapper" onClick={handleRead}>
        <h3 className="f-size-reg">{mail.title}</h3>
        <p>{mail.message + " "}</p>
        <h5 className="date-wrapper">{moment(mail.createdOn).fromNow()}</h5>
      </div>
    </section>
  );
};

export default Mail;
