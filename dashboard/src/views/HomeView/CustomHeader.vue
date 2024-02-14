<script setup></script>

<template>
  <header class="bg-brand-main text-white py-3 grid">
    <div class="container mx-auto p-2 flex justify-between flex-wrap gap-3 items-center">
      <img src="@/assets/images/logo_white.png" alt="Feedbacker" class="max-w-40" />

      <nav class="flex items-center gap-4">
        <button class="font-bold p-2">Crie uma conta</button>
        <button class="bg-white text-brand-main rounded-full font-bold px-6 py-2">Entrar</button>
      </nav>
    </div>
  </header>

  <section class="bg-brand-main text-white pt-10">
    <div class="container mx-auto grid gap-8 md:grid-cols-2">
      <div class="my-auto p-2">
        <h1 class="font-black text-2xl md:text-4xl lg:text-5xl max-w-[17ch]">
          Tenha um feedback. E faça seus clientes mais felizes!
        </h1>
        <p class="my-4 lg:my-8 text-lg max-w-[33ch]">
          Receba ideias, reclamações e feedbacks com um simples widget na página.
        </p>
        <button class="bg-white text-brand-main rounded-full font-bold px-6 py-2">
          Crie uma conta grátis
        </button>
      </div>

      <div>
        <img src="@/assets/images/blue_balloons.png" alt="" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>
