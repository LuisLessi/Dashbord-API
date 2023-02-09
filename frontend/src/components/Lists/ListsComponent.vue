<template>
    <div class="lists">
        <div class="top">
            <p><strong>{{ description }} &nbsp;</strong><span class="badge bg-info">{{ data.length }}</span></p>

        </div>

        <div class="content">
            <table class="table table-striped my_table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{ columns[0]}}</th>
                        <th scope="col">{{ columns[1]}}</th>
                        <th scope="col">{{ columns[2]}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td>
                            <p class="users">{{ item.name }}</p>
                        </td>
                        <div v-if="item.email">
                            <td>
                                <p class="users">{{ item.email }}</p>
                            </td>
                        </div>

                        <div v-else>
                            <td>
                                <p class="users">{{ item.price }}</p>
                            </td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListsComponent',
    props: ['data', 'description', 'columns']
}
</script>

<style lang="scss" scoped>
.lists {
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: #fff;
}

.users {
    font-size: 12px;
}
</style>