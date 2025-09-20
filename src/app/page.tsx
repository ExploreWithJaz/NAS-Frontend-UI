
import React from 'react'
import BlueGlitch from '@/components/layout/Blue-Glitch'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'

function page() {
  return (
    <BlueGlitch animation={true} variant="blue">
      <Container
        variant="card"
        color="blue"
        className="p-2.5 flex w-[400px] h-auto"
      >
        <div>
          <div className='flex flex-row items-center gap-2.5'>
            <Icon name="link" size={48} color="#4CC9F0" />
            <h1 className="text-2xl font-bold text-white">403 Forbidden</h1>
          </div>
          <div>
            <p className="mt-4 text-white">
              This service is private. You don’t have permission to access it.
            </p>
            <p className="mt-2 text-white">
              Contact your Network Admin.
            </p>
          </div>
          <div className="mt-6">
            <button className="px-4 py-2 bg-[#4CC9F0] text-white rounded hover:bg-[#3bb0e0] transition">
              Go Back
            </button>
          </div>
        </div>
      </Container>
    </BlueGlitch>
  )
}

export default page