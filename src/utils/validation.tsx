const inputValidation = (value: string) => {
  const trimmedValue = value.trim();
  return trimmedValue !== '';
};

export default inputValidation;
