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
    setFormData({ ...data });
  }
  function handleTicketGenerated() {
    setTicketGenerated((ticketGenerated) => !ticketGenerated);
  }

  return (
    <div className="relative inset-0 min-h-screen w-full mx-auto flex flex-col items-center overflow-hidden font-script">
      <img
        src="./images/background-desktop.png"
        alt="background"
        className="absolute w-full h-full bg-cover bg-no-repeat bg-center z-[-1]"
      />

      <img
        src="./images/pattern-squiggly-line-bottom-desktop.svg"
        alt="decorative stroke"
        className="absolute bottom-0 left-0 w-[600px] h-auto z-[-1]"
      />

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
                  {formData.watchFormData.name}!
                </span>{" "}
                Your ticket is ready.
              </p>
            }
            subtitle={
              <p>
                We have emailed your ticket to{" "}
                <span className="text-orange-500">
                  {formData.watchFormData.email}
                </span>{" "}
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
          {/* <Avatar /> */}
          <Form
            onHandleTicketGenerated={handleTicketGenerated}
            onHandleFormData={handleFormData}
          />
        </SignUpForm>
      )}
    </div>
  );
}
