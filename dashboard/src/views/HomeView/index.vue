<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useModal } from '@/hooks/useModal'
import Contact from './Contact.vue'
import CustomHeader from './CustomHeader.vue'

const modal = useModal()

function handleLogin() {
  modal.open({
    component: 'ModalLogin'
  })
}

function handleAccountCreate() {
  modal.open({
    component: 'ModalCreateAccount'
  })
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
