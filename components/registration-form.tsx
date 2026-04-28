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

  // ================= INTRO =================
  if (currentStep === "intro") {
    return (
      <div className="w-full max-w-[420px] min-h-[700px] bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center">

        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 blur-md opacity-70 animate-pulse" />
          <div className="relative w-48 h-48 rounded-full border-4 border-orange-500 overflow-hidden">
            <img src="/images/speaker_Mayur.jpeg" className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">
          Keynote Speaker and Guest
        </p>

        <h1 className="text-foreground text-3xl font-bold text-center mb-4">
          Mr. Mayur Patel
        </h1>

        <p className="text-muted-foreground text-center text-sm leading-relaxed mb-8 px-4">
           He started just like you — a student with big dreams but no clear path.Today, Mayur Sir is a successful entrepreneur
     who built startups while still in college. This is not just his story — it’s proof that 
     you don’t have to wait for a degree to start building your future. Learn the mindset shifts and practical 
     steps to transform yourself from a student into a Studentpreneur.
        </p>

        <div className="text-center mb-8">
          <h2 className="text-foreground text-xl font-semibold">
            Student to Studentpreneur 🚀
          </h2>
          <p className="text-green-500 text-sm mt-1">
            Offline Conference - 1st May 2026
          </p>
        </div>

        <button
          onClick={() => setCurrentStep("form")}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Book Your Seat
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    )
  }

  // ================= SUCCESS =================
  if (currentStep === "success") {
    return (
      <div className="w-full max-w-[420px] min-h-[700px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center">

        <PartyPopper className="w-20 h-20 text-primary mb-6" />

        <h1 className="text-foreground text-2xl font-bold text-center mb-2">
          Registration Complete!
        </h1>

        <p className="text-muted-foreground text-center text-sm mb-8">
          Thank you, {formData.firstName}!
        </p>

        <div className="w-full bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl p-1 mb-8">
          <div className="bg-background rounded-lg p-6 text-center">
            <p className="text-primary text-xs uppercase tracking-wider">Offline Pass</p>
            <h3 className="text-foreground text-3xl font-bold mb-4">ADMIT ONE</h3>

            <div className="border-t border-dashed border-border pt-4 mt-4">
              <p className="font-semibold text-foreground">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-muted-foreground text-sm">{formData.collegeName}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentStep("intro")
            setUploadedFile(null)
          }}
          className="flex items-center gap-2 bg-white/10 border border-white/20 text-foreground px-6 py-3 rounded-lg hover:bg-white/20"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    )
  }

  // ================= FORM =================
  return (
    <div className="w-full max-w-[420px] min-h-[700px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

      <h1 className="text-foreground text-2xl font-bold text-center mb-2">
        Student to Studentpreneur
      </h1>

      <p className="text-muted-foreground text-center text-sm mb-8">
        Conference Registration
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <input name="firstName" placeholder="First Name" required onChange={handleInputChange}
            className="input-style" />
          <input name="lastName" placeholder="Last Name" required onChange={handleInputChange}
            className="input-style" />
        </div>

        <input name="collegeName" placeholder="College Name" required onChange={handleInputChange}
          className="input-style" />

        <div className="grid grid-cols-2 gap-4">
          <select name="yearOfStudy" required onChange={handleInputChange} className="input-style">
            <option value="">Year</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
          </select>

          <input name="branch" placeholder="Branch" required onChange={handleInputChange}
            className="input-style" />
        </div>

        <input name="whatsappNumber" placeholder="WhatsApp Number" required onChange={handleInputChange}
          className="input-style" />

        <select name="careerPath" required onChange={handleInputChange} className="input-style">
          <option value="">Career Goal</option>
          <option>Job</option>
          <option>Entrepreneurship</option>
          <option>Business</option>
          <option>Govt Job</option>
        </select>

        {/* Payment */}
        <div className="border border-border bg-white/5 rounded-xl p-5 space-y-4 text-center">

          <div className="w-32 h-32 mx-auto bg-white rounded-lg overflow-hidden">
            <img
              src={uploadedFile || "/images/whatsapp-20image-202026-01-16-20at-2012.jpeg"}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-primary font-bold text-xl">₹299</p>

          <div className="flex justify-between items-center bg-background border border-border rounded-lg px-3 py-2">
            <span className="text-muted-foreground text-xs">{UPI_ID}</span>
            <button type="button" onClick={handleCopyUPI} className="text-primary text-xs">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <input type="file" onChange={handleFileUpload} className="hidden" id="upload" />

          <label htmlFor="upload" className="cursor-pointer bg-white/10 px-4 py-2 rounded-lg block">
            Upload Screenshot
          </label>
        </div>

        <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg">
          Verify & Confirm
        </button>

      </form>
    </div>
  )
}
