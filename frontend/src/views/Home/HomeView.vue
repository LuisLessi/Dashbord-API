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
                            <CardComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-user'" :qtd="clients" />
                        </div>
                        <div class="col-12 col-md-3">
                            <CardComponent :type="'produtos'" :percentage="'12%'" :icon="'fa-box'" :qtd="products" />
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
                            <ListsComponent :data="clients" :description="'Clientes'" :columns="['Nome', 'Email']"/>
                        </div>

                        <div class="col-12 col-md-6">
                            <ListsComponent :data="products" :description="'Produtos'" :columns="['Nome', 'Valor']"/>
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
import { http } from '../../services/api';

export default {
    data() {
        return {
            clients: [],
            products: []
        }
    },

    mounted() {
        this.getUsers()
    },
    methods: {
     async getUsers() {
            try {
                let response = await http.get('/')
                if(response.status == 200){
                console.log(response.data)
                this.clients = response.data.clients
                this.products = response.data.products
            } else{
                console.error('Ocorreu um erro na API')
            }
            } catch (error) {
                console.error(error)
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