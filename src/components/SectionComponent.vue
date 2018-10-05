<template>
    <section class="row portfolio-row p-3">
        <div class="col-sm-12">
            <div class="row mb-2">
                <div class="col-12">
                    <h3 class="text-secondary">
                        <i class="fas" :class="[ sectionIcon ]"></i> {{ title }} &nbsp;</h3>
                </div>
            </div>

        
                <slot></slot>
        

        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Section",
            required: false
        },
        icon: {
            type: String,
            default: "fa-pencil",
            required: false
        }
    },
    computed: {
        sectionIcon() {
            return 'fas ' + this.icon
        }
    }
};
</script>

<style>
</style>
