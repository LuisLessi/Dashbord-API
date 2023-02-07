<template>
    <div class="main">
        <div class="sidebar">
            <SideBar/>
        </div>
        <div class="content-right">
            <div class="navbar">
                <NavBar/>
            </div>

            <div class="pages">
                
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'

export default {
    components: {
    SideBar,
    NavBar
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped>

</style>