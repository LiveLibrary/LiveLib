<template>
    <v-app>
        <v-container>
            <v-text-field v-model="msg" />
            <div>{{ msg }}</div>
        </v-container>
    </v-app>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Hello Vuetify!");
</script>
