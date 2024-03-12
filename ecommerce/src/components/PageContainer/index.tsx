import React, { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  children?: ReactNode
}

export default function PageContainer({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}
