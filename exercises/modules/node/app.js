const { getPostsForUser, getUserById } = require('./api');

const showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return {
        ...post
      }
    })
    cb(postTemplates)
  })
}

const showUserProfile = (userId, cb) => {
  getUserById(userId, user => {
    const profile = user.name
    cb(user)
  })
}

module.exports = { showPostsForCurrentUser, showUserProfile }