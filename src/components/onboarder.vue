<template>
  <tutorial v-if="open" :has-mask="mask.enabled" :can-click-mask="mask.click" @toggle="toggleModal">
    <article v-cloak>
      <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{d.header}}</div>
          <div class="md-subhead">{{d.subheader}}</div>
        </md-card-header-text>

        <md-card-media md-big>
          <img :src="d.img" v-if="d.img">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button :disabled="step === 0" v-if="step > 0" @click="goTo(step -1)">Previous</md-button>
        <md-button :disabled="step === data.length - 1" v-if="data && step < (data.length)" @click="goTo(step + 1)">Next</md-button>
      </md-card-actions>
      </md-card>
      <section v-for="d in data" :key="d">
        <h3>{{d.title}}</h3>
        <div v-html="d.content"></div>
      </section>
   </article>
    <footer>
      <div class="forward-actions">
<!--         <button class="secondary skip" :disabled="isLastStep" v-show="!isLastStep" @click="skip(2)">Skip</button> -->
        <button class="primary next" :disabled="step === data.length - 1" v-if="data && step < data.length < 1" @click="next"><i class="fa fa-fw fa-lg" :class="nextIcon"></i></button>
        <button class="accent save" :disabled="!is" v-if="data && (data.length - 1)=== step" @click="finish"><i class="fa fa-fw fa-lg fa-check"></i></button>
      </div>
      <div class="step-dots" v-if="data && data.length > 0">
        <div class="step-dot" :key="n" v-for="n in data.length" :class="{active: n == step}" @click="goTo(n)"></div>
      </div>
      <div class="back-actions">
        <button class="secondary cancel prev" :disabled="step === 0" :v-if="step > 0" @click="prev"><i class="fa fa-fw fa-lg" :class="backIcon"></i></button>
      </div>
    </footer>
  </tutorial>
</template>
<script>
export default {
    name: 'tutorial',
    props: ['data', 'open', 'mask'],
    data() {
        return {
            step: 0
        }
    },
    methods: {
        goTo(index) {

        }
    }
}
</script>
<style lang="scss" scoped>
:root {
  --accent: #8fd1f2;
}

[v-cloak] {
  display: none;
}

tutorial {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__mask {
    background: rgba(#000,.65);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  &__wrapper {
    position: relative;
    width: 65vw;
    max-width: 60em;
    min-width: 30em;
    max-height: 65vh;
    height: 30em;
    background: #fff;
    color: #333;
    display: flex;
    flex-direction: var(--cross, column);
    border-radius: .2em;
    box-shadow: 0 0 0 1px rgba(0,0,0,.2), 0 1em 2em -1em;
  }
  &__x {
    cursor: pointer;
    font-size: 2em;
    line-height: .5;
    opacity: .15;
    &:hover {
      opacity: .65;
    }
  }
  &-enter-active,
  &-leave-active {
    transition: opacity .25s
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

// modal content sliders
article {
  flex: 1 1 100%;
  height: 100%;
  display: flex;
  flex-direction: var(--axis, row);
  overflow: hidden;
}
section {
  width: 100%;
  visibility: hidden;
  flex: 0 0 100%;
  padding: 2em;
  overflow: auto;
  will-change: transform;
  transform: translate(var(--x, 0%), var(--y, 0%));
  transition: transform 300ms ease-out;
  position: relative;
  h2,h3,h4 {
    margin-top: 0;
  }
  &.current {
    visibility: visible;
  }
}
footer {
  position: relative;
  text-align: right;
  display: flex;
  flex-direction: var(--axis-reverse, row-reverse);
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0 1px rgba(#000, .1);
  background: rgba(#000, .05);
  &:not(:empty) {
    padding: 1em;
  }
}

.step-dots {
  display: flex;
  flex-direction: var(--axis, row);
}
.step-dot {
  cursor: pointer;
  width: 1em;
  height: 1em;
  margin: .5ch;
  border-radius: 1em;
  background: currentColor;
  opacity: .2;
  transition: transform 100ms ease-out, opacity 150ms linear;
  &.active {
    opacity: .7;
    box-shadow: 0 0 1em -.25em;
  }
  &:hover {
    transform: scale(1.2)
  }
}
.forward-actions,
.back-actions {
  flex: 1;
  display: flex;
  flex-direction: var(--axis, row);
}
.forward-actions {
  justify-content: flex-end;
  // text-align: right;
}
.back-actions {
  justify-content: flex-start;
  // text-align: left;
}

// boring
*, *::before, *::after {box-sizing: border-box;}

a {
  color: var(--accent);
}

del {
  color: #ca1e34;
  font-style: italic;
}

p {
  line-height: 1.5;
}

/*body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background: snow;
  color: #333;
}*/

// broadal buttons
button {
  outline: none;
  font: inherit;
  line-height: 1;
  cursor: pointer;
  padding: .5em 1em;
  border-radius: .35em;
  color: rgba(#000, .7);
  background: rgba(#000, .1);
  border: 2px solid rgba(#000, .05);
  text-shadow: 0 1px 0 rgba(#fff, .4);
  transition: transform 50ms ease-out;
  will-change: transform;
  &:active {
    transform: scale(.95);
  }
  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 1em 0 var(--accent);
  }
  &[disabled] {
    opacity: .2;
    cursor: not-allowed;
  }
  &.primary {
    border-color: transparent;
    background: transparent;
    font-weight: bold;
    &:not([disabled]) {
      color: var(--accent);
    }
  }
  &.accent {
    background: var(--accent);
    &:not([disabled]) {
      color: #fff;
    }
  }
  &.secondary {
    border-color: transparent;
    background: transparent;
    &:not([disabled]) {
      color: rgba(#000, .4);
    }
  }
  &.cancel:not([disabled]) {
    color: var(--accent);
  }
}

</style>


