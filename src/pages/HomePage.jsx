import { useScroll, useTransform, motion, easeInOut, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react'

const HomePage = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()
  // useScroll 監控滾動進度
  // useTransform 動態改變圖片的模糊程度
  const blur = useTransform(scrollYProgress, [0, 1], [0, 30]) // 模糊從 0 到 10
  const scale = useTransform(scrollYProgress, [1,0.8], [0, 1])
  const fadeOut = useTransform(scrollYProgress, [0.8,1], [0, 0.8])
  const halfFadeOut = useTransform(scrollYProgress, [0.9,1], [1, 0.6])
  

  const testimonials = [
    { id: "Cindy Su", name: "Customer 1", review: "Very comfortable massage, made me feel completely relaxed." },
    { id: "Allen Lee", name: "Customer 2", review: "Professional service, I feel very satisfied." },
    { id: "Brent Wu", name: "Customer 3", review: "Clean and quiet environment, perfect for relaxation." },
  ];


  const blurEffect = useMotionTemplate`blur(${blur}px)`;

  const letters = "A purification of body, mind, and soul."
  const footerLetters = 'Life and Relax'
  
  //h2父元素的動畫腳本
  const h2Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // 每個字母間隔 0.1 秒出現
      },
    },
  };
  
  // 個別文字腳本
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleScroll = (e)=> {
    e.preventDefault(); // 防止預設垂直滾動
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY * 1.5; // 讓滾輪控制水平滾動
    }
  }

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-screen h-screen">
        {/* 背景圖片 */}
        <motion.div
        className='absolute inset-0 w-full h-full z-0'
        style={{
          backgroundImage: "url('/modals/images/pexels-breakingpic-3188.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundPositionY: 'fixed',
          filter: blurEffect, // 動態改變圖片模糊程度
        }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10" ></div>     
        <div className='absolute inset-0 w-screen flex flex-col justify-center items-center h-screen text-white text-center z-20'>
          <motion.h1 
                className="text-2xl md:text-4xl font-bold p-3"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1, 
                 }}
                transition={{ duration: 1, delay: 0.3 }}
                
              >
                Relax your body and mind
          </motion.h1>
          <motion.h2
            className='flex text-m mt-[5vh] md:text-xl'
            variants={h2Variants}
            initial='hidden'
            animate='show'
          >
            {letters.split('').map((word, index)=> (
            <motion.span
            key={index}
            variants={wordVariants}
            className='inline-block'
            >
              {word === " " ? "\u00A0" : word} {/* 用不換行空格替換 */}
            </motion.span>

            ))}
            
          </motion.h2>
              
              <motion.button 
              className="mt-[10vh] py-3 px-8 bg-primary text-white text-lg rounded-lg hover:bg-opacity-80 transition duration-300"
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:2, delay:0.8 }}
              >
              BOOKING NOW
              </motion.button>  
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100  h-[100vh]">
        <div className="mx-auto text-center">
          <motion.h2 
            className="text-3xl font-semibold"
            initial={{ y: "100%", opacity:0 }}
            whileInView={{ y: 0, opacity:1 }}
            transition={{ duration: 2, delay: 0.5,
              
             }}
            
          >
            Our Services
          </motion.h2>
          <div ref={scrollRef} onWheel={handleScroll} className="flex items-center mx-8 space-x-8 min-w-full overflow-y-auto min-h-[500px] scrollbar-hide">
            {['Deep Massage', 'Aromatherapy', 'Shoulder & Neck Relaxation', 'Essential Oil Massage','Foot Massage'].map((service, index) => (
              <motion.div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg min-w-[400px] h-[300px]"
                initial={{  y:100 }}
                whileInView={{ y:0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  ease: easeInOut,
                  duration: 1, 
                  delay: index * 0.2
                }}
              >
                <img src={`/modals/images/service-image-${index + 1}.jpg`} alt={service} className="object-cover h-[300px] w-[400px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl font-semibold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Customer Testimonials
          </motion.h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
              key={index}
              initial={{opacity:0, y:100, scale: 0.5}} 
              whileInView={{opacity:1, y:0, scale:1}}
              transition={{ duration:1, delay:index*0.5 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-xl font-semibold">{testimonial.id}</p>
                <p className="mt-2 text-lg">{testimonial.review}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative h-[100vh]">
        <motion.div
          className='absolute inset-0 w-full h-full z-0'
          style={{
            backgroundImage: "url('/modals/images/pexels-rdne-6724351.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: fadeOut
          }}
          />
          <motion.div
          className='absolute inset-0 w-full h-full z-10'
          style={{
            backgroundImage: "url('/modals/images/pexels-cottonbro-3997986.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            scale: scale,
            opacity: halfFadeOut,
            positionY: -100
          }}
          />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 z-50">
            <motion.h2 
              className="text-5xl font-semibold mb-12 text-white"
              variants={h2Variants}
              initial='hidden'
              whileInView='show'
            >
            {footerLetters.split('').map((word, index)=>(
              <motion.span
              key={index}
              variants={wordVariants}
              className='inline-block'
              >
                {word === ' '? '\u00A0': word}
              </motion.span>
            ))}
            </motion.h2>
            <button className="py-3 px-8 bg-primary text-white text-lg rounded-lg hover:bg-opacity-80 transition duration-300">
              START BOOKING
            </button>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
