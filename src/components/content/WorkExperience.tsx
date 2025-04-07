import { FunctionComponent } from 'preact'
import Timeline, { type TimelineEvent } from '../ui/Timeline'

const experiences: TimelineEvent[] = [
  {
    subtitle: "Deloitte",
    title: "Advisory Senior Consultant / Software Developer - Cyber & Strategic Risk",
    smallText: "June 2024 - Current",
    bullets: [
      "Leading the development of an automated due diligence platform for a DoD client, integrating fourteen datasets to enhance the quality of analysis, and performing product management tasks including product planning, sprint coordination, and leadership reporting",
      "Designed and built multiple applications in Splunk Enterprise, leveraging React for UI development and Python for back-end data integration, enhancing efficiency and data accessibility in project delivery work",
      "Delivered high-impact product demonstrations to internal stakeholders and prospective clients, contributing to business development and successful client engagements",
      "Partnered with business leadership to craft a winning proposal, securing a multi-million dollar contract with the U.S. Government"
    ],
    badges: ["React", "TypeScript", "Python", "Node.js", "AWS", "Splunk"]
  },
  {
    subtitle: "Deloitte",
    title: "Advisory Consultant / Software Developer - Cyber & Strategic Risk",
    smallText: "June 2022 - May 2024",
    bullets: [
      "Developed a map-based UI visualizing predicted ice melt in the Arctic, leveraging leading-edge climate research and Google Cloud, and led demonstrations at an industry event afended by 4,000+ geospatial professionals from across industry, government, and academia",
      "Designed, developed and deployed a full-stack application on AWS Cloud to provide insights and threat-hunting capabilities for cybersecurity analysts in dashboard format",
      "Served as lead front-end developer for the implementation of an intelligence-gathering tool for a U.S. Government client",
      "Earned AWS Developer Associate certification in Spring 2024"
    ],
    badges: ["React", "Next.js", "Vue", "Node.js", "AWS"]
  },
  {
    subtitle: "Tyler Technologies",
    title: "Implementation Consultant - iasWorld",
    smallText: "June 2020 - November 2021",
    bullets: [
      "Served eight counties in their migration to iasWorld, Tyler’s property tax and appraisal management solution, implemented the system according to client specifications and state property tax law, and facilitated the conversion of sensitive legacy data",
      "Led client-facing training sessions with high-level county officials on technical topics pertaining to administraOon of property tax",
      "Managed the requirements-gathering, design, development and testing of three major system customizations",
      "Served on the development planning PMO commifee to produce forecasts of developer capacity using Excel models and Power BI"
    ],
    badges: ["End-user training", "SQL Server", "Power BI"]
  },
  {
    subtitle: "Hitachi Vantara / Hitachi Consulting",
    title: "Consultant - Product Engineering Services",
    smallText: "August 2019 - May 2020",
    bullets: [
      "Supported the technical lead on an engagement with a global engineering firm in documenting technical system specifications, design patterns and development guidelines for the pilot implementation of a three-year, $150 million digital transformation effort under an accelerated timeline",
      "Developed a graph database POC on Neo4j using a Medicare claims dataset to detect possible fraud based on the types of submitted claims and Jaccard similarity between physicians",
      'Led the Hitachi Core Pulse program for the Americas, serving as a liaison between new hires and the firm at-large, and hosted “Fireside Chat” events to elicit feedback from members of the Chicago office'
    ],
    badges: ["Neo4j", "Tableau", "Requirements gathering", "Technical documentation"]
  },
]

const WorkExperience: FunctionComponent = () => {
  return (
    <Timeline events={experiences}/>
  )
}

export default WorkExperience