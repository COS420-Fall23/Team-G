/*
 * Filename: .\src\Home Dashboard\UserDatabase.jsx
 * Path: c:\Users\20neu\Desktop\COS420\Team-G
 * Created Date: Friday, December 1st 2023, 10:40:36 am
 * Author: David Neufeld
 * Todo:
 * function to get users that match time and location criteria
 */
import { db } from './firebaseConfig';
import { collection, query, where, doc } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import SearchResult from './Home Dashboard/SearchResult';

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