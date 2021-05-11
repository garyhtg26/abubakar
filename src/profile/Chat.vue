<template>
  <main id="chat">
    <chat-vue />
  </main>
</template>

<script>
import chatVue from "../form/chat.vue";

export default {
  el: "#chat",
  components: {
    chatVue
  },
  data() {
    return {
      bobMessage: "",
      youMessage: "",
      messages: [
        {
          body: "Welcome to the chat, I'm Bob!",
          author: "bob"
        },
        {
          body: "Thank you Bob",
          author: "you"
        },
        {
          body: "You're most welcome",
          author: "bob"
        }
      ]
    };
  },
  methods: {
    sendMessage(direction) {
      if (!this.youMessage && !this.bobMessage) {
        return;
      }
      if (direction === "out") {
        this.messages.push({ body: this.youMessage, author: "you" });
        this.youMessage = "";
      } else if (direction === "in") {
        this.messages.push({ body: this.bobMessage, author: "bob" });
        this.bobMessage = "";
      } else {
        alert("something went wrong");
      }
      Vue.nextTick(() => {
        let messageDisplay = this.$refs.chatArea;
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      });
    },
    clearAllMessages() {
      this.messages = [];
    }
  }
};
</script>

<style scoped lang="scss">
.headline {
  text-align: center;
  font-weight: 100;
  color: white;
}
.chat-area {
  /*   border: 1px solid #ccc; */
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  max-width: 350px;
  margin: 0 auto 2em auto;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: 0.5em;
  /*   margin-bottom: .5em; */
  font-size: 0.8em;
}
.message-out {
  background: #407fff;
  color: white;
  margin-left: 50%;
}
.message-in {
  background: #f1f0f0;
  color: black;
}
.chat-inputs {
  display: flex;
  justify-content: space-between;
}
#person1-input {
  padding: 0.5em;
}
#person2-input {
  padding: 0.5em;
}
</style>
