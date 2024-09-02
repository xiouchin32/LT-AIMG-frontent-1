import { Metadata } from 'next'
import Image from 'next/image'
import seoImage from '../../public/images/seo_image.jpeg'

export const metadata: Metadata = {
  title: 'Home - My App',
  description: 'Learn more about us on this page.',
  openGraph: {
    title: 'Home - My App',
    description: 'This is the Open Graph description for the About page.',
    locale: 'en_US',
    type: 'website'
  }
}
export default function Home() {

  const news = [
    {
      title:'材料國際學院_循環氯化物材料創新應用講座',
      tag:'活動看板',
      date:'2024-08-25',
      description:'產發署委託循環技術暨材料創新研發專區辦理「循環氯化物材料創新應用講座」，課程內容包括氯化物粉體材料產發署委託循環技術暨材料創新研發專區辦理「循環氯化物材料創新應用講座」，課程內容包括氯化物粉體材料',
      link:''
    },
    {
      title:'材料國際學院_循環氯化物材料創新應用講座',
      tag:'活動看板',
      date:'2024-08-25',
      description:'產發署委託循環技術暨材料創新研發專區辦理「循環氯化物材料創新應用講座」，課程內容包括氯化物粉體材料產發署委託循環技術暨材料創新研發專區辦理「循環氯化物材料創新應用講座」，課程內容包括氯化物粉體材料',
      link:''
    }, {
      title:'材料國際學院_循環氯化物材料創新應用講座',
      tag:'活動看板',
      date:'2024-08-25',
      description:'產發署委託循環技術暨材料創新研發專區辦理「循環氯化物材料創新應用講座」，課程內容包括氯化物粉體材料產發署委託循環技術暨材料創新研發專區辦理「循環氯化物材料創新應用講座」，課程內容包括氯化物粉體材料',
      link:''
    }
  ]

  const features = [
    {
      title: 'AI導入指引',
      description: '企業AI健檢，適循指引，導入不再無頭緒',
      imageSrc: '/images/test_image.jpg',
      buttons: [
        { text: 'AI指引架構', style: 'bg-green-500' },
        { text: '企業AI自評', style: 'bg-green-300' }
      ]
    },
    {
      title: '顧問輔導團',
      description: '導入遇困難，輔導團提供專業建議',
      imageSrc: '/images/test_image.jpg',
      buttons: [
        { text: '輔導團申請', style: 'bg-green-500' },
        { text: '技術服務能量登錄', style: 'bg-green-300' }
      ]
    },
    {
      title: 'AI工具庫',
      description: '應用於各場景的AI解決方案',
      imageSrc: '/images/test_image.jpg',
      buttons: []
    },
    {
      title: 'AI人才培育',
      description: '多元課程與教材，協助企業培養AI人才',
      imageSrc: '/images/test_image.jpg',
      buttons: [
        { text: '線上課程', style: 'bg-green-500' },
        { text: '實體課程', style: 'bg-green-300' }
      ]
    },
    {
      title: '補助資源',
      description: 'AI投入好機緣？補助資源報你知',
      imageSrc: '/images/test_image.jpg',
      buttons: [
        { text: '主題式研發', style: 'bg-green-500' },
        { text: '疫後補助', style: 'bg-green-300' }
      ]
    }
  ]

  const caseStudies = [
    {
      title: '設備維修紀錄',
      description: '老舊行駛配備維修異常的報表製以傳環，再者維修人員能加下午...',
      impact: '預期效益：縮短維修人員問題處理時間，提升高效行駛維修時間...',
      imageSrc: '/images/seo_image.jpeg', // 替換為你的實際圖片路徑
      imageAlt: '設備維修紀錄圖片',
      reverse: false // 決定圖片和文字的排列方式，false 為圖片在右邊（桌面版）
    },
    {
      title: '料品規格清單',
      description: 'PCB生產製造訪客得合併料件品規格清單(如：鋁/銅/鋁基複合...',
      impact: '預期效益：可以對數據進行整理與分析，並藉此優化生產流程...',
      imageSrc: '/images/seo_image.jpeg', // 替換為你的實際圖片路徑
      imageAlt: '料品規格清單圖片',
      reverse: true // 圖片和文字的位置對調，圖片在左邊（桌面版）
    }
  ]

  return (
    <div className='w-full'>
      <div className="relative w-full h-[50vh]">
        <Image
          src={seoImage}
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-black mb-8">最新消息</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((news) => {
            return(
              <div key={news.title} className="bg-white p-6 rounded-lg shadow-lg">
                <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-[5px] mb-2">
                  {news.tag}
                </span>
                <h3 className="text-gray-900 text-lg font-semibold mb-2">
                  {news.title}
                </h3>
                <p className="text-green-500 text-sm mb-4">{news.date}</p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {news.description}
                </p>
              </div>)
          })}
        </div>
        <div className="mt-6 text-right">
          <a href="#" className="text-green-600 hover:underline">觀看更多</a>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-black mb-8">想幫企業導入AI, 可是...</h2>
        <div className="relative w-full h-[50vh]">
          <Image
            src={seoImage}
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>
      <div className="bg-white p-8">
        <h2 className="text-left text-2xl font-bold text-black mb-8">五大技術資源，製造業AI的升級引擎！</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <Image src={feature.imageSrc} alt={feature.title} width={150} height={150} />
              <h3 className="text-gray-900 text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-center mb-4">{feature.description}</p>
              <div className="flex space-x-2">
                {feature.buttons.map((button, i) => (
                  <button key={i} className={`${button.style} text-white text-sm px-4 py-2 rounded-full`}>
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-center text-2xl font-bold text-green-600 mb-8">AI應用成功案例</h2>
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className={`flex flex-col bg-white rounded-[10px]  lg:flex-row ${study.reverse ? 'lg:flex-row-reverse' : ''} items-center lg:items-start mb-8 lg:mb-16`}
          >
            <div className="w-full lg:w-1/2 p-4 order-1 lg:order-none">
              <Image
                src={study.imageSrc}
                alt={study.imageAlt}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 p-4 order-2 lg:order-none">
              <h3 className="text-gray-900 text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-700 mb-4">{study.description}</p>
              <p className="text-green-600 font-bold mb-4">預期效益</p>
              <p className="text-gray-700 mb-4">{study.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
