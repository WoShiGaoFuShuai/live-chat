<template>
  <div>{{ error }}</div>
  <div v-if="documents" class="messages-window" ref="messages">
    <div v-for="doc in changedTimeInDocuments" :key="doc.id">
      <div class="message-item">
        <h4 class="time">{{ doc.createdAt }} ago</h4>
        <h3 class="name">{{ doc.name }}</h3>
        : <span class="msg"> {{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";
export default {
  setup() {
    //COMPOSABLES
    const { error, documents } = getCollection("messages");

    //COMPUTED

    const changedTimeInDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(new Date(doc.createdAt.toDate()));
          return { ...doc, createdAt: time };
        });
      }
    });

    //auto-scroll
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop =
        messages.value.scrollHeight - messages.value.offsetHeight;
    });

    return { error, documents, changedTimeInDocuments, messages };
  },
};
</script>

<style lang="scss" scoped>
.messages-window {
  background-color: #fafafa;
  overflow: auto;
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  padding: 10px 30px;
  max-height: 450px;

  .message-item {
    padding: 5px 10px;
    max-width: 400px;
    text-align: left;
    box-shadow: 3px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-bottom: 10px;

    .time {
      font-weight: 300;
      font-style: italic;
      margin: 5px 0 0 0;
      text-align: right;
    }
    .name {
      display: inline-block;
      margin-bottom: 10px;
      margin-top: 0;
    }
  }
}
</style>
