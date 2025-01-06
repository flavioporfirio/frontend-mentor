import { useForm } from "react-hook-form";
import "./App.css";
import { CircleAlert } from "lucide-react";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = function () {};

  console.log(watch("example"));

  return (
    <main>
      <section className="offer-info">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </section>
      <section className="formSection">
        <div className="offer">
          <p>
            {" "}
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-input">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "First name cannot be empty",
                maxLength: 20,
              })}
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && (
              <div className="error-icon">
                <CircleAlert color="white" size="3rem" className="icon" />
              </div>
            )}
            {errors.firstName && (
              <i className="error-message">{errors.firstName.message}</i>
            )}
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last name cannot be empty",
                maxLength: 20,
              })}
              className={errors.lastName ? "input-error" : ""}
            />
            {errors.lastName && (
              <div className="error-icon">
                <CircleAlert color="white" size="3rem" className="icon" />
              </div>
            )}
            {errors.lastName && (
              <i className="error-message">{errors.lastName.message}</i>
            )}
          </div>

          <div className="form-input">
            <input
              type="text"
              placeholder="Email Address"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Looks like this is not an email",
                },
              })}
              className={errors.email ? "input-error" : ""}
            />

            {errors.email && (
              <div className="error-icon">
                <CircleAlert color="white" size="3rem" className="icon" />
              </div>
            )}
            {errors.email && (
              <i className="error-message">{errors.email.message}</i>
            )}
          </div>
          <div className="form-input">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password cannot be empty",
                minLength: 1,
              })}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <div className="error-icon">
                <CircleAlert color="white" size="3rem" className="icon" />
              </div>
            )}
            {errors.password && (
              <i className="error-message">{errors.password.message}</i>
            )}
          </div>

          <button type="submit">claim your free trial</button>
          <p>
            By clicking the button, you are agreeing to our
            <a href="#"> Terms and Services</a>
          </p>
        </form>
      </section>
    </main>
  );
}
