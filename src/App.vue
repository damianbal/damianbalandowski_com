<template>
    <div id="app">
    
        <div class="container border-top-primary shadow mb-5 rounded" id="app">
            <header class="row header p-4 mt-2">
                <div class="col-sm-12 col-md-2 text-center">
                    <img src="@/assets/img/ja2.jpg" class="img-fluid rounded" alt="Me :D">
                </div>
                <div class="col-sm-10">
                    <h2 class="text-primary">Damian Balandowski</h2>
                    <p class="text-secondary">Web Development, PHP 7, JavaScript, Vue.js, Laravel</p>
                    <div>
                        <nav class="nav justify-content-end">

                            <!--
                        <a class="nav-link" href="/projects">Projects</a>
                        <a class="nav-link" href="/templates">Templates</a>
                        <a class="nav-link" href="/games">Games</a>
                        -->
                            <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>

                            <router-link class="nav-link" :to="{ name: 'projects' }">Projects</router-link>
                            <router-link class="nav-link" :to="{ name: 'games' }">Games</router-link>

                            <router-link class="nav-link" :to="{ name: 'templates' }">Templates</router-link>

<router-link class="nav-link" :to="{ name: 'other' }">Other</router-link>

                            <!-- <a class="nav-link" href="#skills">Skills</a> -->
                            <!-- <a class="nav-link" href="#social">Social Links</a> -->
                            <!-- <a class="nav-link" href="#cv">Resume</a> -->

                        </nav>
                    </div>
                </div>
            </header>

            
                <router-view/>
            

        </div>
    </div>
</template>

<style lang="scss">

</style>
