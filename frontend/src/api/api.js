import store from "../redux/store";
import { projectFirestore } from "../firebase";
import { addToGroupsList, SET_GROUPS_LIST, setGroupsList } from "../redux/groupsListReducer";
import { SET_HOMEWORKS, setHomeworks } from "../redux/homeworkReducer";
import { initialize } from "redux-form";

import { collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import login from "../components/Login";


let getDocsFromFirebase = async (tableName) => {
  const querySnapshot = await getDocs(collection(projectFirestore, tableName));
  let result = [];
  querySnapshot.forEach((doc) => {
    result = [...result, { ...doc.data(), key: doc._key.path.segments[6] }];
  });

  return result;
}

let addToFirebase = async (tableName, data) => {
  try {
    const docRef = await addDoc(collection(projectFirestore, tableName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

let removeFromFirebase = async (tableName, docId) => {
  try {
    await deleteDoc(doc(projectFirestore, tableName, docId));
    console.log("Document deleted with ID: ", docId);
  } catch (e) {
    console.error("Error removing document: ", e);;
  }
}
let updateFirebaseDocument = async (tableName, docId, data) => {
  try {
    const docRef = doc(projectFirestore, tableName, docId);
    await updateDoc(docRef, { ...data });
    console.log(
        data
    )
    console.log("Document updated with ID: ", docId);
  } catch (e) {
    console.error("Error updating document: ", e);;
  }
}

export const usersAPI = {
  async getUsers() {
    const data = await getDocsFromFirebase('users')
    return data
  },
  async setUser(data) {
    const docRef = doc(projectFirestore, "users", data.uid);

    try {
      await updateDoc(docRef, data);
      console.log("User updated with ID: ", data.uid);
    } catch (e) {
      console.error("Error updating user: ", e);;
    }
  },

  async getUser(userId) {
    const docRef = doc(projectFirestore, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No user with id", userId);
    }
  },

}
export const authAPI = {
  async login(googleuid, email) {
    const usersRef = collection(projectFirestore, "users");
    const q = query(usersRef, where("uid", "==", googleuid));

    const querySnapshot = await getDocs(q);
    let user
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      user = doc.data()
    });

    if (user === undefined) {
      let data = {
        uid: googleuid,
        email: email,
        last_name: '',
        name: ''
      }

      addDoc(collection(projectFirestore, "users"), data)
        .then((docRef) => {
          console.log("User written with ID: ", docRef.id);

          store.dispatch({ type: "PROFILE/SET_PROFILE", data: data });
          store.dispatch({
            type: "@@redux-form/INITIALIZE", meta: {
              form: "Profile",
              keepDirty: false,
              updateUnregisteredFields: false
            }, payload: {
              name: data.name,
              last_name: data.last_name,
            }
          })
          initialize("Profile", {
            name: data.name,
            last_name: data.last_name,
          })
        }).catch((error) => {
          console.error("Error adding user: ", error);
        });
    } else {
      store.dispatch({ type: "PROFILE/SET_PROFILE", data: user });
      store.dispatch({
        type: "@@redux-form/INITIALIZE", meta: {
          form: "Profile",
          keepDirty: false,
          updateUnregisteredFields: false
        }, payload: {
          name: user.name,
          last_name: user.last_name,
        }
      })
    }
  }
}

export const homeworksAPI = {
  async getHomeworks() {
    const homeworksArray = await getDocsFromFirebase('homeworks')

    return homeworksArray;
  },

  async addHomework(data) {
    addToFirebase('homeworks', data).then(response => {
      homeworksAPI.getHomeworks().then(response => {
        store.dispatch({ type: SET_HOMEWORKS, data: response })
      });
    });
  },

  async deleteHomework(docId) {
    await removeFromFirebase('homeworks', docId)
    homeworksAPI.getHomeworks().then(response => {
      store.dispatch({ type: SET_HOMEWORKS, data: response })
    });
  },
}

export const groupsListAPI = {
  getGroupsList() {
    return getDocsFromFirebase('groups');
  },
  async addGroup(data) {
    addToFirebase('groups', data).then(response => {
      groupsListAPI.getGroupsList().then(response => {
        store.dispatch({ type: SET_GROUPS_LIST, data: response })
      });
    });
  },
  async deleteGroup(docId) {
    await removeFromFirebase('groups', docId)
    groupsListAPI.getGroupsList().then(response => {
      store.dispatch({ type: SET_GROUPS_LIST, data: response })
    });
  },
  async deleteStudentFromGroup(docId, groupId) {
    const docy = await doc(projectFirestore, "groups", groupId);
    const docySnap = await getDoc(docy)
    let oldStudents = docySnap.data().students
    const newStudents = oldStudents.filter((item) => item !== docId)
    await updateDoc(docy, {
      students: newStudents
    });
    groupsListAPI.getGroupsList().then(response => {
      store.dispatch({ type: SET_GROUPS_LIST, data: response })
    });
  },
  async updateGroup(docId, data) {
    const docy = await doc(projectFirestore, "groups", docId);
    const docySnap = await getDoc(docy)
    let oldStudents = docySnap.data().students
    const dataToSave = {
      lvl: data.lvl,
      lang: data.lang,
      name: data.name,
      students: [
        ...oldStudents,
        ...data.newStudents
      ]
    }

    updateFirebaseDocument("groups", docId, dataToSave).then(response => {
      console.log(response);
    })
    groupsListAPI.getGroupsList().then(response => {
      store.dispatch({ type: SET_GROUPS_LIST, data: response })
    });
  }
}

export const studentsAPI = {
  getStudents() {
    return getDocsFromFirebase('users');
  },
  async getStudentsFromGroup(record) {
    let result = []
    const docy = await doc(projectFirestore, "groups", record.key);
    const docySnap = await getDoc(docy)
    let group = docySnap.data()
    if (group.students.length > 0) {
      for (const student of group.students) {
        const docRef = doc(projectFirestore, "users", student);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          result = [...result, {...docSnap.data(), key: docSnap.id}]
        }
      }
    }
    return result
  }
}

