import { useEffect, useState } from "react";
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isMobile, setIsMobile] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = async (e) => {
        // We don't want the page to refresh
        e.preventDefault()

        const name = formData.name;
        const email = formData.email;
        const message = formData.message;

        try {
            const response = await fetch("api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
                setFormSuccess(true);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            // TODO: Handle submission error
        }
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1200px)');
        setIsMobile(mediaQuery.matches);

        // const listener = () => setIsMobile(mediaQuery.matches);

    }, []);

    return (
        <>
            <div className="contact-container" id="contact">
                <span className="contact-heading">Contact Us</span>
                <div className="contact-child-container" >
                    {formSuccess ? (
                        <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_nsqfzxxx.json" background="transparent" speed="1" style={{ height: 200, width: 200, margin: "auto", padding: "" }} loop autoplay></lottie-player>
                    ) : (
                        <div
                            className="contact-form-container"
                        >
                            <form method="POST" onSubmit={submitForm} className="contact-form">
                                <div>
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={formData.name} required placeholder="Jhon Sen" />
                                </div>

                                <div>
                                    <label>Email</label>
                                    <input type="email" name="email" onChange={handleInput} value={formData.email} required placeholder="jhon@example.com" />
                                </div>

                                <div>
                                    <label>Message</label>
                                    <textarea name="message" onChange={handleInput} value={formData.message} required placeholder="Write something..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                            {isMobile ? (
                                ""
                            ) : (
                                <div style={{ backgroundColor: "rgb(245, 245, 245)", height: "100%", width: "100%", borderRadius: 20 }}></div>
                            )}
                        </div>
                    )}
                    {isMobile ? (
                        ""
                    ) : (
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_l1mdtmmb.json" background="transparent" speed="1" style={{ height: 600, width: 600 }} loop autoplay></lottie-player>
                    )}
                    {/* <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_l1mdtmmb.json" background="transparent" speed="1" style={{ width: 600, height: 600 }} loop autoplay></lottie-player> */}
                </div>
            </div>
        </>
    )
}

export default Contact;
