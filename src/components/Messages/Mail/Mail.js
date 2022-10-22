import moment from "moment";

const Mail = ({ mail }) => {
  const handleRead = (e) => {
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
  ) : (
    <section className="mail">
      <div className="mail-wrapper" onClick={handleRead}>
        <h3 className="f-size-reg">{mail.title}</h3>
        <p>
          {mail.message + " "} Consider an elementary proposition: companies
          exist to make money, not to lose it. This should be obvious to any
          thinking person. But it wasn’t so obvious to many in the late 1990s,
          when no loss was too big to be described as an investment in an even
          bigger, brighter future. The conventional wisdom of the “New Economy”
          accepted page views as a more authoritative, forward-looking financial
          metric than something as pedestrian as profit.
        </p>
        <h5 className="date-wrapper">{moment(mail.createdOn).fromNow()}</h5>
      </div>
    </section>
  );
};

export default Mail;
