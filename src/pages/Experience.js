import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { IoSchoolSharp, } from "react-icons/io5"
import { MdWork, } from "react-icons/md"

function Experience () {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#132A13">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2022"
                    iconStyle={{ background: "#132A13", color: "#fff"}}
                    icon={<IoSchoolSharp />}
                
                >
                    <h3 className="vertical-timeline-element-title">UC Berkley Extended Learning</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
                    <p>Full Stack Web Development</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2019 - Present"
                    iconStyle={{ background: "#132A13", color: "#fff"}}   
                    icon={<MdWork />}            
                >
                    <h3 className="vertical-timeline-element-title">Canon Medical Systems</h3>
                    <h4 className="vertical-timeline-element-subtitle">Tustin, CA</h4>
                    <p>Business Operations Analyst</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2011 - 2017"
                    iconStyle={{ background: "#132A13", color: "#fff"}}
                    icon={<IoSchoolSharp />}
                
                >
                    <h3 className="vertical-timeline-element-title">California State University San Marcos</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Marcos, CA</h4>
                    <p>Bachelor of Science, Management Information Systems</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="2018 - 2019"
                    iconStyle={{ background: "#132A13", color: "#fff"}}
                    icon={<MdWork />}
                
                >
                    <h3 className="vertical-timeline-element-title">Noman Temporary Housing</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
                    <p>Reporting IT Analyst</p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;