<template>
  <div class="lists">
    <div class="lists__list">
      <vArrow v-bind:class="{listActive: getListShow[0]}" />
      <input type="checkbox" v-model="getMainInputs[0]" v-on:change = "addToPanel({list: getFirstList, index: 0})" v-on:click="allChecked(0)"/><span v-on:click ='listClick(0)' class="lists__item">List 1</span>
      <div class="lists__items" v-if="getListShow[0]">
        <span 
          v-for="(item, index) in getFirstList"
          :key="index"
        >
          <input type="checkbox" v-model="item.input" v-on:change = "addToPanel({list: getFirstList, index: 0})"/>
          <label>Item {{index + 1}}</label>
          <input class="lists__count" v-on:change = "addToPanel({list: getFirstList, index: 0})" v-model="item.count" min="0"/>
          <input class="lists__color" type="color" v-on:change = "addToPanel({list: getFirstList, index: 0})" v-model="item.color"/>
        </span>
      </div>
    </div>
    <div class="lists__list">
      <vArrow v-bind:class="{listActive: getListShow[1]}" />
      <input type="checkbox" v-model="getMainInputs[1]" v-on:change = "addToPanel({list: getSecondList, index: 1})" v-on:click="allChecked(1)"/><span v-on:click ='listClick(1)' class="lists__item">List 2</span>
      <div class="lists__items" v-if="getListShow[1]">
        <span 
          v-for="(item, index) in getSecondList"
          :key="index"
        >
          <input type="checkbox" v-model="item.input" v-on:change = "addToPanel({list: getSecondList, index: 1})"/>
          <label>Item {{index + 1}}</label>
          <input class="lists__count" v-on:change = "addToPanel({list: getSecondList, index: 1})" v-model="item.count" min="0"/>
          <input class="lists__color" type="color" v-on:change = "addToPanel({list: getSecondList, index: 1})" v-model="item.color"/>
        </span>
      </div>
    </div>
    <div class="lists__list">
      <vArrow v-bind:class="{listActive: getListShow[2]}" />
      <input type="checkbox" v-model="getMainInputs[2]" v-on:change = "addToPanel({list: getThirdList, index: 2})" v-on:click="allChecked(2)"/><span v-on:click ='listClick(2)' class="lists__item">List 3</span>
      <div class="lists__items" v-if="getListShow[2]">
        <span 
          v-for="(item, index) in getThirdList"
          :key="index"
        >
          <input type="checkbox" v-model="item.input" v-on:change = "addToPanel({list: getThirdList, index: 2})"/>
          <label>Item {{index + 1}}</label>
          <input class="lists__count" v-on:change = "addToPanel({list: getThirdList, index: 2})" v-model="item.count" min="0"/>
          <input class="lists__color" type="color" v-on:change = "addToPanel({list: getThirdList, index: 2})" v-model="item.color"/>
        </span>
      </div>
    </div>
    <div class="lists__list">
      <vArrow v-bind:class="{listActive: getListShow[3]}" />
      <input type="checkbox" v-model="getMainInputs[3]" v-on:change = "addToPanel({list: getFourthList, index: 3})" v-on:click="allChecked(3)"/><span v-on:click ='listClick(3)' class="lists__item">List 4</span>
      <div class="lists__items" v-if="getListShow[3]">
        <span 
          v-for="(item, index) in getFourthList"
          :key="index"
        >
          <input type="checkbox" v-model="item.input" v-on:change = "addToPanel({list: getFourthList, index: 3})"/>
          <label>Item {{index + 1}}</label>
          <input class="lists__count" v-on:change = "addToPanel({list: getFourthList, index: 3})" v-model="item.count" min="0"/>
          <input class="lists__color" type="color" v-on:change = "addToPanel({list: getFourthList, index: 3})" v-model="item.color"/>
        </span>
      </div>
    </div>
    <div class="lists__list">
      <vArrow v-bind:class="{listActive: getListShow[4]}" />
      <input type="checkbox" v-model="getMainInputs[4]" v-on:change = "addToPanel({list: getFifthList, index: 4})" v-on:click="allChecked(4)"/><span v-on:click ='listClick(4)' class="lists__item">List 5</span>
      <div class="lists__items" v-if="getListShow[4]">
        <span 
          v-for="(item, index) in getFifthList"
          :key="index"
        >
          <input type="checkbox" v-model="item.input" v-on:change = "addToPanel({list: getFifthList, index: 4})"/>
          <label>Item {{index + 1}}</label>
          <input class="lists__count" v-on:change = "addToPanel({list: getFifthList, index: 4})" v-model="item.count" min="0"/>
          <input class="lists__color" type="color" v-on:change = "addToPanel({list: getFifthList, index: 4})" v-model="item.color"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import vArrow from './v-arrow.vue'
import { mapActions, mapGetters} from 'vuex'

export default{
  name: 'vLists',
  components: {
    vArrow
  },
  mounted() {
    this.addToPanel({list: this.getFirstList, index: 0});
    this.addToPanel({list: this.getSecondList, index: 1});
    this.addToPanel({list: this.getThirdList, index: 2});
    this.addToPanel({list: this.getFourthList, index: 3});
    this.addToPanel({list: this.getFifthList, index: 4});
  },
  computed:{
    ...mapGetters([
      'getListShow',
      'getMainInputs',
      'getFirstList',
      'getSecondList',
      'getThirdList',
      'getFourthList',
      'getFifthList'
    ])
  },
  methods: {
    ...mapActions([
      'listClick',
      'allChecked',
      'addToPanel'
    ]),

  }
}
</script>

<style scoped>
  .lists{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  .lists__list:hover{
    cursor: pointer;
  }

  .lists__items{
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  label{
    margin-right: 20px;
  }

  .listActive{
    transform: rotate(90deg);
  }

  .lists__count{
    max-width: 22px;
    font-size: 20px;
    height: 30px;
    border: none;
  }

  .lists__color{
    padding: 0;
    width: 30px;
    height: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .lists__color::-webkit-color-swatch{
    border-radius: 5px;
    border: none;
  }
</style>
