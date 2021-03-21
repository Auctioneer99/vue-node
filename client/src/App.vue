<template>
  <nav ref="nav" class="navbar navbar-light bg-light mb-5 ml-0 row w-100">
    <div class="col-1 m-0"></div>
    <div class="navbar-brand col-2 justify-content-center m-0">
      <h1>Ris</h1>
    </div>
    <ul class="nav justify-content-center col-6 m-0">
      <li class="nav-item">
        <router-link class="nav-link" to="/events"><button class="btn btn-light btn-lg">Users</button></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/events"><button class="btn btn-light btn-lg">Events</button></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/documents"><button class="btn btn-light btn-lg">Documents</button></router-link>
      </li>
    </ul>
    <ul class="nav justify-content-center w-100 col-3 m-0">
      <template v-if="!user">
      <li class="nav-item">
        <router-link class="nav-link" to="/signin"><button class="btn btn-light btn-lg">Sign In</button></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/signup"><button class="btn btn-light btn-lg">Sign Up</button></router-link>
      </li>
      </template>
      <template v-else>
        <li class="nav-item">
          <router-link class="nav-link" to='/username'><button class="btn btn-light btn-lg">{{user.attributes.nickname}}</button></router-link>
        </li>
        <li class="nav-item">
          <div class="nav-link"><button class="btn btn-light btn-lg" @click="$store.dispatch('logOut')">Log out</button></div>
        </li>
      </template>
    </ul>
  </nav>
  <div ref="navcontainer" class="container ml-auto mr-auto vh-100">
    <div class="border p-3 bg-white" style="height:700px;">
      <router-view v-slot="{ Component }">
        <transition name="component-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isHidden: false,
    }
  },
  computed: {
    user()  {
      return this.$store.state.auth.user;
    }
  },
  components: {
  },
  methods: {
  },
}
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.16s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>