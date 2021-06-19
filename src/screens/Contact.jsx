import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import '../styles/style.css'

function Contact({ setScreen, language, colorScheme, colorTheme }) {
    const [focused, setFocused] = useState(0);
    const [validation, setValidation] = useState([1, 1, 1, 1])

    useEffect(() => {
        setScreen(3)
    }, [setScreen])


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_odH2IJVs', e.target, 'user_RpcTTj6nRQ0RrobcgPdio')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        _resetForm();
        alert(language === "EN" ? "Thank you for contacting me. I will respond you soon." : "Dziękuję za kontakt. Odpowiem wkrótce.")
    }


    const _resetForm = () => {
        document.getElementById("contact-form").reset();
    }


    return (
        <div className="form-screen">
            <form id="contact-form" onSubmit={sendEmail}>
                <div className="space-row">
                    <div className="input-field">
                        <label
                            style={{
                                opacity: focused === 1 ? 1 : 0,
                                color: colorTheme === "dark" ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.5)"
                            }}
                            title={language === "EN" ? "required" : "wymagane"}
                        >
                            {language === "EN" ? "Name" : "Imię"}:
                        </label>
                        <div className="indicator" style={{ backgroundColor: validation[0] ? (focused === 1 ? colorScheme.primary : colorScheme.secondary) : "red", opacity: colorTheme === "dark" ? focused === 1 ? 1 : .8 : 1 }} />
                        <input
                            onFocus={(e) => setFocused(1)}
                            onBlur={(e) => { setFocused(0); }}
                            placeholder={focused !== 1 ? (language === "EN" ? "Name" : "Imię") : ""}
                            style={{ backgroundColor: colorScheme.backgroundForm, color: colorScheme.formText }}
                            required
                            name="user_name"
                            onInvalid={(e) => setValidation([0, validation[1], validation[2], validation[3]])}
                        />
                    </div>
                    <div style={{ width: "40px" }} />
                    <div className="input-field" >
                        <label title={language === "EN" ? "required" : "wymagane"} style={{ opacity: focused === 2 ? 1 : 0, color: colorTheme === "dark" ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.5)" }}>Email:</label>
                        <div className="indicator" style={{ backgroundColor: validation[1] ? (focused === 2 ? colorScheme.primary : colorScheme.secondary) : "red", opacity: colorTheme === "dark" ? focused === 2 ? 1 : .8 : 1 }} />
                        <input
                            onFocus={(e) => setFocused(2)}
                            name="user_email"
                            onBlur={(e) => { setFocused(0); }}
                            placeholder={focused !== 2 ? "Email" : ""}
                            style={{ backgroundColor: colorScheme.backgroundForm, color: colorScheme.formText }}
                            required
                            onInvalid={(e) => setValidation([validation[0], 0, validation[2], validation[3]])}
                        />
                    </div>
                </div>

                <div className="input-field" >
                    <label title={language === "EN" ? "required" : "wymagane"} style={{ opacity: focused === 3 ? 1 : 0, color: colorTheme === "dark" ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.5)" }}>{language === "EN" ? "Title" : "Tytuł"}:</label>
                    <div className="indicator" style={{ backgroundColor: validation[2] ? (focused === 3 ? colorScheme.primary : colorScheme.secondary) : "red", opacity: colorTheme === "dark" ? focused === 3 ? 1 : .8 : 1 }} />
                    <input
                        onFocus={(e) => setFocused(3)}
                        name="title"
                        onBlur={(e) => { setFocused(0); }}
                        placeholder={focused !== 3 ? (language === "EN" ? "Title" : "Tytuł") : ""}
                        style={{ backgroundColor: colorScheme.backgroundForm, color: colorScheme.formText }}
                        required
                        onInvalid={(e) => setValidation([validation[0], validation[1], 0, validation[3]])}
                    />
                </div>
                <div className="input-field">
                    <label title={language === "EN" ? "required" : "wymagane"} style={{ opacity: focused == 4 ? 1 : 0, color: colorTheme === "dark" ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.5)" }}>{language === "EN" ? "Message" : "Wiadomość"}:</label>
                    <div className="indicator" style={{ backgroundColor: validation[3] ? (focused === 4 ? colorScheme.primary : colorScheme.secondary) : "red", height: "100%", opacity: colorTheme === "dark" ? focused === 4 ? 1 : .8 : 1 }} />
                    <textarea
                        onFocus={(e) => setFocused(4)}
                        name="message"
                        onBlur={(e) => { setFocused(0) }}
                        placeholder={focused !== 4 ? (language === "EN" ? "Message" : "Wiadomość") : ""}
                        style={{ backgroundColor: colorScheme.backgroundForm, color: colorScheme.formText }}
                        required
                        onInvalid={(e) => setValidation([validation[0], validation[1], validation[2], 0])}
                    />
                </div>
                <div className="space-row" style={{ marginTop: "20px" }}>
                    <div>
                        <a href="mailto:mikolaj.marcin.mrozek@gmial.com" style={{ color: colorScheme.primary }}>
                            <p className="email-head">
                                {language === "EN" ? "contact by email:" : "kontakt mailowy:"}
                            </p>
                            <p className="email-body">
                                mikolaj.marcin.mrozek@gmial.com
                            </p>
                        </a>
                    </div>
                    <div>
                        <button type="submit">{language === "EN" ? "send" : "wyślij"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;