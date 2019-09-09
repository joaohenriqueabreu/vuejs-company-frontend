module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      'Components/(.*)$':'<rootDir>/src/components/$1',
      'Router/(.*)$':'<rootDir>/src/router/$1',
      'Pages/(.*)$':'<rootDir>/src/pages/$1',
      'Store/(.*)$':'<rootDir>/src/store/$1',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  };