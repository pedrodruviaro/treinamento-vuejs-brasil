<template>
  <section class="flex justify-center">
    <div class="flex flex-col items-center w-4/5 max-w-6xl my-16">
      <h2 class="text-4xl font-black text-center text-gray-800">Alguma dúvida?</h2>
      <p class="mt-4 mb-8">Quer saber melhor como funciona e quais são os preços?</p>
      <button
        class="bg-brand-main text-white rounded-full font-bold px-6 py-2"
        @click="console.log('Aqui vai um email!')"
      >
        Nos mande um e-mail!
      </button>
    </div>
  </section>
</template>
