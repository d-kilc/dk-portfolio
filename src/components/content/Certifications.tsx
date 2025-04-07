import { type FunctionComponent } from "preact"
import { CardGrid } from "../ui/CardGrid"

const certifications = [{
  title: "Amazon Web Services",
  subtitle: "Certified Developer Associate",
  description: "Issued April 2023, expires April 2026"
},{
  title: "Amazon Web Services",
  subtitle: "Certified Cloud Practitioner",
  description: "Issued October 2019, expired October 2022"
}]

const Certifications: FunctionComponent = () => {
  return (
    <CardGrid cards={certifications}/>
  )
}

export default Certifications