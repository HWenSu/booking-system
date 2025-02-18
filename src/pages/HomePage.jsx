import { useScroll, useTransform, motion, easeInOut, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react'
// import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const HomePage = () => {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll()
  // useScroll 監控滾動進度
  // useTransform 動態改變圖片的模糊程度
  const blur = useTransform(scrollYProgress, [0, 1], [0, 30]) // 模糊從 0 到 10
  // const yPosition = useTransform(scrollYProgress, [0, 1], [0, 100]) // 讓圖片隨滾動移動
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const testimonials = [
    { id: "Cindy Su", name: "Customer 1", review: "Very comfortable massage, made me feel completely relaxed." },
    { id: "Allen Lee", name: "Customer 2", review: "Professional service, I feel very satisfied." },
    { id: "Brent Wu", name: "Customer 3", review: "Clean and quiet environment, perfect for relaxation." },
  ];

  const handleScroll = (e)=> {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY * 2; // 讓滾輪控制水平滾動
    }
  }

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
      <div className=" w-screen h-screen bg-black bg-opacity-20 text-white text-center " >   
      <div className="h-screen bg-black bg-opacity-20 text-white text-center">   
        
        {/* 背景圖片 */}
        <motion.div
        className='absolute w-screen h-screen'
        style={{
          backgroundImage: "url('/modals/images/pexels-breakingpic-3188.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // 讓背景固定
          filter: useMotionTemplate`blur(${blur}px)`, // 動態改變圖片模糊程度
          scale: scale,
        }}
        >
          </motion.div>
          </div>
          <div className='absolute inset-0 w-screen h-screen'>
          <motion.h1 
                className="text-2xl mt-[30vh] md:text-4xl font-bold p-3"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1, 
                 }}
                transition={{ duration: 1, delay: 0.3 }}
                
              >
                Relax your body and mind
              </motion.h1>
              <motion.h2
                className='text-m mt-[5vh] md:text-xl '
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration:2, delay:0.5 }}
              >
                Experience tranquility with our expert therapies tailored to your needs.
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
          </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100  h-[600px]">
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
                whileInView:{ 
                  ease: easeInOut,
                  type : "inertia",  // 慣性動畫
                  velocity: 50,  // 按照 type 不同才會有衍生的屬性
                  duration: 1, 
                  delay: index*2
                }
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
              initial={{opacity:0, y:50}} 
              whileInView={{opacity:1, y:0}}
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
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl font-semibold mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            立即預約
          </motion.h2>
          <button className="py-3 px-8 bg-primary text-white text-lg rounded-lg hover:bg-opacity-80 transition duration-300">
            開始預約
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
