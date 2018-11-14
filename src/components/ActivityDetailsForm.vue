<i18n>
{
    "de": {
        "label-region": "Region Ihres Dialekts",
        "label-age": "Ihr Alter"
    }
}
</i18n>

<template>
    <div class="prereq">
        {{ details.canton }}
        <div v-bind:class="{'invalid': !details.canton}" class="form-field">
            <label>{{ $t('label-region') }}</label>
            <div class="custom-select">
                <select v-model="details.canton" name="canton" id="canton">
                    <option :key="r.value" v-for="r in regions" :value="r.value">{{r.label}}</option>
                    <template v-if="project.name==='Übersetzen'">
                        <option disabled>--------------</option>
                        <option :key="o.value" v-for="o in otherRegions" :value="o.value">{{o.label}}</option>
                    </template>
                </select>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                   <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
                <span class="error" v-if="errors.canton">Ihre Region ist erforderlich</span>
            </div>
        </div>
        <div v-bind:class="{'invalid': !details.age}" class="form-field">
            <label>{{ $t('label-age') }}</label>
            <div class="custom-select">
                <option disabled selected hidden>{{ $t('placeholder-age') }}</option>
                <select v-model="details.age" name="range" id="range">
                    <option :key="a.value" v-for="a in ageRange" :value="a.value">{{a.label}}</option>
                </select>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                   <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                </svg>
                <span class="error" v-if="errors.age">Ihre Altersgruppe ist erforderlich</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'ActivityDetailsForm',
      props: {
        project: {
          type: Object
        },
        regions: {
          type: Array,
          default: () => {
            return []
          }
        }
      },
      data () {
        return {
          details: {
            age: undefined,
            canton: undefined
          },
          errors: {
            canton: false,
            age: false
          },
          ageRange: []
        }
      }
    }
</script>

<style lang="scss" scoped>
    .form-field {
        display: block;
    }
</style>
