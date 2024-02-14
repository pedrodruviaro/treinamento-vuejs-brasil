<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'

function handleLogin() {
  console.log('login')
}

function handleAccountCreate() {
  console.log('create')
}

const router = useRouter()
onMounted(() => {
  const token = window.localStorage.getItem('token')

  if (token) {
    router.push({ name: 'feedbacks' })
  }
})
</script>

<template>
  <CustomHeader @createAccount="handleAccountCreate" @login="handleLogin" />
  <Contact />
  <footer class="bg-gray-200 py-8">
    <div class="container flex justify-center items-center mx-auto">
      <p class="text-sm text-gray-800">Feedbacker &copy; 2024</p>
    </div>
  </footer>
</template>
