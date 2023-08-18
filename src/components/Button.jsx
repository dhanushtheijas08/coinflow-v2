function Button({ children, style }) {
  return (
    <button
      className={`text-xl md:text-xl lg:text-3xl font-semibold px-5 py-3 md:px-5 md:py-3 lg:px-7 lg:py-5 rounded-full ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
