<template>
  <div class="container">
    <h2 class="heading--secondary title--margin">Listing</h2>

    <div class="preview" v-if="isPreviwedItem">
      <div class="flex container">
        <div class="">
          <h2 class="heading--tertiary">{{ previewedItem.name }}</h2>
          <h4 class="heading--quaternary">{{ previewedItem.type }}</h4>

          <p class="paragraph">{{ previewedItem.description }}</p>
        </div>

        <figure class="picture preview__figure">
          <img src="{previwedItem.image}" alt="glasses" class="img" />
        </figure>
      </div>
    </div>


    <ul class="grid list__container">
      <li
        v-for="item in items"
        :key="item.id"
        class="item"
        @click="previewItemHandler(item)"
      >
        <div class="">
          <figure class="picture">
            <img src="" alt="glasses" class="img" />
          </figure>
          <h2>{{ item.name }}</h2>
          <span
            v-for="color in item.color"
            :key="(Math.random() * 100) / color.length"
            class=""
          >
            <span>{{ color }}</span>
          </span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import items from '../data/data.vue'
export default {
  components : {items},
  data() {
    return {
      isPreviwedItem: false,
      previewedItem: {},
      items: [],
    };
  },
  methods: {
    previewItemHandler(item) {
      this.previewedItem = item;
      this.isPreviwedItem = true;
      console.log(this.previewedItem);
    }
  },
  mounted(){
    const sunGlasses = items.items.filter(item => item.type === 'sunglasses');
    this.items = sunGlasses;
    console.log(items, sunGlasses);
  }
};
</script>

<style scoped>
.list__container {
  height: max(70vh, 90rem);
  overflow-y: auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
}

.picture {
  width: 100%;
  aspect-ratio: 1;
  background: #8c8c8c;
}

</style>