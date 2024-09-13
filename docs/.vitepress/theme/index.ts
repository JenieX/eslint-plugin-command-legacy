// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext } from 'vitepress'
import Theme from 'vitepress/theme'

import 'floating-vue/dist/style.css'
import 'uno.css'
import './style.css'

// @unocss-include
export default {
  extends: Theme,
  enhanceApp({ app: _ }: EnhanceAppContext) {
  },
}
