<template>
    <div>logging out</div>
</template>

<script>
export default {
    name: 'logout',
    created(){
        localStorage.removeItem('token')
        this.$router.push('/login')
    }
}
</script>