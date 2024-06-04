<template>
  <table class="courses-table">
    <tr class="header">
      <th>Programs</th>
      <th>Teaching Language</th>
      <th>Starting Date</th>
      <th>Scholarship coverage</th>
      <th>Price</th>
    </tr>
    <tr v-for="(item, index) in options" :key="'course-row-' + index">
      <td class="programs">
        {{ item.program }}
      </td>

      <td>{{ item.lang }}</td>
      <td>{{ item.starting }}</td>

      <td>
        <div>
          <span>Tuition: </span>
          <span>{{ item.coverage.tuition }}</span>
        </div>
        <div>
          <span>Accommodation: </span>
          <span>{{ item.coverage.accommodation }}</span>
        </div>
        <div>
          <span>Living Expenses: </span>
          <span>{{ item.coverage.living }}</span>
        </div>
      </td>

      <td>
        <div>
          <span>Tuition: </span>
          <span>{{ item.price.tuition }}</span>
        </div>
        <div>
          <span>Accommodation: </span>
          <span>{{ item.price.accommodation }}</span>
        </div>
        <div>
          <span>Living Expenses: </span>
          <span>{{ item.price.living }}</span>
        </div>
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
export interface Coverage {
  tuition: string
  accommodation: string
  living: string
}

export interface Course {
  program: string
  lang: string
  starting: string
  coverage: Coverage
  price: Coverage
}

defineProps<{
  options: Course[]
}>()
</script>

<style scoped lang="scss">
.courses-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  color: $text-black;

  td {
    padding: 12px 0;
    vertical-align: text-top;
  }

  tr {
    &:not(:last-child) {
      border-bottom: 1px solid $border-grey;
    }
  }

  .programs {
    font-weight: 600;
    color: $black-alatau;
  }

  .header {
    line-height: 100%;
    font-weight: 600;
    color: $gray-zenwei;
    text-align: left;

    th {
      padding: 0;
      padding-bottom: 20px;
    }
  }
}
</style>
