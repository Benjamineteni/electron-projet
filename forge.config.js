module.exports = {
    publishers: [
      {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: 'Benjamineteni',
            name: 'electron-projet'
          },
          prerelease: false,
          draft: true
        }
      }
    ]
  }