import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import mobileSignUpImage from "./assets/images/illustration-sign-up-mobile.svg";
import desktopSignUpImage from "./assets/images/illustration-sign-up-desktop.svg";

import iconSuccess from "./assets/images/icon-success.svg";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <main>
      {!isSuccess ? (
        <section className="subscription-form-section">
          <article className="subscription-img-container">
            <picture>
              <source media="(min-width: 790px)" srcSet={desktopSignUpImage} />
              <img src={mobileSignUpImage} alt="sign up chart" />
            </picture>
          </article>
          <article className="main-container">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="items-container">
              <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
            </div>
            <Form display={() => setIsSuccess(!isSuccess)} />
          </article>
        </section>
      ) : (
        <section className="subscription-success">
          <article className="success-message-container">
            <div className="message-container">
              <img src={iconSuccess} alt="success icon" />
              <h2>Thanks for subscribing!</h2>
              <p>
                A confirmation email has been sent to{" "}
                <span>ash@loremcompany.com </span>. Please open it and click the
                button inside to confirm your subscription.
              </p>
              <div className="button-container">
                <button type="button" onClick={() => setIsSuccess(!isSuccess)}>
                  Dismiss message
                </button>
              </div>
            </div>
          </article>
        </section>
      )}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/"
          target="_blank"
        >
          Mikiyas Kebede
        </a>
        .
      </div>
    </main>
  );
}

export default App;
