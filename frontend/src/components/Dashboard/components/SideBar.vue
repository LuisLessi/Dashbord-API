<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span><i class="fa fa-user"></i></span>
            </div>
            <div class="info">
                <p class="name">Luís Felipe</p>
                <p class="status">Online</p>
            </div>
        </div>

        <div class="menu">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar"
}
</script>

<style lang="scss">
.sidebar {

    .top {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 5px;
        margin-top: 70px;


        .avatar {
            margin-right: 10px;

            span {
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #CCC;
                font-size: 20px;
                color: #666666;
            }
        }
        .info{
            p{
                margin: 0;
                color: #fff
            }

            .name{
                font-size: 14px;

            }

            .status{
                font-size: 10px;
            }
        }
    }
}
</style>