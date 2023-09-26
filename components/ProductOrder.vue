<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <ul>
      <li v-for="item in orderedJobs" :key="item.id">
        <ProductCard />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import Products from '@/types/Products'
type OrderTerm = 'title' | 'price'


export default defineComponent({
    props: {
      jobs: {
          required: true,
          type: Array as PropType<Products[]>
      },
      order: {
          required: true,
          type: String as PropType<OrderTerm>
      },
    },
    setup(props) {
      const orderedJobs = computed(() => {
        return [...props.jobs].sort((a: Products, b: Products) => {
          return a[props.order] > b[props.order] ? 1 : -1
        })
      })

      return { orderedJobs }
    }
})
</script>

<style scoped>

</style>