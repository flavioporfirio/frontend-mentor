import SignUpForm from "./pages/SignUpForm.jsx";
import GeneratedTicket from "./pages/GeneratedTicket.jsx";

import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

export default function App() {
  const [ticketGenerated, setTicketGenerated] = useState(false);
  const [formData, setFormData] = useState({});

  function handleFormData(data) {
    console.log(data);
    setFormData({ ...data });
  }
  function handleTicketGenerated() {
    setTicketGenerated((ticketGenerated) => !ticketGenerated);
  }

  return (
    <div className="relative inset-0 min-h-screen w-full mx-auto overflow-hidden font-script grid justify-center">
      <picture className="absolute w-full h-full bg-cover bg-no-repeat bg-center z-[-1]">
        <source
          srcSet="./images/background-mobile.png"
          media="(max-width: 640px)"
        />
        <source
          srcSet="./images/background-tablet.png"
          media="(max-width: 1024px)"
        />
        <source
          srcSet="./images/background-desktop.png"
          media="(min-width: 1025px)"
        />
        <source />
        <img
          src="./images/background-desktop.png"
          alt="background"
          className="absolute w-full h-full bg-cover bg-no-repeat bg-center z-[-1]"
        />
      </picture>
      <picture className="absolute bottom-0 left-0 w-[600px] h-auto z-[-1]">
        <source
          srcSet="./images/pattern-squiggly-line-top.svg"
          media="(max-width: 640px)"
        />
        <source
          srcSet="./images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          media="(max-width: 1024px)"
        />
        <source
          srcSet="./images/pattern-squiggly-line-bottom-desktop.svg"
          media="(min-width: 1025px)"
        />
        <source />
        <img
          src="./images/pattern-squiggly-line-bottom-desktop.svg"
          alt="decorative stroke"
          className="absolute bottom-0 left-0 w-[600px] h-auto z-[-1]"
        />
      </picture>

      <img
        src="./images/pattern-lines.svg"
        alt="decorative stroke"
        className="absolute top-0 right-0 w-[1200px] h-auto z-[-1]"
      />

      <img
        src="./images/pattern-circle.svg"
        alt="decorative stroke"
        className="absolute top-1/2 right-1/4 w-[200px] h-auto z-[-1]"
      />

      {ticketGenerated ? (
        <GeneratedTicket>
          <Header
            title={
              <p>
                Congrats,{" "}
                <span className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">
                  {formData.name}!
                </span>{" "}
                Your ticket is ready.
              </p>
            }
            subtitle={
              <p>
                We have emailed your ticket to{" "}
                <span className="text-orange-500">{formData.email}</span>
                and will send updates in the run up to the event.
              </p>
            }
          />

          <Ticket formData={formData} />
        </GeneratedTicket>
      ) : (
        <SignUpForm onHandleTicketGenerated={handleTicketGenerated}>
          <Header
            title="Your Journey to Coding Conf 2025 Starts here!"
            subtitle="Secure your spot at next year&rsquo;s biggest coding conference."
          />
          <Form
            onHandleTicketGenerated={handleTicketGenerated}
            onHandleFormData={handleFormData}
          />
        </SignUpForm>
      )}
    </div>
  );
}
