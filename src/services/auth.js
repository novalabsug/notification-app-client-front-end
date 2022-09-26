import { signInWithPopup, getAuth } from "firebase/auth";

const auth = getAuth();

const socialMediaAuth = async (provider) => {
  try {
    const res = await signInWithPopup(auth, provider);
    return res.user;
  } catch (err) {
    return err;
  }
};

export default socialMediaAuth;
