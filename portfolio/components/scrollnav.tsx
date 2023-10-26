export default function ScrollNav({ activeNav} : {activeNav: number}) {
  return (
    <div className="flex flex-col fixed right-0 mr-5 z-10">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className={`m-1 w-4 h-4 rounded-full border-[1.5px] border-black ${
            activeNav === index ? 'bg-primary' : 'bg-primary bg-opacity-25'
          }`}
        ></div>
      ))}
    </div>
  )
}