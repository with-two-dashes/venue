import { useRouter } from 'next/router'

const Diary = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>Diary Slug:{ slug }</div>
  )
}

export default Diary