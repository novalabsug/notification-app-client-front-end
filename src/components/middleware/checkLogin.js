export const isUserLoggedIn = () => {
  if (
    document.cookie
      .split(";")
      .filter((item) => item.trim().startsWith("notification_mail_app_session"))
      .length <= 0
  ) {
    window.location.assign("/signin");
  }
};
