import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'





const firebaseConfig = {
    apiKey: "AIzaSyAIBuTf4inqFW5UCWQCccLznKZZ6C7Uj3Y",
    authDomain: "bwaji-db.firebaseapp.com",
    projectId: "bwaji-db",
    storageBucket: "bwaji-db.appspot.com",
    messagingSenderId: "107031450717",
    appId: "1:107031450717:web:76f025e30a0d2f4e06e9b4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth =getAuth();
  export const signInWithGooglePopup =() => signInWithPopup(auth,provider)
  export const signInWithGoogleRedirect =() => signInWithRedirect(auth,provider)

   export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db,'users',userAuth.uid)
     console.log(userDocRef);

     const userSnapshot= await getDoc(userDocRef)
     console.log(userSnapshot);
     console.log(userSnapshot.exists());


     if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      }catch (error){
          console.log('error creating user',error.message);
        }
      }
     return userDocRef;
  };