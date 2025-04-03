const date = new Date();

export default function Ticket({ formData }) {
  const imageUrl = URL.createObjectURL(formData.selectedFile);

  console.log(formData);
  return (
    <div className="bg-[url(/images/pattern-ticket.svg)] bg-center bg-no-repeat bg-contain w-full h-[300px] sm:h-[350px] object-contain mt-20 grid grid-cols-2 mb-8 p-8">
      {/* <div className="flex flex-col justify-evenly sm:justify-between my-4 "> */}
      <div className="flex flex-col items-center justify-around sm:justify-between ">
        <div className="flex flex-col items-end gap-4">
          <img
            src="./images/logo-full.svg"
            alt="logo"
            className="w-60 sm:w-75 h-auto"
          />
          <p className="text-slate-300 text-sm sm:text-base sm:pl-20">
            {date.toDateString()} / Austin, TX{" "}
          </p>
        </div>
        <div className="flex gap-2 items-start">
          <img
            src={imageUrl}
            alt={`avatar do ${formData.name}`}
            className="w-15 h-15 sm:w-20 sm:h-20 rounded-2xl"
          />
          <div>
            <p className="text-3xl sm:text-5xl text-slate-300 pb-2">
              {formData.name}
            </p>
            <div className="flex gap-2 items-center">
              <img src="./src/assets/icon-github.svg" alt="" />
              <p className="text-slate-300 text-base sm:text-xl">
                {`@${formData.githubUsername}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-baseline text-slate-300 text-3xl rotate-90 p-2 sm:p-8 md:p-12 ">
        <p className="">{`#${formData.id}`}</p>
      </div>
    </div>
  );
}
