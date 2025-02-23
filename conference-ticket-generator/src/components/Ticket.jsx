const date = new Date();

export default function Ticket({ formData }) {
  const imageUrl = URL.createObjectURL(formData.selectedFile);

  console.log(formData);
  return (
    <div className="relative bg-[url(./images/pattern-ticket.svg)] bg-center bg-no-repeat bg-contain w-full h-[400px] object-contain mt-20 grid grid-cols-2 p-8">
      <div className="flex flex-col justify-between my-4">
        <div className="">
          <img src="./images/logo-full.svg" alt="logo" className="w-80 h-24" />
          <p className="pl-20 text-slate-300">
            {date.toDateString()} / Austin, TX{" "}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src={imageUrl}
            alt={`avatar do ${formData.watchFormData.name}`}
            className="w-20 h-20 rounded-2xl"
          />
          <div>
            <p className="text-5xl text-slate-300 pb-2">
              {formData.watchFormData.name}
            </p>
            <div className="flex gap-2 items-center">
              <img src="./src/assets/icon-github.svg" alt="" />
              <p className="text-slate-300 text-xl">
                {`@${formData.watchFormData.githubUsername}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] right-5  text-slate-300 text-3xl rotate-90">
        <p>#01609</p>
      </div>
    </div>
  );
}
