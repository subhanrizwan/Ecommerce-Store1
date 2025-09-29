// Currency Format Api
const FormatePrice = ({ price }) => {
  return Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
  }).format(price)
}

export default FormatePrice

