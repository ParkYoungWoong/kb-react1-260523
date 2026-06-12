import { useParams } from 'react-router'

export default function MovieDetails() {
  const { id } = useParams()
  return <>영화 상세 정보 페이지 ({id})</>
}
