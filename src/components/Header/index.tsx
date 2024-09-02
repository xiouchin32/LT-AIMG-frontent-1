'use client'
export default function HeaderIndex() {
  const menu = [
    {text:'關於計畫'},
    {text:'導入指引'},
    {text:'輔導團'},
    {text:'技術支援'},
    {text:'人才培育'},
    {text:'輔助資源'},
  ]
  return (<>
    <header className='w-[100%] h-[60px] lg:w-full fixed top-0 left-1/2 -translate-x-1/2 p-2 bg-white flex items-center justify-between z-[1102] lg:z-[1100]'>
      <div></div>
      <div></div>
    </header>
  </>)
}
