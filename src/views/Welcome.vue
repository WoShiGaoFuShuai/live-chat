<template>
  <div class="container">
    <div v-if="showLoginPage">
      <LoginForm @goToChatroom="redirectToChatroom" />
      <p class="after-form">
        No account yet?
        <a @click="showLoginPage = !showLoginPage" href="#">Sign up</a>
        instead.
      </p>
    </div>
    <div v-else>
      <SignupForm @goToChatroom="redirectToChatroom" />
      <p class="after-form">
        No account yet?
        <a @click="showLoginPage = !showLoginPage" href="#">Login</a>
        instead.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
import { useRouter } from "vue-router";
export default {
  name: "Welcome",
  components: {
    LoginForm,
    SignupForm,
  },

  setup() {
    //REFS
    const showLoginPage = ref(true);
    const router = useRouter();

    // FUNCTIONS
    const redirectToChatroom = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLoginPage, redirectToChatroom };
  },
};
</script>

<style lang="scss">
.container {
  width: 90%;
  max-width: 960px;
  background-color: white;
  margin: 50px auto;
  border-radius: 20px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }

  form {
    padding: 50px 0;

    h2 {
      font-size: 30px;
      text-transform: uppercase;
    }

    label {
      display: block;
      margin: 30px 0;

      input {
        padding: 15px;
        border-radius: 20px;
        max-width: 350px;
        width: 100%;
        border: 1px solid #eee;
        outline: none;
        transition: border-color 0.7s ease;

        &:focus {
          border-color: #e3e1ff;
        }
      }
    }

    button {
      border-radius: 20px;
      padding: 10px 20px;
      background-color: #5ae4ca;
      color: white;
      font-weight: 700;
      border: 0;
      cursor: pointer;

      &:hover {
        background-color: #67ffe3;
      }
    }
  }

  .after-form {
    padding-bottom: 30px;
    font-size: 24px;
  }

  .error {
    color: rgb(212, 43, 43);
    margin: 15px 0;
  }
}
</style>
