"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, Send } from "lucide-react"
import { useState } from "react"
import StarBackground from "@/components/star-background"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create a more comprehensive email body
      const emailBody = `Hello Ahamed Vahith,

You have received a new message from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.`

      // Create mailto link with proper encoding
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`)
      const body = encodeURIComponent(emailBody)
      const mailtoLink = `mailto:ahamedvahith33@gmail.com?subject=${subject}&body=${body}`

      // Use window.location.href for better compatibility with mailto
      window.location.href = mailtoLink

      // Show success message
      alert("Your email client should open now. Please hit 'Send' to finish!")

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error opening email client:", error)
      // Fallback: copy email to clipboard
      try {
        await navigator.clipboard.writeText("ahamedvahith33@gmail.com")
        alert("Email client couldn't open. Email address copied to clipboard: ahamedvahith33@gmail.com")
      } catch (clipboardError) {
        alert("Please send your message manually to: ahamedvahith33@gmail.com")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePhoneCall = () => {
    try {
      // Create tel link and trigger it
      const telLink = "tel:+919363658160"
      const link = document.createElement("a")
      link.href = telLink
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      // Fallback: copy number to clipboard
      navigator.clipboard
        .writeText("+919363658160")
        .then(() => {
          alert("Phone number copied to clipboard: +91 9363658160")
        })
        .catch(() => {
          alert("Please call: +91 9363658160")
        })
    }
  }

  const handleEmailClick = () => {
    try {
      const mailtoLink = "mailto:ahamedvahith33@gmail.com"
      const link = document.createElement("a")
      link.href = mailtoLink
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard
        .writeText("ahamedvahith33@gmail.com")
        .then(() => {
          alert("Email address copied to clipboard: ahamedvahith33@gmail.com")
        })
        .catch(() => {
          alert("Please email: ahamedvahith33@gmail.com")
        })
    }
  }

  // Removed location handler

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="contact" className="relative bg-cream dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <StarBackground />
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-dark-teal/10 text-dark-teal dark:bg-blue-400/10 dark:text-blue-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 cursor-pointer hover:bg-dark-teal/5 dark:hover:bg-blue-400/5 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-dark-teal/10 dark:bg-blue-400/10 border border-dark-teal/20 dark:border-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-dark-teal dark:text-blue-400" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium break-all">ahamedvahith33@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={handlePhoneCall}
                  className="flex items-center gap-4 cursor-pointer hover:bg-dark-teal/5 dark:hover:bg-blue-400/5 p-4 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-dark-teal/10 dark:bg-blue-400/10 border border-dark-teal/20 dark:border-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-dark-teal dark:text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">+91 9363658160</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream dark:bg-gray-800 border border-warm-beige dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-dark-teal dark:focus:border-blue-400 transition-colors resize-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream dark:bg-gray-800 border border-warm-beige dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-dark-teal dark:focus:border-blue-400 transition-colors resize-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cream dark:bg-gray-800 border border-warm-beige dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-dark-teal dark:focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-dark-teal to-blue-gray dark:from-blue-500 dark:to-blue-600 text-cream hover:from-dark-teal-light hover:to-blue-gray-light dark:hover:from-blue-400 dark:hover:to-blue-500"
                }`}
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
