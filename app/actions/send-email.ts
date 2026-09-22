"use server"

import nodemailer from "nodemailer"

type ContactSubmission = {
  name: string
  email: string
  company: string
  services: string[]
  projectType: string
  goals: string
  budget: string
  timeline: string
  website: string
  referral: string
}

const clean = (value: string, max = 2000) => value.trim().slice(0, max)

export async function sendEmail(formData: ContactSubmission) {
  const name = clean(formData.name, 120)
  const email = clean(formData.email, 180)
  const goals = clean(formData.goals)
  if (!name || !email || !goals || !email.includes("@") || !formData.services.length) {
    return { success: false, message: "Please complete your name, email, project needs and at least one service." }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    })
    const details = `Name: ${name}\nEmail: ${email}\nCompany: ${clean(formData.company, 160) || "Not provided"}\nServices: ${formData.services.map((item) => clean(item, 80)).join(", ")}\nProject type: ${clean(formData.projectType, 100) || "Not provided"}\nBudget: ${clean(formData.budget, 100) || "Not provided"}\nTimeline: ${clean(formData.timeline, 100) || "Not provided"}\nCurrent website: ${clean(formData.website, 300) || "Not provided"}\nHow they heard about us: ${clean(formData.referral, 200) || "Not provided"}\n\nGoals:\n${goals}`
    await transporter.sendMail({
      from: `"Dream Pixel Website" <${process.env.SMTP_USER}>`,
      to: "info@dreampixel.co.uk",
      replyTo: email,
      subject: `New Dream Pixel project enquiry from ${name}`,
      text: details,
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto"><h2 style="color:#8b5cf6">New Dream Pixel project enquiry</h2><pre style="white-space:pre-wrap;font:15px/1.6 Arial,sans-serif">${details.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre></div>`,
    })
    return { success: true, message: "Enquiry sent successfully" }
  } catch (error) {
    console.error("Error sending project enquiry:", error)
    return { success: false, message: "We could not send your enquiry. Please email info@dreampixel.co.uk instead." }
  }
}
