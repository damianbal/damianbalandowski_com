<template>
    <template-section title="Templates" icon="fa-pencil-ruler">
        <projects :projects="templates"/>
    </template-section>
</template>

<script>
import { templates } from "@/site"

export default {
    data: () => {
        return {
            templates: templates 
        }
    }
}
</script>

<style>

</style>
