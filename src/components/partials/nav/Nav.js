import img from "../../../images/img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyMessages } from "../../../actions/actions";

const Nav = ({ company, user }) => {
  const dispatch = useDispatch();

  const handleNavItemClick = (e) => {
    const navItems = document.querySelectorAll("#nav-item");

    navItems.forEach((item, key) => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
          dispatch(
            fetchCompanyMessages(
              user.result.username,
              item.getAttribute("data-target")
            )
          );
          item.classList.add("active");
        }

        handleRemovingActive(key, navItems);
      });
    });
  };

  function handleRemovingActive(index, arr) {
    arr.forEach((item, key) => {
      if (key != index) {
        item.classList.remove("active");
      }
    });
  }

  return (
    <li
      onLoad={handleNavItemClick}
      className="company-wrapper flx"
      id="nav-item"
      data-target={company.companyUsername}
    >
      <img src={img} />
      <h4 className="bold">{company.companyName}</h4>
      <p className="num">0</p>
    </li>
  );
};

export default Nav;
