<script setup>
import { computed, nextTick, ref } from 'vue'

const preview = ref()
const image = ref()
const trigger = ref()
const dialog = ref()
const viewport = ref()
const open = ref(false)
const zoomLevels = [25, 50, 75, 100, 150, 200, 300, 400, 600, 800]
const fitLevel = zoomLevels.indexOf(100)
const level = ref(fitLevel)
const zoom = computed(() => zoomLevels[level.value])
const previewHeight = ref()
const naturalWidth = ref()

async function openDiagram() {
  previewHeight.value = preview.value.offsetHeight
  naturalWidth.value = image.value.querySelector('svg')?.viewBox.baseVal.width
  level.value = fitLevel
  dialog.value.showModal()
  open.value = true
  await nextTick()
  viewport.value.scrollTo(0, 0)
}

async function closeDiagram() {
  open.value = false
  await nextTick()
  dialog.value?.close()
  trigger.value?.focus({ preventScroll: true })
}

async function setZoom(nextLevel) {
  const area = viewport.value
  const center = (area.scrollLeft + area.clientWidth / 2) / area.scrollWidth
  const top = area.scrollTop / zoom.value
  level.value = nextLevel
  await nextTick()
  area.scrollTo(center * area.scrollWidth - area.clientWidth / 2, top * zoom.value)
}
</script>

<template>
  <div ref="preview" class="diagram-preview" :style="{ minHeight: open ? previewHeight + 'px' : undefined }">
    <ClientOnly>
      <Teleport :to="viewport" :disabled="!open">
        <div ref="image" class="diagram-image">
          <slot />
        </div>
      </Teleport>
    </ClientOnly>
    <button ref="trigger" type="button" class="diagram-open" aria-haspopup="dialog" :disabled="!image" @click="openDiagram">
      <span><span aria-hidden="true">⤢</span> Открыть схему</span>
    </button>

    <dialog ref="dialog" class="diagram-dialog" aria-label="Просмотр схемы" @cancel.prevent="closeDiagram" @click.self="closeDiagram">
      <div class="diagram-panel">
        <div class="diagram-toolbar">
          <div class="diagram-controls" role="group" aria-label="Масштаб схемы">
            <button type="button" aria-label="Уменьшить масштаб" :disabled="level === 0" @click="setZoom(level - 1)">−</button>
            <button type="button" :aria-label="`Сбросить масштаб. Текущий масштаб ${zoom}%`" title="Сбросить масштаб" @click="setZoom(fitLevel)">
              <span aria-live="polite">{{ zoom }}%</span>
            </button>
            <button type="button" aria-label="Увеличить масштаб" :disabled="level === zoomLevels.length - 1" @click="setZoom(level + 1)">+</button>
          </div>
          <button type="button" class="diagram-close" aria-label="Закрыть схему" title="Закрыть схему" autofocus @click="closeDiagram">×</button>
        </div>
        <div
          ref="viewport"
          class="diagram-viewport"
          tabindex="0"
          role="region"
          aria-label="Схема с прокруткой"
          :style="{ '--diagram-zoom': zoom / 100, '--diagram-width': naturalWidth ? naturalWidth + 'px' : '100%' }"
        ></div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
.diagram-preview {
  position: relative;
  margin: 20px 0;
  padding: 54px 12px 12px;
  border: 1px solid var(--road-border);
  border-radius: 12px;
  background: var(--road-panel);
}

.diagram-open {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: start;
  justify-content: end;
  padding: 8px;
  border-radius: inherit;
  cursor: zoom-in;
}

.diagram-open > span,
.diagram-toolbar button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-width: 44px;
  min-height: 40px;
  padding: 0 10px;
  border: 1px solid var(--road-border);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 600;
}

.diagram-open:hover > span,
.diagram-toolbar button:hover:enabled {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.diagram-open:focus-visible,
.diagram-toolbar button:focus-visible,
.diagram-viewport:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: -2px;
}

.diagram-image :deep(.mermaid > svg) {
  display: block;
  margin-inline: auto;
}

.diagram-image :deep(.mermaid p) {
  line-height: inherit;
}

.diagram-dialog {
  position: fixed;
  inset: 0;
  width: min(1480px, calc(100% - 32px));
  height: calc(100dvh - 32px);
  max-width: none;
  max-height: none;
  margin: auto;
  padding: 0;
  border: 1px solid var(--road-border);
  border-radius: 16px;
  background: var(--road-panel);
  color: var(--vp-c-text-1);
  overflow: hidden;
}

.diagram-dialog::backdrop {
  background: rgb(0 0 0 / 66%);
}

.diagram-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.diagram-toolbar,
.diagram-controls {
  display: flex;
  align-items: center;
  gap: 6px;
}

.diagram-toolbar {
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid var(--road-border);
}

.diagram-toolbar button:first-child,
.diagram-toolbar button:last-child {
  font-size: 20px;
}

.diagram-controls button:nth-child(2) {
  min-width: 64px;
  font-variant-numeric: tabular-nums;
}

.diagram-toolbar button:disabled {
  opacity: .5;
  cursor: default;
}

.diagram-viewport {
  flex: 1;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  padding: 16px;
}

.diagram-viewport :deep(.diagram-image) {
  width: calc(min(100%, var(--diagram-width)) * var(--diagram-zoom));
  margin-inline: auto;
}

.diagram-viewport :deep(.mermaid > svg) {
  width: 100%;
  height: auto;
  max-width: none !important;
}

@media (max-width: 600px) {
  .diagram-dialog {
    width: calc(100% - 16px);
    height: calc(100dvh - 16px);
  }
}
</style>
