import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html center className='font-bold text-2xl text-center'>
      Loading... {progress} %
    </Html>
  )
}

export default Loader
