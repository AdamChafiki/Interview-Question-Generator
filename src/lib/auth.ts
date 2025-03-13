// src/lib/firebase/auth.ts
import { 
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
  NextOrObserver,
  Unsubscribe
} from 'firebase/auth';
import { auth } from './firebase';


export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};


export const logOut = async (): Promise<void> => {
  return await signOut(auth);
};


export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};


export const onAuthStateChange = (callback: NextOrObserver<User>): Unsubscribe => {
  return onAuthStateChanged(auth, callback);
};
