import React from 'react'
import Container from '../container/Container'
import SectionHeading from '../ui/SectionHeading'
import { agentsData } from '@/data/agents'
import AgentCard from '../cards/AgentCard'

function FeaturedAgents() {
    const title = '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio omnis dignissimos odit consectetur dolor reiciendis harum quaerat, doloribus quas.'
  return (
  <section className='py-20'>
    <Container>
        <SectionHeading heading='Featured Agents' title={title}/>
         <div className='grid lg:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-2 md:gap-5 mt-10'>
            {
                agentsData.map(agent=>(
                    <AgentCard agent={agent as any} key={agent.user} />
                ))
            }
         </div>
    </Container>
  </section>
  )
}

export default FeaturedAgents