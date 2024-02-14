<script setup>
import { reactive, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import { useModal } from '@/hooks/useModal'

const modal = useModal()

// subscribe and unsubscribe
onMounted(() => modal.listen(handleModalToggle))
onBeforeUnmount(() => modal.destroy(handleModalToggle))

// const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'
const state = reactive({
  isActive: false,
  component: {},
  props: {}
  //   width: DEFAULT_WIDTH
})

function handleModalToggle(payload) {
  if (payload.status === true) {
    state.isActive = true
    state.component = payload.component
    state.props = payload.props
    // state.width = payload.width || DEFAULT_WIDTH
  } else {
    state.isActive = false
    state.component = {}
    state.props = {}
    // state.width = DEFAULT_WIDTH
  }
}

// Modal to render
const ModalLogin = defineAsyncComponent(() => import('@/components/ModalLogin/index.vue'))
const ModalCreateAccount = defineAsyncComponent(
  () => import('@/components/ModalCreateAccount/index.vue')
)

const modalToRender = {
  ModalLogin,
  ModalCreateAccount
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 grid place-items-center w-full h-full bg-black bg-opacity-50"
      v-if="state.isActive"
      @click.self="handleModalToggle({ status: false })"
    >
      <div class="grid bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
        <div class="grid px-12 py-10 bg-white">
          <Component :is="modalToRender[state.component]" v-bind="state.props" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
