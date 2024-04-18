import Image from 'next/image'
export function Banner() {
  return (
    <div className="flex flex-col items-center bg-background">
      <div className="w-3/4 ">
        <Image
          src="/Banner.png"
          alt="Banner da Liga das Atléticas"
          width={1554}
          height={317}
          layout="responsive"
          className="grayscale-100 opacity-50 filter"
        />
        <h4>27/04, 28/04, 04/05 E 5 DE MAIO</h4>
      </div>
    </div>
  )
}
