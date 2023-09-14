export default function ContainerLayout({
  children,
  className = "",
  container,
  space,
  ...props
}) {
  const paddingCls =
    {
      none: "px-0",
      small: "px-1",
      middle: "px-4",
      large: "px-8",
    }[space] || "px-4";

  if (container) {
    return (
      <div
        {...props}
        className={`w-full flex flex-col items-center ${className}`}
      >
        <div className={`w-full max-w-[1320px] ${paddingCls}`}>{children}</div>
      </div>
    );
  } else {
    return (
      <div {...props} className={`${paddingCls} ${className}`}>
        {children}
      </div>
    );
  }
}
