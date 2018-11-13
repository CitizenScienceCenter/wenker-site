<template>
  <div>
    <form @submit.prevent="upload">
      <div class="">
          <span class="title">Upload a File</span>
  
            <div v-if="!embedded">
              <label for="name">ID</label>
              <input type="text" v-model="form.id" name="id" id="id" disabled/>
            </div>
  
            <div>
              <label for="file">Select Files</label>
              <!-- TODO test if this change to file upload affects anything -->
              <input type="file" name="file" @change="fileSelected($event)" :multiple="multiple" />
            </div>
        </div>
  
        <button v-if="!embedded" type="submit" ref='upload' class="md-primary" :disabled="loading">Upload</button>
      </form>
  
      <!-- TODO implement something like snackbar -->
      <!-- <md-snackbar :md-active.sync="fileSaved">Your media has been added!</md-snackbar> -->
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    name: 'UploadMedia',
    props: ['id', 'multiple', 'embedded'],
    data() {
      return {
        msg: 'Upload Here',
        form: {
          id: this.id || this.storeID || this.$route.query.id,
          // id: this.$route.query.id || this.$route.params.tid,
          attachment: {
            name: ''
          },
        },
        filenames: '',
        selected: null,
        fileSaved: false
      }
    },
    computed: mapGetters({
      storeID: state => state.upload.id,
      loading: state => state.settings.loading
    }),
    created() {
      console.log(this.embedded)
    },
    methods: {
      fileSelected(ev) {
        this.selected = ev
        this.upload()
      },
      upload() {
        for (let i = 0; i < this.selected.length; i++) {
          this.fileSaved = false
          const f = this.selected.item(i)
          this.form.attachment = f
          this.$ac.apis.Media.upload(this.form)
            .then(req => {
              console.log(req)
              this.$store.commit('upload/ADD_CONTENT', req.body.id)
              this.fileSaved = true
            })
            .catch((e) => {
              console.error(e)
            })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/components/upload.scss'>
</style>

