const initialState = {
  portfolio: {
    currentProject: {
      name: [],
      images: [],
      links: [],
      technology: []
    },
    // probably get rid of this
    // shapesGenerated: false
  },
  chat: {
    isChatOpen: false,
    isPainting: false,
    conversation: {
      messages: []
    }
  }
}

export default initialState
