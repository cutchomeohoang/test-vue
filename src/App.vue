<template>
  <div id="app">
    <template>
      <v-toolbar color="teal lighten-3">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>FoodsBake</v-toolbar-title>
        
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/home">Home</v-btn>
          <v-btn flat to="/profile">My Profile</v-btn>
          <v-btn flat to="/noties">Unread Notifications</v-btn>
        </v-toolbar-items>
         <v-spacer></v-spacer>
        <v-btn flat id="logout">Logout</v-btn>
      </v-toolbar>

      <v-container>
          <v-layout>
              <v-flex md8 id="middle_man">
                  <router-view></router-view>
              </v-flex>  
          </v-layout>
      </v-container>

    </template>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {

    },
    data() {
      return {

      }
    },
    computed: {
      
    },
    created() {
      this.$store.dispatch('getPosts')
      this.$store.dispatch('getUsers')
    }
  }

</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Merriweather');
    #app {
        font-family: 'Merriweather', serif;
    }
    #app .v-btn {
      text-transform: none;
    }
    #app #middle_man {
      margin: 0 auto;
    }
    #app .title_table {
       text-align: center;
    }
    
</style>
