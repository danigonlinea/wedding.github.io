import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default [
  { ignores: ['dist/**', '.yarn/**', 'node_modules/**', 'public/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  prettierRecommended,
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]
