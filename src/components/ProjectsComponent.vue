<template>
    <div class="row">
        
        <project v-if="projects.length > 0" v-for="(project, idx) in projects" 
        :title="project.title" 
        :thumb="project.thumb"
        :desc="project.description"
        :gh_link="project.gh_link"
        :demo_link="project.demo_link"
        :tech="project.tech"
        :key="idx"/>
        <div class="text-muted w-100 text-center p-3" v-if="projects.length === 0">
            No projects...
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array
        }
    }
}
</script>

<style>

</style>
