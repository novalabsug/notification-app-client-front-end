import auth from "./firebase-config";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
