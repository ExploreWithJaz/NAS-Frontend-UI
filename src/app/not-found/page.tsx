
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
            <Icon name="forbidden" size={34} color="#ffcd56" />
            <h1 className="text-2xl font-bold text-white">404 Not Found</h1>
          </div>
          <div>
            <p className="mt-4 text-white">
                The requested resource could not be found on this server. Please check the URL and try again.
            </p>
          </div>
        </div>
      </Container>
    </Glitch>
  )
}

export default page