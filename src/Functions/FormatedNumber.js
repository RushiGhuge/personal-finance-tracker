const FormatedNumber = (number) => {
  const formattedNumber = number.toLocaleString("en-IN", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formattedNumber;
};

export default FormatedNumber;
