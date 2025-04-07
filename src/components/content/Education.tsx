import { type FunctionComponent } from "preact";
import { CardGrid } from "../ui/CardGrid";

const education = [{
  title: "Flatiron School",
  subtitle: "Full Stack Development Bootcamp (2022)"
}, {
  title: "Indiana University",
  subtitle: "Kelley School of Business (2019)",
  description: "M.S. in Information Systems - Business Insights & Analytics"
}, {
  title: "Indiana University",
  subtitle: "Kelley School of Business (2018)",
  description: "B.S. in Business - Information Systems, Operations Management, International Business"
}]

const Education: FunctionComponent = () => {
  return (
    <CardGrid cards={education}/>
  )
}

export default Education