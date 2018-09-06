 <template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Root',
    data() {
      return {
        projects: [],
        userID: undefined
      }
    }
  }
</script>
