/*
 * Filename: .\src\Home Dashboard\UserDatabase.jsx
 * Path: c:\Users\20neu\Desktop\COS420\Team-G
 * Created Date: Friday, December 1st 2023, 10:40:36 am
 * Author: David Neufeld
 * Todo:
 * function to get users that match time and location criteria
 */
import { db, storage } from './firebaseConfig';
import { collection, query, where,getDocs, doc, updateDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { faker } from '@faker-js/faker';

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

export const GetNotificationsForuid = async (uid) => {
  const notificationsRef = collection(db, 'Notifications');
  const userQuery = query(notificationsRef, where('uid', '==', uid));

  try {
    const querySnapshot = await getDocs(userQuery);
    const notifications = [];
    querySnapshot.forEach((doc) => {
      const { uid, title, message, hasOptionalFeature } = doc.data();
      // Add selected fields to the notifications array
      notifications.push({
        id: uid,
        title: title,
        message: message,
        hasOptionalFeature: hasOptionalFeature,
      });
    });
    return notifications;
  } catch (error) {
    console.error('Error getting notifications:', error);
    throw error; // Handle this error in the calling function if needed
  }
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

export function generateNearbyCoordinate(base, variance) {
  return parseFloat(base) + (Math.random() * variance * (Math.random() > 0.5 ? 1 : -1));
}

export function addDriver(driverId) {
  const baseLatitude = 44.9019;
  const baseLongitude = -68.6688;
  const variance = 0.01; // Adjust the variance to spread out the drivers

  const driverData = {
      name: faker.person.fullName(), // Generate a random name
      location: {
          latitude: generateNearbyCoordinate(baseLatitude, variance),
          longitude: generateNearbyCoordinate(baseLongitude, variance)
      }
      // You can add more fields as needed
  };

  // Create a reference to the 'drivers' document
  const driverRef = doc(db, "drivers", driverId.toString());

  // Add the driver data
  setDoc(driverRef, driverData)
  .then(() => {
      console.log(`Driver ${driverId} successfully added!`);
  })
  .catch((error) => {
      console.error("Error adding driver: ", error);
  });
}

export async function getDrivers() {
  try {
      // Reference to the 'drivers' collection
      const driversRef = collection(db, "drivers");

      // Create a query against the collection
      const q = query(driversRef);

      // Execute the query
      const querySnapshot = await getDocs(q);

      // Map the query results to an array of driver data
      const drivers = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
      }));

      return drivers;
  } catch (error) {
      console.error("Error getting drivers: ", error);
      throw error; // You might want to handle this error more gracefully in a real app
  }
}