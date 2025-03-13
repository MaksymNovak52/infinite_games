import { SectionTitleProps } from "@/type";

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  icon: Icon,
}) => (
  <div className="flex items-center justify-center mt-14 mb-14 px-8 gap-4">
    {Icon && <Icon />}
    <div className="h-px bg-gray-800 flex-grow"></div>
    <div className="text-center mx-4">
      <div className="text-xs text-gray-500 uppercase">{title}</div>
      <div className="text-xl font-medium mt-1">{subtitle}</div>
    </div>
    <div className="h-px bg-gray-800 flex-grow"></div>
    {Icon && <Icon />}
  </div>
);
