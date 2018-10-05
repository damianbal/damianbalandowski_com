<template>
    <div class="col-sm-4 text-center p-3 mb-3">
        <h5>{{ title }}</h5> 
        <div class="text-center mb-2"><a data-lightbox="projects" data-title="Image" :href="thumb"><img class="img-fluid rounded" :src="thumb"></a></div> 
        <div class="mb-2 btn-group">
            <a :href="gh_link" v-if="gh_link.length > 1" class="btn btn-sm btn-light"><i class="fab fa-github"></i> GitHub</a>
            <a :href="demo_link" v-if="demo_link != null || demo_link.length > 0" class="btn btn-sm btn-light"><i class="fas fa-external-link-alt"></i> Demo</a>
            <a href="#" v-if="desc != null || desc.length > 2 || tech.length > 2" @click="showDescription" class="btn btn-sm btn-light"><i class="fas fa-info-circle"></i> Info</a>
        </div>
    </div>
    
    
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Project"
        },
        thumb: {
            type: String,
            default: "" 
        },
        desc: {
            type: String,
            default: "Description"
        },
        gh_link: {
            type: String, 
            default: "#"
        },
        demo_link: {
            type: String,
            default: "#"
        },
        tech: {
            type: String,
            default: "?",
        }
    },
    methods: {
        showDescription() {
            alert("Description: " + this.desc + "\n\nTechnology: " + this.tech);
        }
    }
}
</script>

<style>

</style>
