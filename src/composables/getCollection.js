import { projectFirestore } from "@/firebase/config"
import { ref, watchEffect } from "vue"



const getCollection = (collectionName) => {
const error = ref(null);
const documents = ref(null);


   const collectionRef = projectFirestore.collection(collectionName).orderBy('createdAt')

  const unsub = collectionRef.onSnapshot((snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
         doc.data().createdAt && results.push({...doc.data(), id: doc.id})
      })
      documents.value = results
      error.value = null;
   }, (err) => {
      error.value = 'Could not fetch data';
      documents.value = null;
   })

   watchEffect((onInvalidate) => {
onInvalidate(() => unsub())
   })
      
   return {error, documents}
}


export default getCollection;