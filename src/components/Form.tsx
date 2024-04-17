import { FormEvent, useState } from "react";
import "../styles/form.css";

const Form = ({ display }: { display: () => void }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      console.log("email is invalid");
      setEmail("");
      return;
    }
    display();
    console.log("Form is submitted");
  };

  const validateForm = () => {
    setError("");

    if (!email) {
      setError("Valid email required");
      return false;
    }
    return true;
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="label-container">
        <label htmlFor="email"> Email address</label>
        {error && (
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: "700",
              color: "hsl(4, 100%, 67%)",
            }}
          >
            {error}
          </span>
        )}
      </div>
      <input
        type="email"
        id="email"
        style={
          error
            ? {
                borderColor: "hsl(4, 100%, 67%)",
                color: "hsl(0, 99%, 54%)",
                backgroundColor: "hsl(0, 87%, 91%)",
              }
            : { borderColor: "2px #000" }
        }
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@company.com"
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default Form;
