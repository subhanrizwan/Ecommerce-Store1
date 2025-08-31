// Currency Format Api
const FormatePrice = ({ price }) => {
  return Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 2,
  }).format(price)
}

export default FormatePrice