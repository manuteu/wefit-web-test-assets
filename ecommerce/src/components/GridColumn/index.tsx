import React, { ReactNode } from 'react'
import { Container } from './styles'

interface Props {
  children: ReactNode
}

export default function GridColumn({ children }: Props) {
  return (
    <Container>{children}</Container>
  )
}
