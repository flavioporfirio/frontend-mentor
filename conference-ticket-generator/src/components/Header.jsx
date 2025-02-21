export default function Header() {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src="./images/logo-full.svg" alt="logo" className="w-48 h-24" />

      <h1 className="font-script font-bold text-slate-100 w-180 text-center text-5xl">
        Your Journey to Coding Conf 2025 Starts here!
      </h1>
      <h3 className="text-slate-300 font-script text-[20px] text-center">
        Secure your spot at next year&rsquo;s biggest coding conference.
      </h3>
    </div>
  );
}
