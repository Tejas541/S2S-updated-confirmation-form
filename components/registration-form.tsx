"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, Upload, PartyPopper, ArrowRight, Home, Copy, Check } from "lucide-react"
import { toPng } from "html-to-image"

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
    await navigator.clipboard.writeText(UPI_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setUploadedFile(URL.createObjectURL(file))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("success")
  }
const downloadPass = async () => {
  if (typeof window === "undefined") return // ✅ FIX

  const node = document.getElementById("pass")
  if (!node) return

  try {
    const dataUrl = await toPng(node)

    const link = document.createElement("a")
    link.download = "event-pass.png"
    link.href = dataUrl
    link.click()
  } catch (error) {
    console.error("Error generating image:", error)
  }
}

  // ================= INTRO =================
  if (currentStep === "intro") {
  return (
    <div className="w-full max-w-[420px] min-h-[700px] bg-[#4b0f12] rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center">

      {/* IMAGE */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-orange-500 blur-xl opacity-60" />
      <div className="relative w-[180px] h-[180px] rounded-full border-4 border-orange-500 overflow-hidden">
          <img src="/images/speaker_Mayur.jpeg" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* TOP TEXT */}
      <p className="text-orange-400 text-xs uppercase tracking-[0.3em] mb-2">
        KEYNOTE SPEAKER AND GUEST
      </p>

      {/* NAME */}
      <h1 className="text-white text-3xl font-bold text-center mb-4">
        Mr. Mayur Patel
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-300 text-center text-sm leading-relaxed mb-8 px-4">
        He started just like you — a student with big dreams but no clear path. Today, Mayur Sir is a successful entrepreneur who built startups while still in college. This is not just his story — it’s proof that you don’t have to wait for a degree to start building your future.
      </p>

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-white text-lg font-semibold">
          Student to Studentpreneur 🚀
        </h2>
        <p className="text-green-400 text-sm mt-1 font-medium">
          Offline Conference - 1st May 2026
        </p>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => setCurrentStep("form")}
        className="w-full bg-[#ff4d5a] hover:bg-[#ff5e6c] text-white font-bold py-3 rounded-lg transition-all"
      >
        BOOK YOUR SEAT →
      </button>

    </div>
  )
}

  // ================= SUCCESS =================
 if (currentStep === "success") {
  return (
    <div className="w-full max-w-[400px] min-h-[700px] bg-[rgba(35,15,15,0.9)] rounded-[20px] p-8 shadow-2xl flex flex-col items-center justify-center">

      {/* Celebration Icon (if you had it) */}

      <h1 className="text-white text-2xl font-bold text-center mb-2">
        Registration Complete!
      </h1>

      <p className="text-gray-400 text-center text-sm mb-8">
        Thank you for registering, {formData.firstName}! We are excited to have you.
      </p>
{/* Premium Ticket */}
<div
  id="pass"
  className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-8"
>
  {/* Top Banner */}
  <div className="bg-gradient-to-r from-[#ff4d5a] to-[#c2185b] p-4 text-center">
    <p className="text-white text-xs tracking-[0.3em] uppercase">
      Student to Studentpreneur
    </p>
    <h2 className="text-white text-xl font-bold mt-1">
      Offline Conference
    </h2>
  </div>

  {/* Ticket Body */}
  <div className="p-5 bg-white relative">

    {/* Ticket Cut */}
    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full" />
    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-100 rounded-full" />

    {/* Event Info */}
    <div className="text-center mb-4">
      <h3 className="text-black text-lg font-semibold">
        ADMIT ONE 🎟️
      </h3>
      <p className="text-gray-500 text-xs">
        Entry Pass
      </p>
    </div>

    {/* Divider */}
    <div className="border-t border-dashed border-gray-300 my-4" />

    {/* User Details */}
    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-500">Name</span>
        <span className="text-black font-medium">
          {formData.firstName} {formData.lastName}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">College</span>
        <span className="text-black font-medium">
          {formData.collegeName}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Pass Type</span>
        <span className="text-black font-medium">
          Student Entry
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-500">Amount</span>
        <span className="text-green-600 font-semibold">
          ₹299 Paid
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-dashed border-gray-300 my-4" />

    {/* Footer */}
    <div className="text-center">
      <p className="text-gray-600 text-xs">
        Show this pass at entry gate
      </p>
    </div>

  </div>
</div>
      <button
  onClick={downloadPass}
  className="w-full bg-[#FF4757] hover:bg-[#ff5e6c] text-white py-3 rounded-lg font-semibold"
>
  Download Pass 🎟️
</button>
      
        </div>
      </div>

      {/* Back Button */}
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

  // ================= FORM =================
return (
  <div className="w-full max-w-[400px] min-h-[700px] bg-[rgba(35,15,15,0.9)] rounded-[20px] p-8 shadow-2xl">

    <h1 className="text-white text-2xl font-bold text-center mb-2">
      Student to Studentpreneur
    </h1>

    <p className="text-gray-400 text-center text-sm mb-8">
      Conference Registration
    </p>

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

      {/* Year & Branch */}
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
              <option value="" disabled className="bg-[#2B1055]">Select</option>
              <option value="1st" className="bg-[#2B1055]">1st Year</option>
              <option value="2nd" className="bg-[#2B1055]">2nd Year</option>
              <option value="3rd" className="bg-[#2B1055]">3rd Year</option>
              <option value="4th" className="bg-[#2B1055]">4th Year</option>
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

      {/* WhatsApp */}
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
            <option value="" disabled className="bg-[#2B1055]">Select career goal</option>
            <option value="job" className="bg-[#2B1055]">Job</option>
            <option value="entrepreneurship" className="bg-[#2B1055]">Entrepreneurship</option>
            <option value="business" className="bg-[#2B1055]">Business</option>
            <option value="govt-job" className="bg-[#2B1055]">Govt Job</option>
            <option value="higher-studies" className="bg-[#2B1055]">Higher Studies</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Payment */}
      <div className="border-2 border-dashed border-white/50 rounded-xl p-4 mt-4">
        <p className="text-[#999] text-xs uppercase tracking-wider text-center mb-3">Payment</p>

        <div className="flex flex-col items-center gap-3">
          <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={uploadedFile || "/images/whatsapp-20image-202026-01-16-20at-2012.jpeg"}
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-[#22c55e] text-xl font-bold">₹299/-</p>

          <div className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">
            <span className="text-gray-400 text-xs truncate mr-2">{UPI_ID}</span>
            <button type="button" onClick={handleCopyUPI} className="text-[#FF6B35] text-xs">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <label className="w-full cursor-pointer">
            <div className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white hover:bg-white/20 transition-colors">
              <Upload className="w-4 h-4" />
              <span className="text-sm">Upload Payment Screenshot</span>
            </div>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      </div>

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
