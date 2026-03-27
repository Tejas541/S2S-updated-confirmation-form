"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Upload, PartyPopper, ArrowRight, Home, Copy, Check } from "lucide-react"

type Step = "intro" | "form" | "success"

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<Step>("intro")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    collegeName: "",
    yearOfStudy: "",
    branch: "",
    whatsappNumber: "",
    careerPath: "",
  })
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const UPI_ID = "gadageomkar0148-1@okhdfcbank"

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy UPI ID")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData, uploadedFile)
    setCurrentStep("success")
  }

  if (currentStep === "intro") {
    return (
      <div className="w-full max-w-[400px] min-h-[700px] bg-[rgba(35,15,15,0.9)] backdrop-blur-[25px] rounded-[20px] p-8 shadow-2xl flex flex-col items-center justify-center">
        {/* Speaker Photo with Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#D6336C] to-[#FF6B35] blur-md opacity-70 animate-pulse" />
          <div className="relative w-48 h-48 rounded-full border-4 border-[#FF6B35] overflow-hidden">
            <img src="/images/speaker.jpeg" alt="Speaker" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Headlines */}
        <p className="text-[#FF6B35] text-xs uppercase tracking-[0.3em] mb-2">Keynote Speaker and Guest </p>
        <h1 className="text-white text-3xl font-bold text-center mb-4"> Mr. PRANAV GANDHE </h1>

        {/* Bio Description */}
        <p className="text-gray-400 text-center text-sm leading-relaxed mb-8 px-4">
         He started just like you — a student with big dreams but no clear path.Today, Pranav Sir is a successful entrepreneur
         who built startups while still in college. This is not just his story — it’s proof that 
         you don’t have to wait for a degree to start building your future. Learn the mindset shifts and practical 
         steps to transform yourself from a student into a Studentpreneur.
        </p>

        {/* Conference Title */}
        <div className="text-center mb-8">
          <h2 className="text-white text-xl font-semibold">Student to Studentpreneur🚀</h2>
          <p className="text-gray-500 text-sm mt-1">Offline Conference - 29 March 2026</p>
        </div>

        {/* Book Your Seat Button */}
        <button
          onClick={() => setCurrentStep("form")}
          className="flex items-center justify-center gap-2 bg-[#FF4757] hover:bg-[#ff5e6c] text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors uppercase tracking-wider"
        >
          Book Your Seat
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    )
  }

  if (currentStep === "success") {
    return (
      <div className="w-full max-w-[400px] min-h-[700px] bg-[rgba(35,15,15,0.9)] backdrop-blur-[25px] rounded-[20px] p-8 shadow-2xl flex flex-col items-center justify-center">
        {/* Celebration Icon */}
        <div className="text-6xl mb-6">
          <PartyPopper className="w-20 h-20 text-[#FF6B35]" />
        </div>

        <h1 className="text-white text-2xl font-bold text-center mb-2">Registration Complete!</h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          Thank you for registering, {formData.firstName}! We are excited to have you.
        </p>

        {/* Offline Pass Ticket */}
        <div className="w-full bg-gradient-to-br from-[#FF6B35] to-[#D6336C] rounded-xl p-1 mb-8">
          <div className="bg-[rgba(35,15,15,0.95)] rounded-lg p-6 relative overflow-hidden">
            {/* Decorative circles for ticket look */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[rgba(35,15,15,0.9)] rounded-full" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[rgba(35,15,15,0.9)] rounded-full" />

            <div className="text-center">
              <p className="text-[#FF6B35] text-xs uppercase tracking-[0.3em] mb-1">Offline Pass</p>
              <h3 className="text-white text-3xl font-bold mb-4">ADMIT ONE</h3>

              <div className="border-t border-dashed border-white/30 pt-4 mt-4">
                <p className="text-white font-semibold">
                  {formData.firstName} {formData.lastName}
                </p>
                <p className="text-gray-400 text-sm">{formData.collegeName}</p>
                <p className="text-gray-500 text-xs mt-2">Student to Studentpreneur 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => {
            setCurrentStep("intro")
            setFormData({
              firstName: "",
              lastName: "",
              collegeName: "",
              yearOfStudy: "",
              branch: "",
              whatsappNumber: "",
              careerPath: "",
            })
            setUploadedFile(null)
          }}
          className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[400px] min-h-[700px] bg-[rgba(35,15,15,0.9)] backdrop-blur-[25px] rounded-[20px] p-8 shadow-2xl">
      <h1 className="text-white text-2xl font-bold text-center mb-2">Student to Studentpreneur</h1>
      <p className="text-gray-400 text-center text-sm mb-8">Conference Registration</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[#999] text-xs uppercase tracking-wider mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label className="block text-[#999] text-xs uppercase tracking-wider mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        {/* College Name */}
        <div>
          <label className="block text-[#999] text-xs uppercase tracking-wider mb-2">College Name</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
            placeholder="Enter your college name"
            required
          />
        </div>

        {/* Year of Study & Branch */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[#999] text-xs uppercase tracking-wider mb-2">Year of Study</label>
            <div className="relative">
              <select
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
                required
              >
                <option value="" disabled className="bg-[#2B1055]">
                  Select
                </option>
                <option value="1st" className="bg-[#2B1055]">
                  1st Year
                </option>
                <option value="2nd" className="bg-[#2B1055]">
                  2nd Year
                </option>
                <option value="3rd" className="bg-[#2B1055]">
                  3rd Year
                </option>
                <option value="4th" className="bg-[#2B1055]">
                  4th Year
                </option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[#999] text-xs uppercase tracking-wider mb-2">Branch</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="CSE, ECE..."
              required
            />
          </div>
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-[#999] text-xs uppercase tracking-wider mb-2">WhatsApp Number</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleInputChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
            placeholder="+91 9876543210"
            required
          />
        </div>

        {/* Career Goal */}
        <div>
          <label className="block text-[#999] text-xs uppercase tracking-wider mb-2">Career Goal</label>
          <div className="relative">
            <select
              name="careerPath"
              value={formData.careerPath}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-white/40 transition-colors cursor-pointer"
              required
            >
              <option value="" disabled className="bg-[#2B1055]">
                Select career goal
              </option>
              <option value="job" className="bg-[#2B1055]">
                Job
              </option>
              <option value="entrepreneurship" className="bg-[#2B1055]">
                Entrepreneurship
              </option>
              <option value="business" className="bg-[#2B1055]">
                Business
              </option>
              <option value="govt-job" className="bg-[#2B1055]">
                Govt Job
              </option>
              <option value="higher-studies" className="bg-[#2B1055]">
                Higher Studies
              </option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Payment Box */}
        <div className="border-2 border-dashed border-white/50 rounded-xl p-4 mt-4">
          <p className="text-[#999] text-xs uppercase tracking-wider text-center mb-3">Payment</p>

          <div className="flex flex-col items-center gap-3">
            {uploadedFile ? (
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={uploadedFile || "/placeholder.svg"}
                  alt="Payment Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/whatsapp-20image-202026-01-16-20at-2012.jpeg"
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <p className="text-[#22c55e] text-xl font-bold">₹299/-</p>

            {/* UPI ID display with copy button */}
            <div className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <span className="text-gray-400 text-xs truncate mr-2">{UPI_ID}</span>
              <button
                type="button"
                onClick={handleCopyUPI}
                className="flex items-center gap-1 text-[#FF6B35] hover:text-[#ff8555] transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-xs">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Upload Button */}
            <label className="w-full cursor-pointer">
              <div className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white hover:bg-white/20 transition-colors">
                <Upload className="w-4 h-4" />
                <span className="text-sm">{uploadedFile ? "Payment Uploaded" : "Upload Payment Screenshot"}</span>
              </div>
              <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF4757] hover:bg-[#ff5e6c] text-white font-bold text-lg py-4 rounded-lg mt-4 transition-colors uppercase tracking-wider"
        >
          Verify & Confirm
        </button>
      </form>
    </div>
  )
}
