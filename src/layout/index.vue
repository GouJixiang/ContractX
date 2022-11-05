<template>
  <n-layout class="h-full">
    <n-layout-header bordered class="h-16 flex">
      <div class="logo-ui">
        <img src="../assets/logo.svg" alt="" />
        <span>TDP Doc</span>
      </div>
      <n-space class="h-full flex items-center ml-8 header-menu">
        <a href="">环境</a>
        <a href="">前端</a>
        <a href="">后端</a>
      </n-space>
    </n-layout-header>
    <n-layout has-sider class="slider-height">
      <n-layout-sider
        class="h-100"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon"
        />
      </n-layout-sider>
      <n-layout-content>
        <iframe
          src="https://www.tailwindcss.cn/docs/margin"
          width="1800px"
          height="900px"
          frameborder="0"
        ></iframe>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5'

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: false,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
]

const collapsed = ref(true)

function renderMenuLabel(option: MenuOption) {
  if ('href' in option) {
    return h(
      'a',
      { href: option.href, target: '_blank' },
      option.label as string
    )
  }
  return option.label as string
}

function renderMenuIcon(option: MenuOption) {
  // 渲染图标占位符以保持缩进
  if (option.key === 'sheep-man') return true
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'food') return null
  return h(NIcon, null, { default: () => h(BookmarkOutline) })
}

function expandIcon() {
  return h(NIcon, null, { default: () => h(CaretDownOutline) })
}
</script>

<style lang="scss">
.slider-height {
  height: calc(100vh - 64px);
}

.logo-ui {
  display: flex;
  align-items: center;
  padding-left: 50px;
  width: 240px;

  img {
    height: 40px;
  }

  span {
    margin-left: 20px;
    font-weight: bolder;
    font-size: 18px;
  }
}

.header-menu a {
  font-size: 16px;
  font-weight: bold;
  margin: 0px 15px;
}
</style>
