import { projectAuth } from "@/firebase/config";
import { ref } from "vue";


const error = ref(null)



const logout = async () => {
   try {
      const res = await projectAuth.signOut();
      return res
   } catch (err) {
      error.value = err.message
   }

}

const useLogout = () => {
   return {logout, error}

}

export default useLogout;