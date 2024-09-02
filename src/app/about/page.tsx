import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - My App',
  description: 'Learn more about us on this page.',
  openGraph: {
    title: 'About Us - My App',
    description: 'This is the Open Graph description for the About page.',
    locale: 'en_US',
    type: 'website'
  }
}

export default function About() {
  const steps = [
    {
      title: '構想階段',
      description:
        '根據企業需求，檢視AI方案與資源，確定優先導入項目，構思精準AI導入策略，適向數位轉型的第一步。',
      imageSrc: '/images/test_image.jpg'
    },
    {
      title: '方案設計',
      description:
        '確認AI導入目標，盤點數據與應用情境，並初步估算AI導入成本，確保方案設計符合需求與規格。',
      imageSrc: '/images/test_image.jpg'
    },
    {
      title: '效益評估',
      description:
        '模型開發與部署，檢視實際運營模式，計算投入回報率，驗證AI方案效果，以決定下一步推廣。',
      imageSrc: '/images/test_image.jpg'
    },
    {
      title: '實施/營運',
      description:
        '推廣並落地AI方案，確保模型運行穩定，持續監控與再訓練，實現AI價值的擴散與積值。',
      imageSrc: '/images/test_image.jpg'
    }
  ]

  return (
    <div className="w-full bg-white">
      <div className="w-full bg-green-50 h-[20vh] text-center flex flex-col justify-center">
        <h2>導入指引</h2>
        <div>立即下載指引文件或申請專業諮詢服務</div>
      </div>
      <div className="mt-[30px] p-8">
        <p className="mb-6">
          經濟部產業發展署依據製造業產業特性訂定「製造業AI導入指引文件」，提供有AI導入意願，但無導入經驗或相關知識的廠商，透過「評估、導入」展開之系統性程序，循序檢視公司的營運狀態與需求，找出符合現況的AI導入方案，經由構想評估、方案設計、驗證與應用落地實施之作業步驟，將AI方案導入實際場域，達到公司或工廠AI數位轉型的目標。
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image
                  src={step.imageSrc}
                  width={200}
                  height={200}
                  alt={step.title}
                  className="w-full h-auto mb-4 rounded-[10px]"
                  style={{ maxHeight: '200px', objectFit: 'cover' }} // 設置 maxHeight 和 objectFit
                />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
