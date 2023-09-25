<template>
  <div class="chat-container">
    <div 
      class="chat-balloon" 
      :class="{'pulse': state.msgCounter > 0}"
      @click="state.opened = !state.opened"
      :msg-counter="state.msgCounter"
    >
      <icon class="chat-icon" icon="comment-dots"></icon>
    </div>
    <div v-show="state.opened">
      <div class="chat shadow is-flex is-flex-direction-column">
        <div class="chat-header is-flex is-align-items-center pb-2">
          <div class="mr-2 is-relative user-img-container is-flex is-align-items-center">
            <icon icon="user-circle" class="user-icon has-text-grey fs-24"></icon>
            <div class="status-dot"></div>
          </div>
          <div class="is-flex is-flex-direction-column">
            <span class="has-text-weight-medium mb-0">Bianca</span>
            <span class="fs-10 status-text">Online</span>
          </div>
        </div>
        <div class="chat-body is-flex-grow-1">
          <div class="messages">
            <div 
              v-for="msg, key in state.messages" 
              :key="key"
              class="custom-margin"
            >
              <span 
                class="message"
                :class="msg.owner ? 'user-msg' : 'friends-msg'"
              >{{ msg.text }}</span>
            </div>
          </div>
        </div>
        <div class="chat-footer">
          <input 
            placeholder="start typing..." 
            type="text" 
            class="input is-small"
            @keydown.enter="sendMessage()"
            v-model.trim="state.message"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Message {
  owner: boolean;
  text: string;
}

interface State {
  msgCounter: number;
  opened: boolean;
  message: string;
  messages: Message[]
}

const state: State = reactive({
  msgCounter: 1,
  opened: false,
  message: '',
  messages: []
})

function sendMessage() {
  if (state.message === '') return

  state.messages.push({
    owner: true,
    text: state.message
  })
  state.message = ''
}

</script>

<style scoped lang="scss">
.chat-container {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1000;

  & .chat-balloon {
    position: relative;
    font-size: 30px;
    color: var(--link);
    cursor: pointer;
    z-index: 1;

    & .chat-icon {
      z-index: 2;
    }

    &::after {
      content: attr(msg-counter);
      font-size: 12px;
      position: absolute;
      border-radius: 50%;
      background-color: var(--danger);
      color: white;
      font-weight: 600;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -1px;
      right: -11px;
      z-index: 2;
    }

    &.pulse::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: -1;
      background-color: hsl(217, 100%, 78%);
      animation-name: pulse;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }

  & .chat {
    position: absolute;
    bottom: 30px;
    right: 35px;
    width: 300px;
    height: 400px;
    border-radius: 6px;
    border: 1px solid rgb(240, 240, 240);
    background-color: white;
    padding: 8px;
    font-size: 14px;
    z-index: 2;

    &-header {
      border-bottom: 1px solid rgb(235, 235, 235);

      & .status-text {
        line-height: 8px;
      }

      & .user-img-container {

        &::before {
          content: '';
          border: 4px solid rgb(110, 110, 110);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          z-index: -1;
        }
      }

      & .user-icon {
        border: 0.07em solid rgb(110, 110, 110);
        border-radius: 50%;
      }

      & .status-dot {
        position: absolute;
        bottom: -1px;
        right: -1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 0.09em solid rgb(110, 110, 110);
        background-color: var(--success);
      }
    }

    &-body {
      display: flex;
      align-items: flex-end;
      padding: 7px 0;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

      & .messages {
        display: flex;
        flex-direction: column;
        width: 100%;

        & .custom-margin {
          &:not(:last-child) {
            margin-bottom: 4px;
          }
        }

        & .message {
          border-radius: 4px;
          padding: 4px 6px;
          font-size: 13px;
        }

        & .user-msg {
          background-color: rgb(194, 194, 255);
          float: right;
        }

        & .friend-msg {
          background-color: rgb(255, 194, 194);
          float: left;
        }
      }
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
    width: 0px;
    height: 0px;
  }

  100% {
    opacity: 0;
    width: 80px;
    height: 80px;
  }
}
</style>
