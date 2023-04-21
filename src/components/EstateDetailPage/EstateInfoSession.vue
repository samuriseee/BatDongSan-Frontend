<template>
    <div class="container">
        <div class="session-estate-info">
            <div class="content-left">
                <estate-highlight-images
                    :images="images"
                    :count="count"
                    @next-image="nextImage"
                    @prev-image="prevImage"
                />
            </div>
            <div class="content-righy"></div>
        </div>
    </div>
</template>

<script>
import EstateHighlightImages from './EstateHighlightImages.vue'
export default {
    components: { EstateHighlightImages },
    name: 'EstateInfoSession',
    comments: {
        EstateHighlightImages,
    },
    data() {
        return {
            images: [
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
                'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            ],
            count: 0,
        }
    },
    methods: {
        nextImage() {
            this.count += 1
            console.log(this.count)
        },
        prevImage() {
            this.count -= 1
            console.log(this.count)
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 936px;
    margin: 24px auto 0 auto;
    background: black;
}
</style>
