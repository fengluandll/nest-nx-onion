module.exports = {
  name: 'backend-user-ui-api-rest',
  preset: '../../../../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../../../../../coverage/libs/backend/user/ui/api/rest'
};
