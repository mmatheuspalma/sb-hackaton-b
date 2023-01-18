<template>
  <div class="example">
    <el-container>
      <el-container>
        <el-main>
          <div>
            Your current window size: {{ width }}x{{ height }}
          </div>
          <hr class="dashed" />
          <el-rate v-model="rating" />
          <hr class="dashed" />
          <el-button type="primary" icon="SwitchFilled" @click="clickButton"
            >Click me</el-button
          >
          <hr class="dashed" />
          <el-color-picker v-model="color" show-alpha />
          <hr class="dashed" />
          <el-badge :value="2" class="item" type="warning">
            <el-button>replies</el-button>
          </el-badge>
          <hr class="dashed" />
          <div class="slider-demo-block">
            <el-slider v-model="range" range />
          </div>
          <hr class="dashed" />
          <div ref="el" :style="style" class="card">
            <el-card class="box-card" > Drag me! ✌️</el-card>
          </div>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import party from "party-js";
import { useWindowSize } from '@vueuse/core';
import { useDraggable } from '@vueuse/core'

party.resolvableShapes["sb"] = `<img src="/src/assets/logo-square.svg"/>`;

// element plus js
const rating = ref(null);
const color = ref("rgba(19, 206, 102, 0.8)");
const range = ref([30, 60]);
const activities = [
  {
    content: "Hackathon Kickoff",
    timestamp: "2023-01-24",
  },
  {
    content: "Hacking away",
    timestamp: "2023-01-25",
  },
  {
    content: "Hackathon closing ceremony",
    timestamp: "2023-02-01",
  },
];

// click event & partyjs
const clickButton = (event: Event) => {
  const el = event.target as HTMLInputElement
  party.confetti(el, {
    shapes: ["sb", "roundedSquare"],
  });
};

// vueuse
const { width, height } = useWindowSize()
const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 500, y: 120 },
})
</script>

<style>
@media (min-width: 1024px) {
  .example {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.dashed {
  border: 2px dashed var(--el-border-color);
  border-style: none none dotted; 
  color: transparent; 
  background-color: transparent;
  margin: 10px 0;
}

.slider-demo-block {
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.card {
  position: fixed;
  cursor: pointer;
}
</style>
