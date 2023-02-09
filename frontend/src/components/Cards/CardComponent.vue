<template>
    <div class="my_card">
        <div class="content top">
            <h3>{{ type }}</h3>
            <p class="percentage"><i class="fa fa-arrow-up"></i> {{ percentage }}</p>
        </div>

        <div class="content footer">
            <i :class="['fa icon', icon]"></i>

            <p class="qtd">{{ qtd.length }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: [ 'type', 'percentage', 'icon', 'qtd'
    ]
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';

.my_card {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $purple;
    padding: 15px;
    border-radius: 7px;
    color: #fff;

    .content {
        display: flex;
        justify-content: space-between;
    }

    .top {

        .percentage {
            color: $green;
        }
    }

    .footer {

        .icon {
            font-size: 40px;
        }

        .qtd {
            font-size: 30px;
            margin: 0;
        }
    }
}
</style>