<template>
  <div id="home">
    <h1 class="title_table">Mutual data from Home</h1>
    <h2>Posts</h2>
    <v-data-table :items="posts" class="elevation-1" hide-actions hide-headers>
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.title }}</td>
      </template>
    </v-data-table>
    <h2>Users</h2>
    <v-data-table :items="users" class="elevation-1" hide-actions hide-headers>
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.email }}</td>
        <td class="text-xs-center">{{ props.item.first_name }}</td>
        <td class="text-xs-center">{{ props.item.last_name }}</td>
        <td class="text-xs-center"><v-img :src="props.item.avatar"></v-img></td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState({
        posts: state => state.posts,
        users: state => state.users
      })
    },
  }

</script>
