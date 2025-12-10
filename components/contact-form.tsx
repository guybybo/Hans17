"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, Paperclip, X, Mail, Info } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function ContactForm() {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [sentCode, setSentCode] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [isSendingCode, setIsSendingCode] = useState(false)
  const [message, setMessage] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const labels = {
    en: {
      title: "Get in Touch",
      email: "Your Email",
      verifyEmail: "Verify Email",
      sendCode: "Send Code",
      sending: "Sending...",
      enterCode: "Enter verification code",
      verify: "Verify",
      verified: "Verified!",
      message: "Message",
      attachment: "Attachments",
      addFile: "Add File",
      send: "Send Message",
      success: "Message sent successfully!",
      required: "This field is required",
      codeSent: "Verification code sent to your email!",
      notice: "To send an email, you must enter your email and verify its authenticity.",
    },
    ko: {
      title: "연락하기",
      email: "이메일",
      verifyEmail: "이메일 인증",
      sendCode: "인증코드 전송",
      sending: "전송 중...",
      enterCode: "인증 코드 입력",
      verify: "인증하기",
      verified: "인증 완료!",
      message: "메시지",
      attachment: "첨부파일",
      addFile: "파일 추가",
      send: "메시지 보내기",
      success: "메시지가 전송되었습니다!",
      required: "필수 입력 항목입니다",
      codeSent: "이메일로 인증코드가 전송되었습니다!",
      notice: "메일을 발송하기 위해선 본인의 이메일을 입력후 진위 인증을 받아야 합니다.",
    },
    zh: {
      title: "联系我",
      email: "您的邮箱",
      verifyEmail: "验证邮箱",
      sendCode: "发送验证码",
      sending: "发送中...",
      enterCode: "输入验证码",
      verify: "验证",
      verified: "已验证!",
      message: "留言",
      attachment: "附件",
      addFile: "添加文件",
      send: "发送消息",
      success: "消息发送成功！",
      required: "此字段为必填项",
      codeSent: "验证码已发送到您的邮箱！",
      notice: "要发送电子邮件，您必须输入您的电子邮件并验证其真实性。",
    },
    ja: {
      title: "お問い合わせ",
      email: "メールアドレス",
      verifyEmail: "メール認証",
      sendCode: "コード送信",
      sending: "送信中...",
      enterCode: "認証コードを入力",
      verify: "認証する",
      verified: "認証完了!",
      message: "メッセージ",
      attachment: "添付ファイル",
      addFile: "ファイルを追加",
      send: "送信",
      success: "メッセージが送信されました！",
      required: "この項目は必須です",
      codeSent: "認証コードがメールで送信されました！",
      notice: "メールを送信するには、メールアドレスを入力してその真正性を確認する必要があります。",
    },
    th: {
      title: "ติดต่อเรา",
      email: "อีเมลของคุณ",
      verifyEmail: "ยืนยันอีเมล",
      sendCode: "ส่งรหัส",
      sending: "กำลังส่ง...",
      enterCode: "ป้อนรหัสยืนยัน",
      verify: "ยืนยัน",
      verified: "ยืนยันแล้ว!",
      message: "ข้อความ",
      attachment: "ไฟล์แนบ",
      addFile: "เพิ่มไฟล์",
      send: "ส่งข้อความ",
      success: "ส่งข้อความสำเร็จ！",
      required: "ช่องนี้จำเป็นต้องกรอก",
      codeSent: "รหัสยืนยันถูกส่งไปยังอีเมลของคุณ！",
      notice: "เพื่อส่งอีเมล คุณต้องป้อนอีเมลของคุณและยืนยันความถูกต้อง",
    },
    ru: {
      title: "Связаться со мной",
      email: "Ваш Email",
      verifyEmail: "Проверить email",
      sendCode: "Отправить код",
      sending: "Отправка...",
      enterCode: "Введите код проверки",
      verify: "Проверить",
      verified: "Проверено!",
      message: "Сообщение",
      attachment: "Вложения",
      addFile: "Добавить файл",
      send: "Отправить сообщение",
      success: "Сообщение успешно отправлено!",
      required: "Это поле обязательно",
      codeSent: "Код проверки отправлен на ваш email!",
      notice:
        "Чтобы отправить электронное письмо, вы должны ввести свой адрес электронной почты и подтвердить его подлинность.",
    },
    es: {
      title: "Ponerse en contacto",
      email: "Tu correo electrónico",
      verifyEmail: "Verificar correo",
      sendCode: "Enviar código",
      sending: "Enviando...",
      enterCode: "Ingresar código de verificación",
      verify: "Verificar",
      verified: "¡Verificado!",
      message: "Mensaje",
      attachment: "Archivos adjuntos",
      addFile: "Agregar archivo",
      send: "Enviar mensaje",
      success: "¡Mensaje enviado exitosamente!",
      required: "Este campo es obligatorio",
      codeSent: "¡Código de verificación enviado a tu correo!",
      notice: "Para enviar un correo electrónico, debe ingresar su correo electrónico y verificar su autenticidad.",
    },
    fr: {
      title: "Entrer en contact",
      email: "Votre e-mail",
      verifyEmail: "Vérifier l'e-mail",
      sendCode: "Envoyer le code",
      sending: "Envoi...",
      enterCode: "Entrer le code de vérification",
      verify: "Vérifier",
      verified: "Vérifié!",
      message: "Message",
      attachment: "Pièces jointes",
      addFile: "Ajouter un fichier",
      send: "Envoyer le message",
      success: "Message envoyé avec succès!",
      required: "Ce champ est obligatoire",
      codeSent: "Code de vérification envoyé à votre e-mail!",
      notice: "Pour envoyer un e-mail, vous devez saisir votre e-mail et vérifier son authenticité.",
    },
    de: {
      title: "In Kontakt treten",
      email: "Ihre E-Mail",
      verifyEmail: "E-Mail verifizieren",
      sendCode: "Code senden",
      sending: "Senden...",
      enterCode: "Bestätigungscode eingeben",
      verify: "Verifizieren",
      verified: "Verifiziert!",
      message: "Nachricht",
      attachment: "Anhänge",
      addFile: "Datei hinzufügen",
      send: "Nachricht senden",
      success: "Nachricht erfolgreich gesendet!",
      required: "Dieses Feld ist erforderlich",
      codeSent: "Bestätigungscode an Ihre E-Mail gesendet!",
      notice: "Um eine E-Mail zu senden, müssen Sie Ihre E-Mail eingeben und deren Echtheit überprüfen.",
    },
    vi: {
      title: "Liên hệ",
      email: "Email của bạn",
      verifyEmail: "Xác minh email",
      sendCode: "Gửi mã",
      sending: "Đang gửi...",
      enterCode: "Nhập mã xác minh",
      verify: "Xác minh",
      verified: "Đã xác minh!",
      message: "Tin nhắn",
      attachment: "Tệp đính kèm",
      addFile: "Thêm tệp",
      send: "Gửi tin nhắn",
      success: "Tin nhắn đã được gửi thành công!",
      required: "Trường này là bắt buộc",
      codeSent: "Mã xác minh đã được gửi đến email của bạn!",
      notice: "Để gửi email, bạn phải nhập email của mình và xác minh tính xác thực của nó.",
    },
  }

  const t = labels[language] || labels.en

  const handleSendCode = async () => {
    if (!email) return

    setIsSendingCode(true)
    // Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setSentCode(code)

    // In production, send this code via email API
    // For now, just log it (in production this would be sent via backend)
    console.log("[v0] Verification code:", code)

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert(`${t.codeSent}\n${code}`)
    setIsSendingCode(false)
  }

  const handleVerifyCode = () => {
    if (verificationCode === sentCode) {
      setIsVerified(true)
    } else {
      alert("Invalid verification code")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message || !isVerified) return

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("to", "biginter.ai@gmail.com")
      formData.append("from", email)
      formData.append("message", message)

      files.forEach((file) => {
        formData.append("files", file)
      })

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSuccess(true)
        setEmail("")
        setMessage("")
        setFiles([])
        setIsVerified(false)
        setSentCode("")
        setVerificationCode("")
        setTimeout(() => setIsSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Failed to send message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isVerified}
              className="bg-background/80 border-border text-foreground placeholder:text-foreground/60 focus:ring-2 focus:ring-primary/50"
            />
            {!isVerified && (
              <Button
                type="button"
                onClick={handleSendCode}
                disabled={!email || isSendingCode}
                className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
              >
                <Mail className="h-4 w-4 mr-2" />
                {isSendingCode ? t.sending : t.sendCode}
              </Button>
            )}
            {isVerified && (
              <Button type="button" disabled className="bg-green-600 text-white whitespace-nowrap">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                {t.verified}
              </Button>
            )}
          </div>

          {sentCode && !isVerified && (
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder={t.enterCode}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                className="bg-background/80 border-border text-foreground placeholder:text-foreground/60 focus:ring-2 focus:ring-primary/50"
              />
              <Button
                type="button"
                onClick={handleVerifyCode}
                disabled={!verificationCode}
                className="bg-orange-500 text-white hover:bg-orange-600 whitespace-nowrap"
              >
                {t.verify}
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder={t.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            disabled={!isVerified}
            className="bg-background/80 border-border text-foreground placeholder:text-foreground/60 focus:ring-2 focus:ring-primary/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="file-upload"
            className={`flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-border rounded-lg transition-colors bg-secondary/30 ${
              isVerified ? "cursor-pointer hover:border-primary/50" : "cursor-not-allowed opacity-50"
            }`}
          >
            <Paperclip className="h-4 w-4 mr-2 text-foreground" />
            <span className="text-sm text-foreground font-medium">{t.addFile}</span>
            <input
              id="file-upload"
              type="file"
              multiple
              onChange={handleFileChange}
              disabled={!isVerified}
              className="hidden"
            />
          </label>

          {files.length > 0 && (
            <div className="space-y-1">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2 bg-secondary/50 rounded-lg text-sm"
                >
                  <span className="text-foreground truncate flex-1">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="ml-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !email || !message || !isVerified}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium"
        >
          {isSuccess ? (
            <>
              <CheckCircle2 className="h-4 w-4 mr-2" />
              {t.success}
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? t.sending : t.send}
            </>
          )}
        </Button>
      </form>

      <div className="flex items-start gap-2 p-3 rounded-lg bg-orange-500/20">
        <Info className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
        <p className="text-xs text-orange-100 leading-relaxed font-medium">{t.notice}</p>
      </div>
    </div>
  )
}
