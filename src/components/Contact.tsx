import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { developerInfo } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!form.email.trim()) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Introduce un formato de correo válido';
    }
    if (!form.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!form.message.trim()) newErrors.message = 'El mensaje no puede estar vacío';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission holding state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-white border-t border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold font-mono tracking-widest text-[#6366F1] uppercase mb-2"
          >
            Hablemos hoy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight"
          >
            Ponte en Contacto
          </motion.h2>
          <div className="h-0.5 w-12 bg-[#6366F1] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-[#1E293B] font-sans tracking-tight mb-4">
              ¿Conversamos sobre tu próximo gran producto?
            </h3>
            <p className="text-[#475569] font-sans leading-relaxed text-sm mb-6">
              Estoy disponible para colaborar en proyectos puntuales de desarrollo web, construir aplicaciones móviles nativas desde cero, o integrarme directamente en tu equipo actual.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-[#64748B] uppercase leading-none mb-1.5">Escríbeme</p>
                  <a
                    id="contact-email-link"
                    href={`mailto:${developerInfo.email}`}
                    className="text-sm font-semibold font-sans text-[#0F172A] hover:text-[#4338CA] transition-colors"
                  >
                    {developerInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-[#64748B] uppercase leading-none mb-1.5">Llamadas / WhatsApp</p>
                  <a
                    id="contact-phone-link"
                    href={`tel:${developerInfo.phone}`}
                    className="text-sm font-semibold font-sans text-[#0F172A] hover:text-[#4338CA] transition-colors"
                  >
                    {developerInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-[#64748B] uppercase leading-none mb-1.5">Ubicación</p>
                  <p className="text-sm font-semibold font-sans text-[#0F172A] leading-none">
                    {developerInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Input Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-2xs">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  id="contact-form"
                  key="formKey"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-bold font-mono text-[#64748B] uppercase tracking-wider">
                        Tu Nombre
                      </label>
                      <input
                        id="form-name-input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-4 focus:ring-[#6366F1]/10 ${
                          errors.name
                            ? 'border-rose-400'
                            : 'border-[#E2E8F0] focus:border-[#6366F1]'
                        }`}
                        placeholder="Sofía Silva"
                      />
                      {errors.name && (
                        <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle size={11} />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-bold font-mono text-[#64748B] uppercase tracking-wider">
                        Tu Email
                      </label>
                      <input
                        id="form-email-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-4 focus:ring-[#6366F1]/10 ${
                          errors.email
                            ? 'border-rose-400'
                            : 'border-[#E2E8F0] focus:border-[#6366F1]'
                        }`}
                        placeholder="ejemplo@correo.com"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle size={11} />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] font-bold font-mono text-[#64748B] uppercase tracking-wider">
                      Asunto
                    </label>
                    <input
                      id="form-subject-input"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-4 focus:ring-[#6366F1]/10 ${
                        errors.subject
                          ? 'border-rose-400'
                          : 'border-[#E2E8F0] focus:border-[#6366F1]'
                      }`}
                      placeholder="Propuesta de proyecto, Colaboración, Oportunidad..."
                    />
                    {errors.subject && (
                      <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle size={11} />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-bold font-mono text-[#64748B] uppercase tracking-wider">
                      Mensaje
                    </label>
                    <textarea
                      id="form-message-input"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-hidden focus:ring-4 focus:ring-[#6366F1]/10 resize-none ${
                        errors.message
                          ? 'border-rose-400'
                          : 'border-[#E2E8F0] focus:border-[#6366F1]'
                      }`}
                      placeholder="Cuéntame sobre tu idea o los detalles de la oferta..."
                    />
                    {errors.message && (
                      <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle size={11} />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 inline-flex items-center justify-center space-x-2 bg-[#6366F1] hover:bg-[#4F46E5] disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-xl text-xs shadow-2xs transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  id="contact-success-panel"
                  key="successKey"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F172A] font-sans">
                      ¡Tu mensaje ha sido enviado!
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-[#64748B] max-w-sm mx-auto mt-2 leading-relaxed">
                      Muchas gracias por escribirme. Me pondré en contacto contigo lo antes posible para poder conversar en detalle. ¡Que tengas un excelente día!
                    </p>
                  </div>
                  <button
                    id="success-back-btn"
                    onClick={() => setIsSuccess(false)}
                    className="h-10 text-xs px-5 inline-flex items-center justify-center bg-[#EEF2FF] hover:bg-indigo-100 text-[#4338CA] font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
