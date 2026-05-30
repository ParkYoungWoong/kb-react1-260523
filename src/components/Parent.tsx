import Child from './Child'

export default function Parent() {
  return (
    <>
      <Child onColor={color => console.log(color)} />
    </>
  )
}
