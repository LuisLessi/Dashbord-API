<template>
    <div class="navbar">
        <h4 class="logo"><i class="fa fa-star"></i> Logo Marca</h4>
        <a href="" class="logout" @click.prevent="logout">Sair <i class="fa fa-sign-out-alt"></i></a>
    </div>
</template>

<script>
export default {
    name: "NavBar",

    methods: {
        logout(){
            this.$router.push('/')
        }
    },
}
</script>

<style lang="scss">
.navbar {

    .logo {
        color: #fff;
    }

    .logout{
        color: #fff;
        text-decoration: none;

    }

}
</style>