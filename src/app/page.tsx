import TopicsList from '@/components/Topiclist'

export default function Home() {
  return (
    <div>
      <h1 className="ml-2 text-3xl font-bold">웹-개발 토픽</h1>
      <p className="mb-4 ml-2">몽고 데이터베이스 C.R.U.D 프로젝트</p>
      <TopicsList />
    </div>
  )
}
