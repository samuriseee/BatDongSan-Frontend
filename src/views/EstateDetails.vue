<template>
    <div class="container">
        <SideBar />
        <div class="create-post">
            <SearchBarOnEstateList />
            <EstateInfoSessionVue />
        </div>
    </div>
</template>

<script>
import SearchBarOnEstateList from '@/components/ui/SearchBarOnEstateList.vue'
import EstateInfoSessionVue from '../components/EstateDetailPage/EstateInfoSession.vue'
export default {
    components: {
        SearchBarOnEstateList,
        EstateInfoSessionVue,
    },
}
</script>

<style></style>
