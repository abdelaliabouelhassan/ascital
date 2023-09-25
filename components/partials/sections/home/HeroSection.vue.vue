<template>
    <div class=" w-full h-screen bg-black relative">
        <!-- Video -->


        <!-- text -->
        <div class=" absolute left-10 bottom-20 max-w-[59.375rem] w-full">
            <div class=" w-full flex flex-col items-start space-y-8">
                <div class=" text-white text-7xl font-bold tracking-[-0.225rem] leading-[98.005%] relative">
                   <p>
                     Una realtà solida, composta da specialisti in 
                   </p>
                    <div class=" overflow-hidden absolute top-[4.4rem] -right-24  max-w-[34.875rem] h-20  w-full">
                    <transition name="hero-subtext">
                        <div v-if="index == 0">
                            <span  class="text-verde-ascital">Servizi IT</span>
                        </div>
                        <div v-else-if="index == 1">
                            <span  class="text-verde-ascital">Cybersecurity</span>
                        </div>
                        <div v-else-if="index == 2">
                            <span  class="text-verde-ascital">Sistemi complessi</span>
                        </div>
                        <div v-else>
                            <span  class="text-verde-ascital">Education</span>
                        </div>
                    </transition>
                    </div>
                </div>
                <div class=" w-full h-[0.0625rem] bg-white max-w-[54.375rem]"></div>
                <p class=" text-white text-xl font-normal">
                    Siamo una società che comprende 14 PMI nei settori dell’ ICT, <br> della sicurezza globale, degli impianti tecnologici e dei sistemi <br> evoluti di automazione industriale.
                </p>
            </div>
        </div>
    </div>
</template>


<script setup>
 const index = ref(0);
 onMounted(() => {
    setInterval(()=> {
        index.value++
        if(index.value == 3){
            index.value = 0
        }
    },3000);
 })
</script>


<style scoped>
.hero-subtext-enter-active{
  transition: all 0.9s ease-in-out 0.3s;
}
.hero-subtext-leave-active {
  transition: all 0.6s ease-in-out;
}

.hero-subtext-enter-from{
    transform: translateY(100%);
}

.hero-subtext-enter-to{
    transform: translateY(0);
}
.hero-subtext-leave-to {
    transform: translateY(-100%);
}
</style>