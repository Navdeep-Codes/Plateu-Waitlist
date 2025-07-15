import Image from 'next/image'
 
export default function Logo() {
  return (
    <Image
      src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4070647f8d8a56a5ecd1490f04d519ccf7c251ec_plateulogo.png"
        width={200}
        height={50}
      alt="Plateu Logo"
    />
  )
}