<template>
    <template-section title="Projects" icon="fa-lightbulb">
        <projects :projects="projects"/>
    </template-section>
</template>

<script>
import { projects } from "@/site"

export default {
    data: () => {
        return {
            projects: projects
        }
    }
}
</script>

<style>

</style>
