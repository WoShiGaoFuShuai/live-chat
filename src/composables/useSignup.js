import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);


const signup = async (email, password, nickname) => {
   error.value = null

   try {
   const res = await projectAuth.createUserWithEmailAndPassword(email, password);
   if (!res) {
      throw Error('Sorry, Could not sign up a user')
   }
   await res.user.updateProfile({displayName: nickname})

   } catch (err) {
   error.value = err.message;
   }

}

const useSignup = () => {
   return {error, signup}
}

export default useSignup