<template>
    <div class="highlight-images">
        <div class="image-large">
            <img :src="images[count]" alt="" />
            <div
                class="button-action-left"
                :class="{ hidden: this.count == 0 }"
                @click="$emit('prev-image')"
            >
                L
            </div>
            <div
                class="button-action-right"
                :class="{ hidden: this.count == images.length - 1 }"
                @click="$emit('next-image')"
            >
                R
            </div>
            <div class="current-page">1/11</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EstateHighlightImages',
    props: {
        images: {
            type: Array,
            required: true,
        },
        count: {
            type: Number,
            required: true,
        },
    },
    methods: {
        nextImage() {
            this.$emit('nextImage')
        },
        prevImage() {
            this.$emit('prevImage')
        },
    },
}
</script>

<style lang="scss" scoped>
.highlight-images {
    .image-large {
        position: relative;
        img {
            width: 100%;
        }
        .button-action-left,
        .button-action-right {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            width: 30px;
            height: 30px;
            background-color: white;
            transform: translateY(-50%);
            border-radius: 4px;
            border: solid 1px #ccc;
            &.hidden {
                display: none;
            }
        }
        .button-action-left {
            left: 16px;
        }
        .button-action-right {
            right: 16px;
        }
    }
}
</style>