import SignUpForm from "./pages/SignUpForm.jsx";
import GeneratedTicket from "./pages/GeneratedTicket.jsx";

export default function App() {
  return (
    // <div className="relative inset-0 bg-[url(./images/background-desktop.png)] bg-cover bg-no-repeat bg-center min-h-screen mx-auto flex flex-col items-center overflow-hidden z-[-10] ">
    <div className="relative inset-0 min-h-screen mx-auto flex flex-col items-center overflow-hidden ">
      <img
        src="./images/background-desktop.png"
        alt="background"
        className="absolute top-0 left-0 bg-cover bg-no-repeat bg-center z-[-1]"
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

      <SignUpForm />
      <GeneratedTicket />
    </div>
  );
}
