<template>
    <footer class=" w-full bg-white pt-10 pb-5 px-4 sm:px-8">
      <div class=" flex flex-col items-start sm:items-center lg:items-start">
          <img src="/assets/logo.svg" alt="">
        <div class=" lg:w-full lg:space-x-4 flex lg:flex-row flex-col space-y-8 lg:space-y-0  items-start lg:justify-between pt-8">
            <div class=" w-full lg:max-w-[23.308rem]">
                <p class=" text-blu-ascital text-base font-normal">
                    ASCITAL Società Consortile a responsabilità limitata
                        <br><br>
                    Via Annia Regilla, 51 <br>
                    00178 Roma <br>
                    Tel.: 06.7187388 - 06.7183676
                    <br><br>
                    info@ascital.it <br>
                    ascital@postecertificate. it <br>
                </p>
            </div>
            <div class=" w-full lg:max-w-[13.1875rem] flex flex-col items-start space-y-4 ">
                <span class=" font-inter text-blu-ascital font-bold uppercase ">MENU</span>
               <div class=" flex flex-col items-start  uppercase text-blu-ascital text-xl font-normal">
                    <RouterLink to="/" class="font-inter" >
                      HOME
                    </RouterLink>
                     <RouterLink to="/" class="font-inter">
                      NEWS
                    </RouterLink>
                    <RouterLink to="/" class="font-inter">
                      CHI SIAMO
                    </RouterLink>
                    <RouterLink to="/" class="font-inter">
                      CLIENTI
                    </RouterLink>
                     <RouterLink to="/" class="font-inter">
                      CONTATTI
                    </RouterLink>
                    <RouterLink to="/" class="font-inter">
                      CODICE ETICO
                    </RouterLink>
                     <RouterLink to="/" class="font-inter">
                      Informativa privacy
                    </RouterLink>
                     <RouterLink to="/" class="font-inter">
                      Cookies
                    </RouterLink>
               </div>
            </div>
             <div class=" w-full lg:max-w-[14.75rem] flex flex-col items-start space-y-4">
                <span class=" font-inter text-blu-ascital font-bold uppercase">SERVIZI</span>
               <div class=" flex flex-col items-start  uppercase text-blu-ascital text-xl font-normal">
                    <RouterLink to="/" class="font-inter">
                      SERVIZI IT
                    </RouterLink>
                     <RouterLink to="/" class="font-inter">
                      INTEGRAZIONE SISTEMI COMPLESSI
                    </RouterLink>
                    <RouterLink to="/" class="font-inter">
                      CYBER SECURITY
                    </RouterLink>
                    <RouterLink to="/" class="font-inter">
                      EDUCATION
                    </RouterLink>
               </div>
            </div>
              <div class=" w-full lg:max-w-[10.5rem] flex flex-col items-start space-y-4">
                <span class=" font-inter text-blu-ascital font-bold uppercase">ENTRA IN CONTATTO</span>
                <div class=" flex flex-col items-start  uppercase text-blu-ascital text-xl font-normal">
                        <RouterLink to="/" class="font-inter">
                            LAVORA CON NOI
                        </RouterLink>
                        <RouterLink to="/" class="font-inter">
                            CONTATTI
                        </RouterLink>

                        <div class=" flex items-center space-x-4 pt-8">
                            <a href="" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5553 0.75C1.14405 0.75 0 1.89404 0 3.3053V34.1947C0 35.606 1.14405 36.75 2.5553 36.75H33.4448C34.8561 36.75 36.0001 35.606 36.0001 34.1947V3.3053C36.0001 1.89405 34.8561 0.75 33.4448 0.75H2.5553ZM8.08037 11.9298C9.80516 11.9298 11.2034 10.5316 11.2034 8.80684C11.2034 7.08206 9.80516 5.68384 8.08037 5.68384C6.35558 5.68384 4.95737 7.08206 4.95737 8.80684C4.95737 10.5316 6.35558 11.9298 8.08037 11.9298ZM14.0635 14.2378H19.2393V16.6089C19.2393 16.6089 20.6439 13.7998 24.4654 13.7998C27.8743 13.7998 30.6983 15.4792 30.6983 20.5979V31.3919H25.3347V21.9059C25.3347 18.8863 23.7226 18.5542 22.4942 18.5542C19.9448 18.5542 19.5083 20.7532 19.5083 22.2998V31.3919H14.0635V14.2378ZM10.8028 14.2379H5.35797V31.3919H10.8028V14.2379Z" fill="#273C7B"/>
                                </svg>
                            </a>
                             <a href="" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                  <path d="M18.0011 0.75C13.1127 0.75 12.4992 0.771375 10.5793 0.85875C8.66311 0.9465 7.35515 1.24988 6.21068 1.695C5.02684 2.15475 4.02263 2.76975 3.02216 3.77063C2.02094 4.77113 1.40595 5.77537 0.944718 6.95887C0.498482 8.10375 0.194741 9.41213 0.108494 11.3276C0.0226212 13.2476 0.00012207 13.8615 0.00012207 18.75C0.00012207 23.6385 0.0218718 24.2501 0.108869 26.1701C0.196991 28.0864 0.500357 29.3944 0.945094 30.5389C1.4052 31.7227 2.02019 32.727 3.02103 33.7275C4.02113 34.7288 5.02534 35.3453 6.20843 35.805C7.35365 36.2501 8.66198 36.5535 10.5778 36.6413C12.4977 36.7286 13.1109 36.75 17.9988 36.75C22.8876 36.75 23.4992 36.7286 25.4191 36.6413C27.3353 36.5535 28.6448 36.2501 29.79 35.805C30.9734 35.3453 31.9762 34.7288 32.9762 33.7275C33.9775 32.727 34.5924 31.7228 35.0537 30.5393C35.4962 29.3944 35.7999 28.086 35.8899 26.1705C35.9762 24.2505 35.9987 23.6385 35.9987 18.75C35.9987 13.8615 35.9762 13.248 35.8899 11.328C35.7999 9.41175 35.4962 8.10375 35.0537 6.95925C34.5924 5.77537 33.9775 4.77113 32.9762 3.77063C31.975 2.76938 30.9738 2.15438 29.7888 1.695C28.6414 1.24988 27.3327 0.9465 25.4165 0.85875C23.4965 0.771375 22.8853 0.75 17.9955 0.75H18.0011ZM16.3864 3.99375C16.8656 3.993 17.4003 3.99375 18.0011 3.99375C22.8069 3.99375 23.3765 4.011 25.2744 4.09725C27.0293 4.1775 27.9818 4.47075 28.6163 4.71713C29.4562 5.04338 30.0551 5.43337 30.6847 6.06337C31.3147 6.69337 31.7047 7.29337 32.0317 8.13337C32.278 8.76713 32.5716 9.71962 32.6515 11.4746C32.7378 13.3721 32.7565 13.9421 32.7565 18.7459C32.7565 23.5496 32.7378 24.1196 32.6515 26.0171C32.5713 27.7721 32.278 28.7246 32.0317 29.3584C31.7054 30.1984 31.3147 30.7965 30.6847 31.4261C30.0547 32.0561 29.4566 32.4461 28.6163 32.7724C27.9825 33.0199 27.0293 33.3124 25.2744 33.3926C23.3769 33.4789 22.8069 33.4976 18.0011 33.4976C13.1948 33.4976 12.6252 33.4789 10.7278 33.3926C8.97285 33.3116 8.02038 33.0184 7.38552 32.772C6.54555 32.4457 5.94557 32.0557 5.31559 31.4258C4.68561 30.7958 4.29562 30.1973 3.96863 29.3569C3.72226 28.7231 3.42864 27.7706 3.34877 26.0156C3.26252 24.1181 3.24527 23.5481 3.24527 18.7414C3.24527 13.9346 3.26252 13.3676 3.34877 11.4701C3.42902 9.71513 3.72226 8.76262 3.96863 8.12812C4.29487 7.28812 4.68561 6.68812 5.31559 6.05812C5.94557 5.42812 6.54555 5.03813 7.38552 4.71112C8.02 4.46362 8.97285 4.17113 10.7278 4.0905C12.3882 4.0155 13.0317 3.993 16.3864 3.98925V3.99375ZM27.609 6.9825C26.4166 6.9825 25.4491 7.94887 25.4491 9.14175C25.4491 10.3342 26.4166 11.3018 27.609 11.3018C28.8015 11.3018 29.769 10.3342 29.769 9.14175C29.769 7.94925 28.8015 6.98175 27.609 6.98175V6.9825ZM18.0011 9.50625C12.8964 9.50625 8.75761 13.6451 8.75761 18.75C8.75761 23.8549 12.8964 27.9919 18.0011 27.9919C23.1058 27.9919 27.243 23.8549 27.243 18.75C27.243 13.6451 23.1054 9.50625 18.0007 9.50625H18.0011ZM18.0011 12.75C21.3145 12.75 24.0009 15.4361 24.0009 18.75C24.0009 22.0635 21.3145 24.75 18.0011 24.75C14.6873 24.75 12.0013 22.0635 12.0013 18.75C12.0013 15.4361 14.6873 12.75 18.0011 12.75Z" fill="#273C7B"/>
                                </svg>
                            </a>
                        </div>
                </div>
            </div>
        </div>
      </div>

        <div class=" w-full flex pt-20">
                <div class=" m-auto text-center">
                    <p class=" text-blu-ascital text-base font-normal font-inter">
                        @2023 Ascital S.R.L. - P.IVA 111111111111111 - Privacy Policy
                    </p>
                    <span class=" text-blu-ascital font-normal text-base font-inter">MGquadro Web agency Roma</span>
                </div>
        </div>
    </footer>
</template>