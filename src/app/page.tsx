
import React from 'react'
import BlueGlitch from '@/components/layout/Blue-Glitch'
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon'

function page() {
  return (
    <BlueGlitch animation={true}>
      <Container
        variant="card"
        className="p-10 flex items-center justify-center w-[400px] h-[300px]"
        >
        <div>
          <Icon name="link" size={48} color="#4CC9F0" />
          <h1 className="text-2xl font-bold text-white mt-4">Welcome to the Blue Glitch Page</h1>
          <p className="text-white mt-2">This is a sample page with a blue glitch effect background.</p>
        </div>
      </Container>
    </BlueGlitch>
  )
}

export default page