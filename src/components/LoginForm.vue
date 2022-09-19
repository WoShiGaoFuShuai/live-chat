<template>
  <div>
    <form @click.prevent="">
      <h2>Login</h2>
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

      <button @click.prevent="handleClick">Log in</button>
    </form>

    <!-- <p class="after-form">
      No account yet? <a @click="switchForm" href="#">Sign up</a> instead.
    </p> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";

export default {
  name: "LoginForm",
  setup(props, context) {
    //REFS
    const email = ref("");
    const password = ref("");

    // COMPOSABLES

    const { error, login } = useLogin();

    //FUNCTIONS
    const handleClick = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("goToChatroom");
        email.value = "";
        password.value = "";
      }
    };

    return { error, password, email, handleClick };
  },
};
</script>

<style lang="scss"></style>
