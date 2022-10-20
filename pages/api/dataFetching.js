import { initializeApp } from "firebase/app";
import {getFirestore, query, where, collection, getDocs} from "firebase/firestore";

/// INITIALIZE fire FIREBASE and FIRESTORE
const firebaseConfig = {
    apiKey: "AIzaSyDPGmgTxlAsVkakZrGbs8NTF2r0RcWu_ig",
    authDomain: "luminous-lambda-364207.firebaseapp.com",
    projectId: "luminous-lambda-364207",
    storageBucket: "luminous-lambda-364207.appspot.com",
    messagingSenderId: "518969290682",
    appId: "1:518969290682:web:d7be744cb378ec83d4f783"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore()
///  INITIALIZE FIREBASE and FIRESTORE
/// FETCHING FUNCTIONS

const allPaymentsCollection = collection(firestore, "/units/18572 cull canyon/payments")


export async function fetchUnpaidObjArraySpecific(url) {
    const allUnpaidPaymentsCollection = query(allPaymentsCollection, where("url", "==", url))
    return new Promise(function(resolve, reject) {
        getDocs(allUnpaidPaymentsCollection).then(snapshot => {
            let returnObjArry = [];
            snapshot.docs.forEach(elem => returnObjArry.push(elem.data()));
            resolve(returnObjArry)
        })
    })
}

export async function fetchUnpaidObjArray() {
    const allUnpaidPaymentsCollection = query(allPaymentsCollection, where("status", "==", "unpaid"))
    return new Promise(function(resolve, reject) {
        getDocs(allUnpaidPaymentsCollection).then(snapshot => {
            let returnObjArry = [];
            snapshot.docs.forEach(elem => returnObjArry.push(elem.data()))
            resolve(returnObjArry)
        })
    })
}

export async function fetchNotUnpaidObjArray(){
    return new Promise(function(resolve, reject) {
        const notUnpaidQuery = query(collection(getFirestore(),"units/18572 cull canyon/payments"), where("status", "!=", "unpaid"))
        getDocs(notUnpaidQuery).then(snapshot => {
            let notUnpaidArry = [];
            snapshot.docs.forEach(elem => notUnpaidArry.push(elem.data()))
            resolve(notUnpaidArry)
        })
    })
}
export async function fetchPropertyInfoObj() {
    const propertyInfoCollection = collection(firestore, "/units/18572 cull canyon/info")
    return new Promise(function(resolve, reject) {
        getDocs(propertyInfoCollection).then(snapshot => {
            let unpaidArry = [];
            snapshot.docs.forEach(elem => unpaidArry.push(elem.data()))
            resolve(... unpaidArry)
        })
    })
}