
import React from 'react'
import Glitch from '@/components/layout/Glitch'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'

function page() {
  return (
    <Glitch animation={true} variant="yellow">
      <Container
        variant="card"
        color="yellow"
        className="p-2.5 mx-4 flex w-[400px] h-auto"
      >
        <div>
          <div className='flex flex-row items-center gap-2.5'>
            <Icon name="warning" size={34} color="#ffcd56" />
            <h1 className="text-2xl font-bold text-white">400 Bad Request</h1>
          </div>
          <div>
            <p className="mt-4 text-white">
              The request could not be understood by the server due to malformed syntax.
            </p>
          </div>
        </div>
      </Container>
    </Glitch>
  )
}

export default page