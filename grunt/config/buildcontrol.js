module.exports = {
  options: {
    dir: 'dist',
    commit: true,
    push: true,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
  },
  pages: {
    options: {
      remote: 'git@github.com:craftsmans/www.git', 
      branch: 'gh-pages'
    }
  }
}