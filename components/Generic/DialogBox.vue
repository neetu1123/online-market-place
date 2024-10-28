<template>
  <TransitionRoot :show="open" as="template">
    <Dialog
      as="div"
      class="fixed z-20 inset-0 overflow-y-auto bg-black bg-opacity-40"
      @close="emit('close')"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            id="restoreDialogArea"
            class="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>
        <span class="hidden sm:inline-block sm:h-screen" aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6"
            :class="(attrs['dialog-class'], bgColor)"
          >
            <slot />
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps({
  /**
   * Props to close or open dialog
   */
  open: {
    type: Boolean,
    default: false,
  },
  /**
   * background color of dialogue box
   */
  bgColor: {
    type: String,
    default: "bg-white",
  },
});

const emit = defineEmits(["close"]);
const attrs = useAttrs();
</script>
