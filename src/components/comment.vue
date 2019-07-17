<i18n>
  {
  "de": {
    "label-sentence-number": "Satz Nr."
  },
  "en": {
    "label-sentence-number": "Sentence Nr."
  }
  }
</i18n>

<template>
  <div v-if="comment" class="comment">
    <!--
    <button class="button button-icon button-user">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg>
    </button>
    -->
    <user-avatar class="avatar" :username="comment.info.username"></user-avatar>
    <p class="username">{{comment.info.username}} <span v-if="!noSentenceNr && !isNaN(comment.info.sentence)">({{ $t('label-sentence-number') }} {{comment.info.sentence+1}})</span></p>
    <p class="text">{{comment.content.text}}</p>
  </div>
</template>

<script>

    import UserAvatar from "@/components/shared/UserAvatar";

  export default {
    name: 'SingleComment',
      components: {
          UserAvatar
      },
    props: {
      comment: {
        type: Object,
        default: null
      },
      classes: {
        type: Number,
        default: 0
      },
      noSentenceNr: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss">
  @import '@/styles/theme.scss';
  @import '@/styles/shared/variables.scss';

  .comment {
    position: relative;

    .button.button-user {
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }

    p {
      padding-left: $spacing-5;

      &.username {
        padding-top: $spacing-1;
        margin-bottom: $spacing-1;
        color: $color-black-tint-50;

        span {
          font-size: $font-size-small;
        }
      }
      &.text {
        margin-bottom: $spacing-3;
      }
    }

  }

  @media only screen and (min-width: $viewport-tablet-portrait) {

    .comment {
      p {
        padding-left: $spacing-6;
        &.username {
        }
        &.text {
          margin-bottom: $spacing-4;
        }
      }

    }

  }



</style>

