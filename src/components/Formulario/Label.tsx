import { Input } from "./Input";

interface LabelProps {
  label: string;
  obrigatorio?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  label,
  obrigatorio = false,
}: LabelProps) => {
  return (
    <>
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        {label} {obrigatorio && <span className="text-meta-1">*</span>}
      </label>
    </>
  );
};
