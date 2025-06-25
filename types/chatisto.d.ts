declare global {
  interface Window {
    chatistoLoader?: {
      LoadChatisto: (config: {
        publicKey: string
        autoOpen?: boolean
      }) => void
      openChat?: () => void
      closeChat?: () => void
    }
  }
}

export {}