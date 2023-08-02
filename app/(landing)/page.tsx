import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/sign-in">
      <Button >Sign in</Button>
      </Link>
      <Link href="/sign-un">
      <Button >Sign up</Button>
      </Link>
      <Link href="/dashboard">
      <Button >Dashboard</Button>
      </Link>
    </div>
  )
}
