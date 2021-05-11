<template>
  <div :class="{ 'mt-100': $route.name === 'chatting' }">
    <chat-window
      :currentUserId="currentUserId"
      :rooms="rooms"
      :messages="messages"
      :styles="styles"
      @fetchMessages="fetchMSG"
      @sendMessage="sendMessage"
      @editMessage="editMessage"
      @openFile="openFile"
      :loadingRooms="false"
      :messagesLoaded="true"
      :showAddRoom="false"
      :showReactionEmojis="false"
    />
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="imageUrl" style="max-height: 100%;" />
    </el-dialog>
  </div>
</template>

<script>
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
import Axios from 'axios'

export default {
  components: {
    ChatWindow,
  },
  data() {
    return {
      chats: [],
      rooms: [],
      data: [],
      messages: [],
      imageUrl: null,
      dialogVisible: false,
      currentUserId: this.$store.state.user.id,
      styles: {
        general: {
          color: '#0a0a0a',
          backgroundInput: '#fff',
          colorPlaceholder: '#9ca6af',
          colorCaret: '#1976d2',
          colorSpinner: '#333',
          borderStyle: '1px solid #e1e4e8',
          backgroundScrollIcon: '#fff',
        },

        container: {
          border: 'none',
          borderRadius: '4px',
          boxShadow: '0px 3px 1px 1px #FFF',
          height: '100%',
        },

        header: {
          background: '#fff',
          colorRoomName: '#0a0a0a',
          colorRoomInfo: '#9ca6af',
        },

        footer: {
          background: '#f8f9fa',
          borderStyleInput: '1px solid #e1e4e8',
          borderInputSelected: '#1976d2',
          backgroundReply: 'rgba(0, 0, 0, 0.08)',
        },

        content: {
          background: '#f8f9fa',
        },

        sidemenu: {
          background: '#fff',
          backgroundHover: '#f6f6f6',
          backgroundActive: '#e5effa',
          colorActive: '#1976d2',
          borderColorSearch: '#e1e5e8',
        },

        dropdown: {
          background: '#fff',
          backgroundHover: '#f6f6f6',
        },

        message: {
          background: '#fff',
          backgroundMe: '#ccf2cf',
          color: '#0a0a0a',
          colorStarted: '#9ca6af',
          backgroundDeleted: '#dadfe2',
          colorDeleted: '#757e85',
          colorUsername: '#9ca6af',
          colorTimestamp: '#828c94',
          backgroundDate: '#e5effa',
          colorDate: '#505a62',
          backgroundReply: 'rgba(0, 0, 0, 0.08)',
          colorReplyUsername: '#0a0a0a',
          colorReply: '#6e6e6e',
          backgroundImage: '#ddd',
          colorNewMessages: '#1976d2',
          backgroundReaction: '#eee',
          borderStyleReaction: '1px solid #eee',
          backgroundReactionHover: '#fff',
          borderStyleReactionHover: '1px solid #ddd',
          colorReactionCounter: '#0a0a0a',
          backgroundReactionMe: '#cfecf5',
          borderStyleReactionMe: '1px solid #3b98b8',
          backgroundReactionHoverMe: '#cfecf5',
          borderStyleReactionHoverMe: '1px solid #3b98b8',
          colorReactionCounterMe: '#0b59b3',
        },

        markdown: {
          background: 'rgba(239, 239, 239, 0.7)',
          border: 'rgba(212, 212, 212, 0.9)',
          color: '#e01e5a',
          colorMulti: '#0a0a0a',
        },

        room: {
          colorUsername: '#0a0a0a',
          colorMessage: '#67717a',
          colorTimestamp: '#a2aeb8',
          colorStateOnline: '#4caf50',
          colorStateOffline: '#ccc',
          backgroundCounterBadge: '#0696c7',
          colorCounterBadge: '#fff',
        },

        emoji: {
          background: '#fff',
        },

        icons: {
          search: '#9ca6af',
          add: '#1976d2',
          toggle: '#0a0a0a',
          menu: '#0a0a0a',
          close: '#9ca6af',
          closeImage: '#fff',
          file: '#1976d2',
          paperclip: '#1976d2',
          closeOutline: '#000',
          send: '#1976d2',
          sendDisabled: '#9ca6af',
          emoji: '#1976d2',
          emojiReaction: '#828c94',
          document: '#1976d2',
          pencil: '#9e9e9e',
          checkmark: '#9e9e9e',
          checkmarkSeen: '#0696c7',
          eye: '#fff',
          dropdownMessage: '#fff',
          dropdownMessageBackground: 'rgba(0, 0, 0, 0.25)',
          dropdownScroll: '#0a0a0a',
        },
      },
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    fetchMSG(room) {
      console.log(room)
      Axios.get('page/chat?roomId=' + room.room.roomId).then((res) => {
        this.messages = res.data
      })
      // this.messages = this.data.filter(
      //   (x) => x.sender_id == room.room.roomId || x.to == room.room.roomId,
      // )
      // console.log(this.messages);
    },
    openFile(e) {
      this.dialogVisible = true
      this.imageUrl = e.message.file.url
      console.log(e)
    },
    getData() {
      Axios.get('page/chat').then((res) => {
        this.data = res.data.data
        this.rooms = res.data.rooms
        this.users = res.data.users.map(function (u) {
          return {
            _id: u.id,
            username: u.name,
            avatar: u.profile,
            status: {
              state: 'online',
              last_changed: 'today, 14:30',
            },
          }
        })
      })
    },
    editMessage(e) {
      console.log(e)
      const data = new FormData()
      data.append('to', e.roomId)
      data.append('message', e.newContent)
      data.append('file', e.file.blob)
      const last = this.messages.filter((x) => x._id == e.messageId)[0]
      const index = this.messages.indexOf(last)
      Axios.post('page/chat/' + e.messageId, data).then((res) => {
        Object.assign(this.messages[index], res.data)
      })
    },
    sendMessage(event) {
      console.log({
        roomId: event.roomId,
        content: event.content,
        file: event.file,
        replyMessage: event.replyMessage,
        from: this.$store.state.user.id,
      })
      const data = {
        to: event.roomId,
        message: event.content,
        file: event.file,
      }
      Axios.post('page/chat', data).then((res) => {
        this.messages.push(res.data)
      })
    },
  },
}
</script>
<style scoped>
.mt-100 {
  margin-top: 80px;
}
.room-header .app-border-b {
  position: fixed !important;
}
</style>
