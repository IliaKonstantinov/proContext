<template>
  <div class="panels">
    <div class="panels__panel">
      <h1 v-on:click = "panelClick(0)">List 1</h1>
      <div class="panels__show" v-if="getPanelShow[0]">
        <button class="panels__button" v-on:click="buttonClick({array: getFirstPanel, index: 0})">{{getIsFiltered[0] ? 'Перемешать' : 'Сортировать'}}</button>
        <div>
          <div class="panels__square" 
            v-for="square in getFirstPanel"
            v-on:click="deleteSquare({item: square, index: 0})"
            :key="square.id"
            v-bind:style="{'background-color': square.color}"
          ></div>
        </div>  
      </div>
    </div>
    <div class="panels__panel">
      <h1 v-on:click = "panelClick(1)">List 2</h1>
      <div class="panels__show" v-if="getPanelShow[1]">
        <button class="panels__button" v-on:click="buttonClick({array: getSecondPanel, index: 1})">{{getIsFiltered[1] ? 'Перемешать' : 'Сортировать'}}</button>
        <div>
          <div class="panels__square" 
            v-for="square in getSecondPanel"
            v-on:click="deleteSquare({item: square, index: 1})"
            :key="square.id"
            v-bind:style="{'background-color': square.color}"
          ></div>
        </div>
      </div>
    </div>
    <div class="panels__panel">
      <h1 v-on:click = "panelClick(2)">List 3</h1>
      <div class="panels__show" v-if="getPanelShow[2]">
        <button class="panels__button" v-on:click="buttonClick({array: getThirdPanel, index: 2})">{{getIsFiltered[2] ? 'Перемешать' : 'Сортировать'}}</button>
        <div>
          <div class="panels__square" 
            v-for="square in getThirdPanel"
            v-on:click="deleteSquare({item: square, index: 2})"
            :key="square.id"
            v-bind:style="{'background-color': square.color}"
          ></div>
        </div>
      </div>
    </div>
    <div class="panels__panel">
      <h1 v-on:click = "panelClick(3)">List 4</h1>
      <div class="panels__show" v-if="getPanelShow[3]">
        <button class="panels__button" v-on:click="buttonClick({array: getFourthPanel, index: 3})">{{getIsFiltered[3] ? 'Перемешать' : 'Сортировать'}}</button>
        <div>
          <div class="panels__square" 
            v-for="square in getFourthPanel"
            v-on:click="deleteSquare({item: square, index: 3})"
            :key="square.id"
            v-bind:style="{'background-color': square.color}"
          ></div>
        </div>
      </div>
    </div>
    <div class="panels__panel">
      <h1 v-on:click = "panelClick(4)">List 5</h1>
      <div class="panels__show" v-if="getPanelShow[4]">
        <button class="panels__button" v-on:click="buttonClick({array: getFifthPanel, index: 4})">{{getIsFiltered[4] ? 'Перемешать' : 'Сортировать'}}</button>
        <div>
          <div class="panels__square" 
            v-for="square in getFifthPanel"
            v-on:click="deleteSquare({item: square, index: 4})"
            :key="square.id"
            v-bind:style="{'background-color': square.color}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
 name: 'vPanels',
 computed:{
    ...mapGetters([
      'getFirstPanel',
      'getSecondPanel',
      'getThirdPanel',
      'getFourthPanel',
      'getFifthPanel',
      'getPanelShow',
      'getIsFiltered'
    ])
  },
  methods: {
    ...mapActions([
      'panelClick',
      'buttonClick',
      'deleteSquare'
    ])
  }
}
</script>

<style scoped>
  .panels__panel{
    width: 800px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }

  .panels__show{
    display: flex;
    flex-direction: column;
  }

  .panels__button{
    align-self: flex-end;
    margin-bottom: 20px;
    padding: 7px 10px;
    background-color: blue;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .panels__square{
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 3px;
    cursor: pointer;
  }
</style>
