import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'
import { it } from 'node:test'
import { expectedError } from '@babel/core/lib/errors/rewrite-stack-trace'

it('renders without crashing', function() {
    render(<Card />)
})

//snapshot
it('matches snapshot', function() {
    const { asFragment } = render(<Card />)
    expectedError(asFragment()).toMatchSnapshot()
})