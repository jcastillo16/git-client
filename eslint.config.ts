import js from '@eslint/js';
import ts from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier/recommended';

export default ts.config(
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...ts.configs.recommended,
  prettier,
  {
    files: ['**/*.{ts,vue,js}'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
);
