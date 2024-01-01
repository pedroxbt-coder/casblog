import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="">
        <span>&#8592;</span>
      </Link>
    </h2>
  )
}

export default Header
