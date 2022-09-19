<template>
  <div class="chat-form">
    <form @keypress.enter.prevent="sendSMStoData">
      <textarea
        v-model="message"
        placeholder="Type text and hit enter to send"
      ></textarea>
      <div class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import { timestamp } from "@/firebase/config";
import useCollection from "../composables/useCollection";

export default {
  setup() {
    //REFS
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("messages");

    //FUNCTUINS
    const sendSMStoData = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, sendSMStoData, user, error };
  },
};
</script>

<style lang="scss" scoped>
form {
  textarea {
    margin: 0 auto;
    min-height: 50px;
    width: 90%;
    max-width: 800px;
    padding: 20px 30px 0 30px;
    border: none;
    outline: none;
    border-radius: 0 0 20px 20px;
  }
}
</style>
