import { Input } from "./Input";

interface LabelInputProps {
  label: string;
  placeholder?: string;
  obrigatorio?: boolean;
}

export const LabelInput: React.FC<LabelInputProps> = ({
  label,
  placeholder,
  obrigatorio = false,
}: LabelInputProps) => {
  return (
    <>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label} {obrigatorio && <span className="text-meta-1">*</span>}
      </label>
      <Input placeholder={placeholder} />
    </>
  );
};
