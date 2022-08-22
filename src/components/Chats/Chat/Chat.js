import moment from "moment";

const Chat = () => {
  return (
    <section id="chat">
      <h3 className="f-size-reg">Welcome to Digital Oceans</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque
        id consequatur aperiam inventore ad, placeat possimus eligendi, ullam
        eum voluptatum explicabo temporibus quis cupiditate asperiores natus
        incidunt et! At illum nisi facere quos error fuga recusandae deleniti
        nulla iusto hic debitis vero repellendus officia similique corporis
        numquam, veritatis cum temporibus accusamus quia? Earum ex
        necessitatibus magnam voluptatibus laudantium esse sed cum quo ut. Dolor
        id adipisci error recusandae, dolorum, labore, praesentium repudiandae
        exercitationem itaque rem quis eligendi! Ipsam, est nemo laudantium
        repellendus modi corporis enim nesciunt blanditiis? Veritatis animi
        quisquam magni doloremque reiciendis vero aliquid quibusdam sequi neque
        sunt?
      </p>
      <h5 className="date-wrapper">{moment("2022-04-05").fromNow()}</h5>
    </section>
  );
};

export default Chat;
