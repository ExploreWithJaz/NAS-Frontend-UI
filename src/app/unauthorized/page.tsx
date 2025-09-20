
import React from 'react'
import Glitch from '@/components/layout/Glitch'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'

function page() {
  return (
    <Glitch animation={true} variant="red">
      <Container
        variant="card"
        color="red"
        className="p-2.5 mx-4 flex w-[400px] h-auto"
      >
        <div>
          <div className='flex flex-row items-center gap-2.5'>
            <Icon name="forbidden" size={34} color="#FF6B6B" />
            <h1 className="text-2xl font-bold text-white">401 Unauthorized</h1>
          </div>
          <div>
            <p className="mt-4 text-white">
                This service requires authentication. Please log in to access it.
            </p>
          </div>
        </div>
      </Container>
    </Glitch>
  )
}

export default page