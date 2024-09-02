import { Metadata } from 'next'
import Image from 'next/image'
import seoImage from '../../public/images/seo_image.jpeg'
import { AiOutlineRight } from 'react-icons/ai'

// import required modules
import { Pagination } from 'swiper/modules'
import SwiperCompnent from '../components/Swiper/index'


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
      description: '老師傅在設備維修累積的經驗難以傳承，再者維修人員能力不同，維修好的設備後續的表現狀況也有差異，若設備異常持續復發，無法有效消化產線反應的異常問題。',
      impact: '縮短維修人員問題處理時間，提高可執行維修時間2.4小時/日，同時提供最佳維修方式，可降低設備故障率，由現況1.5%降低至0.1%。',
      imageSrc: '/images/seo_image.jpeg', // 替換為你的實際圖片路徑
      imageAlt: '設備維修紀錄圖片',
      reverse: false // 決定圖片和文字的排列方式，false 為圖片在右邊（桌面版）
    },
    {
      title: '料品規格清單',
      description: 'PCB生產製造前客戶會提供料品規格清單(如：層別/銅厚等資訊)，現行各客戶規格描述無統一格式，內部透過比對模板定義困難且解析正確率低，需訓練專業人員進行規格文件解析，轉換統一生產規格，利於後續生產流程規劃。',
      impact: '目前每隻料號人工規格解析作業時間在6小時，透過大型語言模型智慧審機構圖及將客戶標記資料轉化為參數檔案並可以供專業人員使用的製程設計軟體讀入，每隻料號可以節省2小時，每月超過百支料號需要進行規格解析，每月可節省超過 10 位解析人力。',
      imageSrc: '/images/seo_image.jpeg',
      imageAlt: '料品規格清單圖片',
      reverse: true
    }
  ]

  return (
    <div className='w-full'>
      <div className="relative w-full h-[50vh]">
        <SwiperCompnent />
      </div>
      <div className="p-8">
        <div className='flex justify-center'>
          <div className="text-4xl font-bold text-black mb-8 relative section-title w-fit">最新消息</div>
        </div>
        <div className="max-w-[1023px] m-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg">
            {news.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg max-w-[325px] mx-auto">
                <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-[5px] mb-2">
                  {item.tag}
                </span>
                <h3 className="text-gray-900 text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-green-500 text-sm mb-4">{item.date}</p>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end lg:col-start-3 lg:justify-self-end mt-[24px] hover:underline">
            <a href="#" className="text-green-600 flex items-center">觀看更多<AiOutlineRight/></a>
          </div>
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto justify-items-center">
          <div className="p-4 flex flex-col justify-center w-[325px]">
            <h2 className="text-left text-2xl font-bold text-black mb-4 section-title w-fit">五大技術資源</h2>
            <div className="text-left text-black mb-4">
              <div className='text-2xl mt-[32px]'>製造業AI的升級引擎！</div>
              <div className='text-base'>深入解析五大AI技術資源，輕鬆無痛科技導入，助力提升生產效率與競爭力，創造智慧製造的全新時代。</div>
            </div>
          </div>
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg shadow-lg flex flex-col items-center text-center w-[325px]">
              <Image src={feature.imageSrc} alt={feature.title} width={325} height={325} />
              <h3 className="text-gray-900 text-3xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-700 mb-4">{feature.description}</p>
              <div className="flex space-x-2">
                {feature.buttons.map((button, i) => (
                  <button key={i} className={`${button.style} text-white text-base px-4 py-2 rounded-[10px]`}>
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <div className='flex justify-center'>
          <div className="text-4xl font-bold text-black mb-8 relative section-title w-fit">AI應用成功案例</div>
        </div>
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className={`flex flex-col bg-green-50 rounded-[10px] p-[40px] max-w-[1023px] lg:flex-row ${study.reverse ? 'lg:flex-row-reverse' : ''} items-center lg:items-start mx-auto mb-8`}
          >
            <div className="w-full lg:w-1/2 order-1 lg:order-none">
              <Image
                src={study.imageSrc}
                alt={study.imageAlt}
                width={457}
                height={350}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className={`w-full lg:w-1/2 pt-5 ${study.reverse ? 'pr-[40px]' : 'pl-[40px]'} order-2 lg:order-none`}>
              <h3 className="text-gray-900 text-3xl font-semibold mb-4">{study.title}</h3>
              <p className="text-gray-700 mb-4">{study.description}</p>
              <p className="text-green-600 text-xl font-bold mb-4">預期效益</p>
              <p className="text-gray-700 mb-4">{study.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
