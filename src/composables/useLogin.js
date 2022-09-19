import { projectAuth } from "@/firebase/config";
import { ref } from "vue";


const error = ref(null);

const login = async (email, password) => {
error.value = null;

try {
   const res = await projectAuth.signInWithEmailAndPassword(email, password)
if (!res) {
   throw Error ('Sorry, we can not find this user');
}
} catch (err) {
   error.value = err.message;
}

}

const useLogin = () => {
   
return {login, error}
}

export default useLogin;