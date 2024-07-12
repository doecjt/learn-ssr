import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
})
