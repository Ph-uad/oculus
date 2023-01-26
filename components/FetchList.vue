<template>
  <div class="container">
    <h2 class="heading--secondary title--margin">Listing</h2>

    <div class="" v-if="isPreviwedItem">
      <div class="flex preview">
        <figure class="picture preview__figure">
          <img src="{previwedItem.image}" alt="glasses" class="img" />
        </figure>

        <div class="">
          <h2 class="heading--secondary">{{ previewedItem.name }}</h2>
          <span
            v-for="color in previewedItem.color"
            :key="(Math.random() * 100) / color.length"
            class=""
          >
            <span>{{ color }}</span>
          </span>
          <p>{{ previewedItem.description }}</p>
          <p>{{ previewedItem.type }}</p>
        </div>
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
            <img src="item.image" alt="glasses" class="img" />
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
export default {
  data() {
    return {
      isPreviwedItem: false,
      previewedItem: {},
      items: [
        {
          id: 1,
          name: "jaden google's",
          image: "",
          color: ["red"],
          type: "Eyeglasses",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 2,
          name: "Kulos",
          image: "",
          type: "Eyeglasses",
          color: ["blue"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 3,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 4,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 5,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 6,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 7,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 8,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 9,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 10,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 11,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 12,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 13,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 14,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 15,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 16,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 17,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 18,
          name: "Dok ki",
          color: ["red", "blue", "yellow"],
          type: "Eyeglasses",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 19,
          name: "ook ki",
          color: ["red", "blue", "yellow"],
          type: "Eyeglasses",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 20,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 21,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 22,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 23,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 24,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 25,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 26,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 27,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 28,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 29,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 30,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 31,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 32,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 33,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 34,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 35,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 36,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 37,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 38,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
        {
          id: 39,
          name: "Look ki",
          image: "",
          type: "sunglasses",
          color: ["red", "blue", "yellow"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, a!",
        },
      ],
    };
  },
  methods: {
    previewItemHandler(item) {
      this.previewedItem = item;
      this.isPreviwedItem = true;
      console.log(this.previewedItem);
    },
    sunglassesHandler() {
      console.log(this.user);
    },
  },
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

.preview {
  padding: 4rem;
}

.preview figure {
  flex: 1 0 15%;
}
</style>