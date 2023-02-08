<template>
    <Dashboard>
        <template v-slot:slot-pages>
            <div class="content-pages">
                <header class="title_pages">
                    <p>Produtos</p>
                </header>
            </div>
        </template>
    </Dashboard>
</template>

<script>
import Dashboard from '../../components/Dashboard/DashboardComponent.vue'

export default {
    components: {
        Dashboard,
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped>

</style>