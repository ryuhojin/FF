<template>
    <div class="notification-list">
        <notification-message/>
    </div>
</template>

<script>
import NotificationMessage from "./NotificationMessage"
export default {
    components:{
        NotificationMessage
    }
}
</script>

<style scoped>
    .notification-list{
        position:fixed;
        bottom:0;
        right:0;
        background-color:skyblue;
        margin-right:15px;
        height:100px;
        width:320px;
    }
</style>