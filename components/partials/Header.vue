<template>
    <div class=" w-full max-w-[86rem] mx-auto relative">
        <div class=" w-full flex items-center justify-between">
            <div class=" max-w-[12.6875rem] sm:max-w-[15rem]">
                <RouterLink to="/">
                    <img src="/assets/logo.svg" alt="svg" class="w-full h-full object-cover">
                </RouterLink>
            </div>

            <div class="  items-center space-x-10 hidden lg:flex">
                <div class=" flex items-center space-x-4 xl:space-x-8">
                     <RouterLink to="/" class=" text-white font-inter text-2xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                           Home
                     </RouterLink>
                     <RouterLink to="/" class=" text-white font-inter text-2xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                           Chi siamo
                     </RouterLink>
                      <RouterLink to="/" class=" text-white font-inter text-2xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                           Cosa facciamo
                     </RouterLink>
                      <RouterLink to="/" class=" text-white font-inter text-2xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                          Clienti
                     </RouterLink>
                      <RouterLink to="/" class=" text-white font-inter text-2xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                           Contatti
                     </RouterLink>
                </div>

                <div class=" flex items-center space-x-4">
                    <a href="" target="_blank" class=" text-white hover:text-gray-100 hover:text-opacity-60 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="  fill-current"  width="30" height="30" viewBox="0 0 30 30" fill="none">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12941 0C0.953369 0 0 0.95337 0 2.12941V27.8706C0 29.0466 0.953369 30 2.12941 30H27.8706C29.0466 30 30 29.0466 30 27.8706V2.12941C30 0.953371 29.0466 0 27.8706 0H2.12941ZM6.73362 9.31654C8.17094 9.31654 9.33612 8.15136 9.33612 6.71404C9.33612 5.27672 8.17094 4.11154 6.73362 4.11154C5.2963 4.11154 4.13113 5.27672 4.13113 6.71404C4.13113 8.15136 5.2963 9.31654 6.73362 9.31654ZM11.7196 11.2399H16.0327V13.2158C16.0327 13.2158 17.2032 10.8749 20.3878 10.8749C23.2286 10.8749 25.5818 12.2743 25.5818 16.5399V25.5349H21.1122V17.6299C21.1122 15.1136 19.7688 14.8368 18.7451 14.8368C16.6206 14.8368 16.2569 16.6693 16.2569 17.9581V25.5349H11.7196V11.2399ZM9.00229 11.2399H4.46496V25.535H9.00229V11.2399Z" />
                        </svg>
                    </a>
                    <a href="" target="_blank" class=" text-white hover:text-gray-100 hover:text-opacity-60 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="  fill-current" width="30" height="30" viewBox="0 0 30 30" fill="none">
                         <path d="M15.0014 0C10.9276 0 10.4164 0.0178128 8.81634 0.0906253C7.21945 0.16375 6.12944 0.416563 5.17568 0.7875C4.18911 1.17063 3.35222 1.68313 2.51846 2.51719C1.68408 3.35094 1.17157 4.18781 0.787195 5.17406C0.415317 6.12812 0.162189 7.21844 0.0903133 8.81469C0.0187501 10.4147 0 10.9262 0 15C0 19.0737 0.0181255 19.5834 0.0906262 21.1834C0.164064 22.7803 0.416879 23.8703 0.787508 24.8241C1.17095 25.8106 1.68345 26.6475 2.51753 27.4813C3.35097 28.3156 4.18786 28.8294 5.1738 29.2125C6.12819 29.5834 7.21851 29.8363 8.81509 29.9094C10.4151 29.9822 10.9261 30 14.9995 30C19.0736 30 19.5833 29.9822 21.1833 29.9094C22.7802 29.8363 23.8715 29.5834 24.8259 29.2125C25.8121 28.8294 26.6478 28.3156 27.4812 27.4813C28.3156 26.6475 28.8281 25.8106 29.2125 24.8244C29.5812 23.8703 29.8344 22.78 29.9094 21.1838C29.9812 19.5837 30 19.0737 30 15C30 10.9262 29.9812 10.415 29.9094 8.815C29.8344 7.21812 29.5812 6.12812 29.2125 5.17437C28.8281 4.18781 28.3156 3.35094 27.4812 2.51719C26.6468 1.68281 25.8125 1.17031 24.8249 0.7875C23.8687 0.416563 22.778 0.16375 21.1812 0.0906253C19.5811 0.0178128 19.0718 0 14.9967 0H15.0014ZM13.6558 2.70312C14.0551 2.7025 14.5008 2.70312 15.0014 2.70312C19.0064 2.70312 19.4811 2.7175 21.0627 2.78938C22.5252 2.85625 23.319 3.10063 23.8477 3.30594C24.5478 3.57781 25.0468 3.90281 25.5715 4.42781C26.0965 4.95281 26.4215 5.45281 26.694 6.15281C26.8993 6.68094 27.144 7.47469 27.2106 8.93719C27.2825 10.5184 27.2981 10.9934 27.2981 14.9966C27.2981 18.9997 27.2825 19.4747 27.2106 21.0559C27.1437 22.5184 26.8993 23.3122 26.694 23.8403C26.4221 24.5403 26.0965 25.0387 25.5715 25.5634C25.0465 26.0884 24.5481 26.4134 23.8477 26.6853C23.3196 26.8916 22.5252 27.1353 21.0627 27.2022C19.4815 27.2741 19.0064 27.2897 15.0014 27.2897C10.9961 27.2897 10.5214 27.2741 8.94009 27.2022C7.47758 27.1347 6.68382 26.8903 6.15475 26.685C5.45474 26.4131 4.95474 26.0881 4.42973 25.5631C3.90473 25.0381 3.57972 24.5394 3.30722 23.8391C3.10191 23.3109 2.85722 22.5172 2.79065 21.0547C2.71878 19.4734 2.7044 18.9984 2.7044 14.9928C2.7044 10.9872 2.71878 10.5147 2.79065 8.93344C2.85753 7.47094 3.10191 6.67719 3.30722 6.14844C3.5791 5.44844 3.90473 4.94844 4.42973 4.42344C4.95474 3.89844 5.45474 3.57344 6.15475 3.30094C6.68351 3.09469 7.47758 2.85094 8.94009 2.78375C10.3239 2.72125 10.8601 2.7025 13.6558 2.69938V2.70312ZM23.0084 5.19375C22.0146 5.19375 21.2083 5.99906 21.2083 6.99312C21.2083 7.98687 22.0146 8.79313 23.0084 8.79313C24.0021 8.79313 24.8084 7.98687 24.8084 6.99312C24.8084 5.99937 24.0021 5.19312 23.0084 5.19312V5.19375ZM15.0014 7.29687C10.7473 7.29687 7.2982 10.7459 7.2982 15C7.2982 19.2541 10.7473 22.7016 15.0014 22.7016C19.2555 22.7016 22.7034 19.2541 22.7034 15C22.7034 10.7459 19.2552 7.29687 15.0011 7.29687H15.0014ZM15.0014 10C17.7627 10 20.0015 12.2384 20.0015 15C20.0015 17.7612 17.7627 20 15.0014 20C12.2398 20 10.0014 17.7612 10.0014 15C10.0014 12.2384 12.2398 10 15.0014 10Z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class=" lg:hidden">
                <button @click="open = !open">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="32" viewBox="0 0 42 32" fill="none">
                        <rect width="42" height="6" fill="white"/>
                        <rect y="13" width="42" height="6" fill="white"/>
                        <rect y="26" width="42" height="6" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>

         <div class="flex items-center lg:order-2 md:hidden z-50 relative ">
                <aside id="default-sidebar" :class="{'translate-x-0':open,'-translate-x-full rtl:translate-x-full':!open}" class="fixed bg-black bg-opacity-75 py-4 bg-primary top-0 left-0 rtl:right-0 z-40 w-full h-screen transition-transform  " aria-label="Sidebar">
                   <button class=" absolute top-4 right-4" @click="open = false" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white hover:text-black duration-300 ">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                   </button>
                    <div class="h-full  overflow-y-auto px-4  space-y-8 z-50    ">
                        <div class="  items-start flex-col space-y-4 lg:space-x-5  flex w-full ">
                       
                            <NuxtLink  to="/"   @click="open = false"   class=" text-white font-inter text-xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                                    Home
                            </NuxtLink>
                            <NuxtLink  to="/"     @click="open = false"  class=" text-white font-inter text-xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                                    Chi siamo
                            </NuxtLink>
                            <NuxtLink  to="/"     @click="open = false"  class=" text-white font-inter text-xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                                    Cosa facciamo
                            </NuxtLink>
                            <NuxtLink  to="/"     @click="open = false"  class=" text-white font-inter text-xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                                    Clienti
                            </NuxtLink>
                            <NuxtLink  to="/"     @click="open = false"  class=" text-white font-inter text-xl font-normal hover:text-gray-100 hover:text-opacity-60 duration-200">
                                    Contatti
                            </NuxtLink>
                        
                        </div>
                    </div>
                </aside>
                
         </div>
    </div>
</template>


<script setup>
 const open = ref(false)
</script>