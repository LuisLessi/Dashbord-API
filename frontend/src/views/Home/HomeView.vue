<template>
    <Dashboard>
        <template v-slot:slot-pages>
            <div class="content-pages">
                <header class="title_pages">
                    <p>Início</p>
                </header>

                <div>
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-user'" :qtd="'7590'" />
                        </div>
                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa-box'" :qtd="'350'" />
                        </div>
                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Serviços'" :percentage="'3%'" :icon="'fa-store'" :qtd="'270'" />
                        </div>
                        <div class="col-12 col-md-3">
                            <CardComponent :type="'Relatórios'" :percentage="'25%'" :icon="'fa-chart-bar'"
                                :qtd="'30'" />
                        </div>
                        <div class="col-12 col-md-3">

                        </div>
                    </div>
                </div>

                <div class="mt-5">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <ListsComponent :users="users"/>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Dashboard>
</template>

<script>
import Dashboard from '../../components/Dashboard/DashboardComponent.vue'
import CardComponent from '../../components/Cards/CardComponent.vue'
import ListsComponent from '../../components/Lists/ListsComponent.vue'
import axios from 'axios'

export default {
    data() {
        return {
            users: []
        }
    },

    mounted() {
        this.getUsers()
    },
    methods: {
     async getUsers() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            
            if(response.status == 200){
                console.log(response.data)
                this.users = response.data
            } else{
                console.error('Ocorreu um erro na API')
            }
        }
    },
    components: {
        Dashboard,
        CardComponent,
        ListsComponent
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped>

</style>