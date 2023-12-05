/*
 * Filename: .\src\Home Dashboard\UserDatabase.jsx
 * Path: c:\Users\20neu\Desktop\COS420\Team-G
 * Created Date: Friday, December 1st 2023, 10:40:36 am
 * Author: David Neufeld
 * Todo:
 * function to get users that match time and location criteria
 */
import { db, storage } from './firebaseConfig';
import { collection, query, where, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

export const GetUserByUid = (uid) => {
    const userRef = doc(db, "UserInformation", uid);
    const [snapshot, loading, error] = useDocument(userRef);
    if(loading){
        return null
    }

    if (error) {
        console.error(error);
        return null;
    }
    
    if (snapshot && snapshot.exists()) {
        return snapshot.data();
    }
    return null;
    
}

export const GetAllUsers = ( ) => {
    const [value, loading, error] = useCollection(collection(db,"UserInformation"));
    return [value, loading, error];
};

export const GetAllWithMajor = (major) => {
    const userQuery = query(collection(db, "UserInformation"), where("major", "==", major));
    const [value, loading, error] = useCollection(userQuery);
    return [value, loading, error];
};

export const UpdateUserInformation = (uid, UserInformation) => {
    updateDoc(doc(db, "UserInformation", uid), UserInformation);
    return;
}

export const UpdateUserImage = (file, uid) => {
  // Create a reference to the storage location
  const storageRef = ref(storage, `profile_pictures/${file.name}`);

  // Start the upload task
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // handle progress
    },
    (error) => {
      console.log(error);
      // handle error
    },
    () => {
      // Get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        // Save this URL to the user's profile in Firestore
        const userRef = doc(db, "UserInformation", uid);
        updateDoc(userRef, { profileImageUrl: url });
      });
    }
  );
};