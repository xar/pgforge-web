export const useChatisto = () => {
  const isLoaded = ref(false)
  const isReady = ref(false)
  const loadingError = ref<string | null>(null)

  const loadChatisto = () => {
    return new Promise((resolve, reject) => {
      if (isLoaded.value) {
        resolve(true)
        return
      }

      try {
        const script = document.createElement('script')
        script.src = 'https://sdk.chatisto.com/chatisto-sdk.js'
        script.async = true
        
        script.onload = () => {
          try {
            if (window.chatistoLoader && typeof window.chatistoLoader.LoadChatisto === 'function') {
              window.chatistoLoader.LoadChatisto({
                publicKey: 'f5b0a7f0-97bd-456a-b6eb-ff7d12ab1005',
                autoOpen: false
              })
              isLoaded.value = true
              isReady.value = true
              resolve(true)
            } else {
              throw new Error('Chatisto loader not available')
            }
          } catch (error) {
            const message = 'Failed to initialize Chatisto SDK'
            console.error(message, error)
            loadingError.value = message
            reject(error)
          }
        }
        
        script.onerror = () => {
          const message = 'Failed to load Chatisto SDK'
          console.error(message)
          loadingError.value = message
          reject(new Error(message))
        }
        
        document.body.appendChild(script)
      } catch (error) {
        const message = 'Failed to load Chatisto SDK'
        console.error(message, error)
        loadingError.value = message
        reject(error)
      }
    })
  }

  const openChat = () => {
    if (isReady.value && window.chatistoLoader) {
      try {
        window.chatistoLoader.openChat?.()
      } catch (error) {
        console.error('Failed to open chat', error)
      }
    }
  }

  const closeChat = () => {
    if (isReady.value && window.chatistoLoader) {
      try {
        window.chatistoLoader.closeChat?.()
      } catch (error) {
        console.error('Failed to close chat', error)
      }
    }
  }

  return {
    isLoaded: readonly(isLoaded),
    isReady: readonly(isReady),
    loadingError: readonly(loadingError),
    loadChatisto,
    openChat,
    closeChat
  }
}