import DefaultTheme from 'vitepress/theme'
import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-mono/cyrillic-500.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import DiagramViewer from './DiagramViewer.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DiagramViewer', DiagramViewer)
  }
}
