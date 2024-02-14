<script setup>
import { reactive } from 'vue'
import { useField } from 'vee-validate'
import { useModal } from '@/hooks/useModal'
import { validateEmptyAndLength3, validateEmptyAndEmail } from '@/utils/validators'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import Icon from '@/components/Icon/index.vue'
import services from '@/services'

const { value: emailValue, errorMessage: emailErrorMessage } = useField(
  'email',
  validateEmptyAndEmail
)
const { value: passwordValue, errorMessage: passwordErrorMessage } = useField(
  'password',
  validateEmptyAndLength3
)

const state = reactive({
  hasErrors: false,
  isLoading: false,
  email: {
    value: emailValue,
    errorMessage: emailErrorMessage
  },
  password: {
    value: passwordValue,
    errorMessage: passwordErrorMessage
  }
})

const router = useRouter()
const toast = useToast()
async function handleSubmit() {
  try {
    state.isLoading = true
    toast.clear()

    const { data, errors } = await services.auth.login({
      email: state.email.value,
      password: state.password.value
    })

    if (!errors) {
      window.localStorage.setItem('token', JSON.stringify(data.token))
      router.push({ name: 'feedbacks' })
      modal.close()
      toast.success('Usuário logado com sucesso!')
      return
    }

    if (errors.status === 404) {
      toast.error('Usuário não encontrado')
    }

    if (errors.status === 401) {
      toast.error('Email ou senha inválidos')
    }

    if (errors.status === 400) {
      toast.error('Ocorreu um erro. Verifique os dados e tente novamente')
    }
  } catch (error) {
    console.log(error)
    state.hasErrors = !!error
    toast.error('Ocorreu um erro. Verifique os dados e tente novamente...')
  } finally {
    state.isLoading = false
  }
}

const modal = useModal()
</script>

<template>
  <div class="flex justify-between items-center gap-4">
    <h1 class="text-xl lg:text-2xl font-black text-gray-800">Entre na sua conta</h1>
    <button class="text-4xl text-gray-600" @click="modal.close">&times;</button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="handleSubmit" class="grid gap-4">
      <label>
        <span>E-mail</span>
        <input
          type="email"
          placeholder="john.doe@gmail.com"
          v-model="state.email.value"
          :class="{ 'border-brand-danger': !!state.email.errorMessage }"
          class="border-transparent"
        />
        <span class="error" v-if="!!state.email.errorMessage">
          {{ state.email.errorMessage }}
        </span>
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          placeholder="******"
          v-model="state.password.value"
          :class="{ 'border-brand-danger': !!state.password.errorMessage }"
          class="border-transparent"
        />
        <span class="error" v-if="!!state.password.errorMessage">
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button
        type="submit"
        class="rounded-full mt-4 px-8 py-2 bg-brand-main text-white font-bold max-w-max transition-all duration-150 disabled:opacity-50"
        :disabled="state.isLoading"
      >
        <span v-show="state.isLoading">
          <Icon name="Loading" size="22" class="animate-spin" />
        </span>
        <span v-show="!state.isLoading">Entrar</span>
      </button>
    </form>
  </div>
</template>

<style scoped>
label {
  @apply block;
}

label input {
  @apply block w-full px-4 py-3 rounded-lg border-2  mt-1 text-lg bg-gray-100 focus:outline-none;
}

label span {
  @apply text-lg font-medium text-gray-800;
}

.error {
  @apply block font-medium text-brand-danger;
}
</style>
