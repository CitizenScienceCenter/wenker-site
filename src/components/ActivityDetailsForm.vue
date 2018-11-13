<template>
    <div class="prereq">
        <div v-bind:class="{'invalid': !userDetails.canton}" class="form-field">
            <label>Region Ihres Dialekts</label>
            <div class="select-wrapper">
                <select v-model="userDetails.canton" name="canton" id="canton" placeholder="Region you have spent most of your life">
                    <option :key="r.value" v-for="r in regions" :value="r.value">{{r.label}}</option>
                    <template v-if="project.name==='Übersetzen'">
                        <option disabled>--------------</option>
                        <option :key="o.value" v-for="o in otherRegions" :value="o.value">{{o.label}}</option>
                    </template>
                </select>
                <span class="error" v-if="errors.canton">Ihre Region ist erforderlich</span>
            </div>
        </div>
        <div v-bind:class="{'invalid': !userDetails.age}" class="form-field">
            <label>Alter</label>
            <div class="select-wrapper">
                <select v-model="userDetails.age" name="range" id="range" placeholder="Age Range">
                    <option :key="a.value" v-for="a in ageRange" :value="a.value">{{a.label}}</option>
                </select>
                <span class="error" v-if="errors.age">Ihre Altersgruppe ist erforderlich</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityDetailsForm"
    }
</script>

<style scoped>

</style>