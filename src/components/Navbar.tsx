import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-teal-300 px-8 py-4">
      <Link
        className="text-teal-100 text-4xl font-extrabold hover:text-teal-400"
        href="/"
      >
        몽고 데이터 베이스
      </Link>
      <Link
        className="bg-teal-400 text-lg font-bold px-4 py-2 rounded-md hover:bg-teal-600"
        href="/addTopic"
      >
        토픽추가
      </Link>
    </nav>
  )
}
