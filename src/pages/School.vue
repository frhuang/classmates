<template>
  <div class="school">
    <mt-header title="学校">
      <router-link to="/filter" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-search
      autofocus
      placeholder="请输入学校全称"
      v-model="value"
      :result="filterResult">
      </mt-search>
  </div>
</template>

<script type="text/babel">
  import PreSearch from '../uicomponents/Search';
  export default {
    data () {
      return {
        value: '',
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ]
      }
    },
    computed: {
      filterResult () {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    },
    components: {
      PreSearch
    }
  }
</script>
