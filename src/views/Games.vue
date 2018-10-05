<template>
    <template-section title="Games" icon="fa-gamepad">
        <projects :projects="games"/>
    </template-section>
</template>

<script>
import { games } from "@/site"

export default {
    data: () => {
        return {
            games: games
        }
    }
}
</script>

<style>

</style>
