const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5001', // 设置你的应用地址
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // 测试文件路径
    supportFile: false, // 可选：暂时不使用支持文件
  },
})