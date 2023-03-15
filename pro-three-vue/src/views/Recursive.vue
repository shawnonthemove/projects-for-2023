<template>
  <Tree :data="treeData"></Tree>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Tree from '../components/Tree.vue'

let treeData = reactive([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false,

      },
      {
        name: '1-2',
        checked: true,
        children: [
          {
            name: '1-2-1',
            checked: true,
          }
        ]
      }
    ]
  },
  {
    name: '2',
    checked: false,
    children: [
      {
        name: '2-1',
        checked: false,
      }
    ],
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
      },
      {
        name: '3-2',
        checked: true,
      }
    ]
  },
]);
</script>

<style scoped></style>