import Button from './Parent'

export default function Child() {
  const abc = 123
  const def = '빈대떡'
  return (
    <>
      <Button varient="elevated">
        <div>클릭</div>
      </Button>
      <Button varient="outlined">확인</Button>
      <Button varient="flat">취소</Button>
      <Button varient="text">저장</Button>
    </>
  )
}
