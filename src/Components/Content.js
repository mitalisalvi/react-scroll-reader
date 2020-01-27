import React, { Component } from 'react'
import { Element, Link } from 'react-scroll'

export default class Content extends Component {
  render() {
    return (
    <div className="content-container">
    <p>
    <Element name="test0" className="element" >
      <h1>Introduction</h1><br/>
      Even as DevOps adoption continues to accelerate in both large enterprises and web-native organizations, confusion lingers about what exactly the term means. Is DevOps a culture, a movement, an approach, a philosophy, or some amalgam of several of these things? Or does DevOps mean different things to different people?<br/>
      <br/>
      However you define DevOps, achieving DevOps success undoubtedly requires a journey. And no matter where you are in your DevOps journey, we can help you answer a number of fundamental questions, including:<br/>
  <br/>
  <ul>
  <li>
  <Link style={{ textDecorationLine: 'Underline' }} activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >What is DevOps?</Link>
  </li>
  <li>
  <Link style={{ textDecorationLine: 'Underline' }} activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} >Where did it come from?</Link>
  </li>

  <li>
  <Link style={{ textDecorationLine: 'Underline' }} activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >What problems led to DevOps?</Link>
  </li>

  <li>
  <Link style={{ textDecorationLine: 'Underline' }} activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} >How does DevOps “work”?</Link>
  </li>

  </ul>
  </Element>
  <br/>
  <br/>

  <Element name="test1" className="element" >
  <h1>Chapter 1</h1>
  <h2>What Is DevOps?</h2>
  The word “DevOps” was coined in 2009 by Patrick Debois, who became one of its gurus. The term was formed by combining “development” and “operations,” which provides a starting point for understanding exactly what people typically mean when they say “DevOps.” Notably, DevOps isn’t a process or a technology or a standard. Many devotees refer to DevOps as a “culture”—a viewpoint that New Relic favors. We also use the term “DevOps movement” when talking about topics such as adoption rates and trends for the future, and “DevOps environment” to refer to an IT organization that has adopted a DevOps culture.<br/>
  <br/>
  This primer will have a great deal more to say about DevOps, but to get started, we need a serviceable definition. We like this one from Gartner:<br/>
  <br/>
  “DevOps represents a change in IT culture, focusing on rapid IT service delivery through the adoption of agile, lean practices in the context of a system-oriented approach. DevOps emphasizes people (and culture), and seeks to improve collaboration between operations and development teams. DevOps implementations utilize technology— especially automation tools that can leverage an increasingly programmable and dynamic infrastructure from a life cycle perspective.”<br/>
  <br/>
  Importantly, the meaning of DevOps has broadened to be an umbrella term for the processes, culture, and mindset used to shorten the software development life cycle, using fast feedback loops to deliver features, fixes, and updates more frequently.<br/>
  <br/>
  </Element>

  <Element name="test2" className="element" >
  <h1>Chapter 2</h1>
  <h2>Where Did DevOps Come From?</h2>
  Despite the mythical tone of some of the stories about its origins, DevOps was not created out of whole cloth. Rather, the seeds of DevOps were planted long ago and have been nurtured by forward-thinking IT experts in a number of disciplines. The two primary antecedents of DevOps are:<br/>
  <br/>
  Enterprise systems management (ESM). Many of the people involved in the initial definition of DevOps were system administrators. These operations experts brought key ESM best practices to DevOps, including configuration management, system monitoring, automated provisioning, and the toolchain approach.
  Agile development. One observer notes, “DevOps can be interpreted as an outgrowth of Agile—agile software development prescribes close collaboration of customers, product management, developers, and (sometimes) QA to fill in the gaps and rapidly iterate towards a better product ... [DevOps acknowledges that] service delivery and how the app and systems interact are a fundamental part of the value proposition to the client as well, and so the product team needs to include those concerns as a top-level item. From this perspective, DevOps is simply extending Agile principles beyond the boundaries of the code to the entire delivered service.”
  <br/>
  <br/>
  </Element>

  <Element name="test3" className="element" >
  <h1>Chapter 3</h1>
  <h2>What Problems Led to the Creation of DevOps?</h2>
  Developers and system administrators don’t always see eye to eye on a lot of things, but they do agree that their customers on the business side of the house frequently pull them in different directions. On the one hand, business users demand change—new features, new services, new revenue streams—as fast as possible. At the same time, they also want a system that is stable and free from outages and interruptions. That creates a problem where companies feel like they have to choose between delivering changes quickly and dealing with an unstable production environment, or maintaining a stable but stale environment.
  <br/>
  Not surprisingly, neither choice is acceptable to enterprise executives. And, more important, neither allows a business to provide the best solutions it can to its customers.
  <br/>
  Developers are willing to push out software faster and faster—after all, that’s what they are typically hired to accomplish. Operations, on the other hand, knows that rapid-fire changes without proper safeguards could destabilize the system, which goes directly against their charter.
  <br/>
  DevOps was created to resolve this dilemma by integrating everyone associated with software development and deployment—business users, developers, test engineers, security engineers, system administrators, and sometimes others—into a single, highly automated workflow with a shared focus: rapid delivery of high-quality software that meets all user requirements while maintaining the integrity and stability of the entire system.
  <br/>
  How do these disparate groups join forces? By subscribing to a common set of principles that transcends traditional discipline boundaries and roles, for example:
  <br/>
  Set expectations and priorities and the fundamental beliefs that guide them.<br/>
  Collaborate both within and between teams on problem solving.<br/>
  Automate common and repetitive processes to free up time for higher-level work.<br/>
  Integrate feedback into the work, measuring everything that is moved into production.<br/>
  Share the data with everyone involved to foster a more effective culture of working well together across different skills and specialized knowledge.
  <br/>
  <br/>
  </Element>

  <Element name="test4" className="element" >
  <h1>Chapter 4</h1>
  <h2>DevOps, Agile, and SRE Explained</h2>
  Companies often talk about shifting to DevOps, hiring SREs, and becoming more agile, but how do these terms relate to one another?
  <br/>
  <br/>
  Agile and Lean is how teams iterate, with short development cycles and fast feedback. Agile focuses on culture and is agnostic to which tools are used.
  <br/>
  DevOps is how engineering organizations collaborate using cross-functional teams. DevOps starts with culture and drives toward tooling.
  <br/>
  SRE (System Reliability Engineering) is how engineering organizations automate, entrusting highly scaled operations to people with a software engineering mindset. SRE starts with tooling and drives toward culture.
  <br/>
  DevOps variants (such as “SecDevOps”) involves the insertion or addition of another organization/practice earlier in the software development lifecycle (SDLC), and the prevalence of these different types of DevOps speaks to the increasing integration of functions in modern organizations.     
  </Element>

  <br/>
  <br/>
  <Link style={{ fontWeight: 'bold' }} activeClass="active" className="test0" to="test0" spy={true} smooth={true} duration={500} >Go to the top of the page</Link>
  </p>
      </div>);
  }
}
