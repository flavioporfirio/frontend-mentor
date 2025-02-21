import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = function (data) {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 my-8"
    >
      <div className="flex flex-col gap-2">
        <label className="text-slate-300 font-script  text-xl" htmlFor="name">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 text-slate-300 font-script text-base "
          {...register("name", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-slate-300 font-script  text-xl" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          type="email"
          {...register("email", {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          className="z-10 w-full px-4 py-2 bg-slate-700/50 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 text-slate-300 font-script text-base placeholder-slate-300"
          placeholder="example@email.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-slate-300 font-script  text-xl" htmlFor="github">
          Github Username
        </label>
        <input
          name="github-username"
          type="text"
          {...register("github-username", { required: true })}
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 text-slate-300 font-script text-base placeholder-slate-300"
          placeholder="@yourusername"
        />
      </div>

      <button
        type="submit"
        className="w-full text-center font-script text-2xl font-extrabold bg-orange-400 text-black p-4 rounded-lg cursor-pointer"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
