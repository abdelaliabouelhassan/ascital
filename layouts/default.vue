<template>
    <div class=" w-full h-full font-maven-pro relative">
       <div class=" py-4 px-4 absolute w-full top-0 left-0 z-50">
         <Header />
       </div>
        <div class=" w-full">
            <slot />
        </div>
    </div>
    
</template>
<script setup>
    import Header from "@/components/partials/Header.vue";
</script>