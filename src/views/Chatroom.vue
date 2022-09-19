<template>
  <div class="title">CHATROOM</div>
  <Navbar />
  <ChatWindow />
  <NewChatForm />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";

export default {
  components: {
    Navbar,
    NewChatForm,
    ChatWindow,
  },
};
</script>

<style>
.title {
  margin: 25px 0;
  font-weight: 600;
}
</style>
