<template>
  <div>
    <form @click.prevent="">
      <h2>Signup</h2>

      <label>
        <input type="text" required placeholder="nickname" v-model="nickname" />
      </label>

      <label>
        <input type="email" required placeholder="email" v-model="email" />
      </label>

      <label>
        <input
          type="password"
          required
          placeholder="password"
          v-model="password"
        />
      </label>

      <div class="error">{{ error }}</div>

      <button @click.prevent="handleClick">Sign up</button>
    </form>

    <!-- <p class="after-form">
      Already have an account? <a @click="switchForm" href="">Login</a> instead.
    </p> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

export default {
  name: "SignupForm",
  setup(props, context) {
    //REFS
    const nickname = ref("");
    const email = ref("");
    const password = ref("");

    //COMPOSABLES
    const { error, signup } = useSignup();

    //FUNCTIONS
    const handleClick = async () => {
      if (nickname.value && email.value && password.value) {
        await signup(email.value, password.value, nickname.value);
        if (error.value === null) {
          context.emit("goToChatroom");
          nickname.value = "";
          email.value = "";
          password.value = "";
        }
      }
    };

    return { nickname, email, password, handleClick, error };
  },
};
</script>
