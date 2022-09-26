export const isUserLoggedIn = () => {
  let newState = {};
  if (localStorage.getItem("profile") != "") {
    newState = localStorage.getItem("profile");
  } else {
    newState = JSON.stringify(newState);
  }

  const user = JSON.parse(newState);

  let isLoggedIn = false;

  if (user?.result) {
    isLoggedIn = true;
  }

  if (!isLoggedIn) {
    window.location.assign("/signin");
  }
};
