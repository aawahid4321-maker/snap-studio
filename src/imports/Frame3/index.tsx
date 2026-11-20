function Frame1() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[-265px] rounded-[20px] top-[-160px] w-[800.031px]" />
  )
}

function Frame3() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[-265px] rounded-[20px] top-[314.97px] w-[800.031px]" />
  )
}

function Frame6() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[-265px] rounded-[20px] top-[789.94px] w-[800.031px]" />
  )
}

function Frame2() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[559.99px] rounded-[20px] top-[-160px] w-[800.031px]" />
  )
}

function Frame4() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[559.99px] rounded-[20px] top-[314.97px] w-[800.031px]" />
  )
}

function Frame7() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[559.99px] rounded-[20px] top-[789.94px] w-[800.031px]" />
  )
}

function Frame5() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[1384.97px] rounded-[20px] top-[-160px] w-[800.031px]" />
  )
}

function Frame8() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[1384.97px] rounded-[20px] top-[314.97px] w-[800.031px]" />
  )
}

function Frame9() {
  return (
    <div className="absolute bg-white h-[450.017px] left-[1384.97px] rounded-[20px] top-[789.94px] w-[800.031px]" />
  )
}

function Group() {
  return (
    <div className="absolute contents left-[-265px] top-[-160px]">
      <Frame1 />
      <Frame3 />
      <Frame6 />
      <Frame2 />
      <Frame4 />
      <Frame7 />
      <Frame5 />
      <Frame8 />
      <Frame9 />
    </div>
  )
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full">
      <Group />
    </div>
  )
}
