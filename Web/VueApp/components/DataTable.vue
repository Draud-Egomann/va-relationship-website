<script setup lang="ts">
defineProps<{
  table_data: TableData
}>();
</script>

<template>
  <div class="py-20">
    <div class="max-w-6xl mx-auto flex flex-wrap">

      <div
        class="relative flex flex-col w-full h-full overflow-auto bg-secondary2 dark:bg-darkAccent2Dark shadow-md rounded-lg bg-clip-border">
        <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th v-for="(tableHeading, index) in table_data.tableHeadings" :class="{ 'w-16 md:w-40': index != 0 }"
                class="p-2 md:p-4 border-b border-slate-600 dark:border-slate-200 bg-accent1 dark:bg-darkAccent1Dark">
                <p class="font-bold leading-none">
                  {{ tableHeading }}
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tableRow in table_data.tableRows" class="hover:bg-accent2 dark:hover:bg-darkAccent1Dark/75">
              <td class="p-2 md:p-4 border-b border-slate-700 dark:border-gray1">
                <p class="font-semibold">
                  {{ tableRow.model }}
                </p>
              </td>
              <td v-for="(value, colIndex) in tableRow.data" :key="colIndex"
                class="p-2 md:p-4 border-b border-slate-700 dark:border-gray1">
                <p>
                  {{ value }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<style scoped>
p {
  @apply text-base text-neutral2 dark:text-darkNeutral2;
}
</style>