import { twMerge } from "tailwind-merge";

const FormLabel = ({
  register,
  type,
  maxLength,
  name,
  placeholder,
  error,
  darkMode,
  children,
  className,
  rows,
}) => {
  const inputClass = `
  w-full rounded-xl border mt-2 px-4 py-3 text-sm
  outline-none transition-all duration-300
  placeholder:text-slate-350
  focus:ring-2 focus:ring-secondary/30
  text-theme
  ${
    darkMode
      ? "border-white/10 bg-primary focus:ring-secondary/30  focus:border-secondary"
      : "border-black/10 bg-beige/90 focus:ring-beige/30 focus:border-surface"
  }
`;

  const fieldId = `contact-${name}`;
  const errorId = `${fieldId}-error`;

  const fieldProps = {
    type,
    id: fieldId,
    maxLength,
    placeholder,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    ...register(name),
  };
  return (
    <div>
      <label
        htmlFor={fieldId}
        className={twMerge(`${darkMode ? `text-primary`: `text-theme`}mb-2 block text-sm font-medium`, className)}
      >
        {children}
      </label>
      {rows ? (
        <textarea
          {...fieldProps}
          rows={rows}
          className={twMerge(inputClass, "resize-y")}
        />
      ) : (
        <input {...fieldProps} type={type} className={inputClass} />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormLabel;
