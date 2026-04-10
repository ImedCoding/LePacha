type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black text-ember">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-ash sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-ash/72">{text}</p>
    </div>
  );
}
