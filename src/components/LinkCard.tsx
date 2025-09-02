type Props = {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
  buttonText: string;
  href: string;
};

export default function LinkCard({ imageSrc, title, description, 
  // buttonText, href 
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="overflow-hidden rounded-xl">
        <img src={imageSrc} alt="" className="h-44 w-full object-cover" loading="lazy" />
      </div>

      <div className="px-2 pb-2 pt-4">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed opacity-75">{description}</p>

        {/* <a
          href={href}
          className="mt-4 inline-block rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-95"
        >
          {buttonText}
        </a> */}
      </div>
    </div>
  );
}
