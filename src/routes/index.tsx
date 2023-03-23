import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <h1>Welcome to Community Votes</h1>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Community Votes',
  meta: [
    {
      name: 'description',
      content: 'App for community votes'
    }
  ]
}
