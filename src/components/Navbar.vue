<template>
  <nav v-if="user">
    <div>
      <p>
        Hi there, <span class="bold"> {{ user.displayName }} </span>
      </p>
      <p>
        You logged in as <span class="bold"> {{ user.email }} </span>
      </p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
  name: "Navbar",
  setup() {
    //COMPOSABLES
    const { logout, error } = useLogout();
    const { user } = getUser();
    const router = useRouter();
    //FUNCTIONS
    const handleClick = async () => {
      const res = await logout();

      if (!error.value) {
        router.push({ name: "Welcome" });
      }
    };

    return { handleClick, user };
  },
};
</script>

<style lang="scss" scoped>
nav {
  margin-top: 80px;
  background-color: white;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 20px 20px 0 0;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 400;
    text-align: left;

    .bold {
      font-weight: 600;
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
</style>
