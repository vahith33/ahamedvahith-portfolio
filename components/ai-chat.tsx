"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, User, Bot, Loader2, Sparkles, MessageCircle, X } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e?: React.FormEvent, directMessage?: string) => {
    e?.preventDefault()
    const messageContent = directMessage || input
    if (!messageContent.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: messageContent }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      const data = await response.json()
      
      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `System Error: ${data.error}` },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content },
        ])
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please check your API configuration." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        { role: "assistant", content: "Hi! I'm Ahamed's AI assistant. Ask me anything about his work, skills, or projects!" }
      ])
    }
  }, [])

  return (
    <div className="relative w-full max-w-4xl px-4 flex flex-col items-center">
      {/* Search Style Input Bar */}
      <motion.div
        className="w-full relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-dark-teal/50 to-blue-gray/50 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <form 
          onSubmit={handleSubmit}
          className="relative flex items-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-2 rounded-xl border border-white/20 dark:border-white/10 shadow-xl"
        >
          <div className="flex-1 flex items-center px-4">
            <div className="w-8 h-8 rounded-full bg-dark-teal dark:bg-blue-500 flex items-center justify-center mr-3 shadow-sm transition-colors duration-300">
               <Sparkles size={14} className="text-white" />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Ahamed Vahith..."
              className="w-full bg-transparent border-none focus:outline-none text-gray-800 dark:text-gray-100 text-sm py-2"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-2 bg-dark-teal dark:bg-blue-500 text-white rounded-lg font-bold text-xs transform hover:scale-105 transition-all active:scale-95 disabled:opacity-50 shadow-md"
          >
            {isLoading ? <Loader2 className="animate-spin" size={14} /> : "Ask"}
          </button>
        </form>
      </motion.div>

      {/* Suggestion Chips */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          "What is his key skills?",
          "Which technologies he strong in?",
          "what is his educational background?",
          "View his projects",
          "What is his experience?",
          "What technologies he use?",
        ].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSubmit(undefined, suggestion)}
            className="bg-dark-teal/90 hover:bg-dark-teal dark:bg-blue-500/90 dark:hover:bg-blue-500 text-white text-[10px] md:text-xs py-3 px-4 rounded-lg border border-white/10 text-left transition-all hover:border-white/30 truncate shadow-sm"
          >
            {suggestion}
          </button>
        ))}
      </motion.div>

      {/* AI Response Bubble */}
      <AnimatePresence>
        {messages.length > 0 && messages[messages.length - 1].role === "assistant" && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-6 w-full p-5 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl relative"
          >
            <div className="absolute -top-3 right-8 w-4 h-4 bg-white/80 dark:bg-gray-800/80 rotate-45 border-l border-t border-white/20 dark:border-white/10" />
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-xl bg-dark-teal dark:bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-white" />
               </div>
               <div className="flex-1">
                 <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                   {messages[messages.length - 1].content}
                 </p>
               </div>
               <button 
                 onClick={() => setMessages([])}
                 className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 self-start"
               >
                 <X size={16} />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
