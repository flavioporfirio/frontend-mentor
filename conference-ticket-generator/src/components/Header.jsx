export default function Header({ title, subtitle }) {
  return (
    <div className="grid justify-items-center gap-2 w-full mx-auto max-w-4xl">
      <img src="./images/logo-full.svg" alt="logo" className="w-48 h-24" />

      <h1 className="font-bold text-slate-100 text-center text-5xl break-words">
        {title}
      </h1>
      <h3 className="text-slate-300 text-[20px] text-center break-words">
        {subtitle}
      </h3>
    </div>
  );
}
