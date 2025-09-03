import React from 'react'

interface State {
  count: number
  name: string
}

type Action = { type: 'increment' | 'decrement' | 'setname', payload?: string }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'setname':
      return { ...state, name: action.payload || '' }
    default:
      return state
  }
}

export default function Increasement() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0, name: '' })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
    </div>
  )
}