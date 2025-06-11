// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const Testimonials = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.navigation.init();
//       swiperRef.current.navigation.update();
//     }
//   }, []);
  

//   return (
//     <section className="testimonial">
//       <div className="container position-relative">
        
//       <script src="https://static.elfsight.com/platform/platform.js" async></script>
// <div class="elfsight-app-3b06a899-ec1a-48cf-b882-a73af7038f92" data-elfsight-app-lazy></div>
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="pq-section pq-style-1 text-center">
//               <h2 className="pq-section-title"> What Our Patients Say</h2>
//             </div>
          
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={30}
//               slidesPerView={3}
//               onSwiper={(swiper) => {
//                 swiperRef.current = swiper;
//                 setTimeout(() => {
//                   if (swiper) {
//                     swiper.params.navigation.prevEl = prevRef.current;
//                     swiper.params.navigation.nextEl = nextRef.current;
//                     swiper.navigation.init();
//                     swiper.navigation.update();
//                   }
//                 });
//               }}
//               breakpoints={{
//                 320: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               loop={true}
//               autoplay={{ delay: 3000 }}
//             >
//               {[1, 2, 3, 4, 5, 6].map((index) => (
//                 <SwiperSlide key={index}>
//                   <div className="pq-testimonial-box pq-style-1">
//                     <div className="pq-testimonial-info">
//                       <div className="pq-testimonial-content">
//                         <div className="pq-testimonial-icon">
//                           <i className="fas fa-quote-left"></i>
//                         </div>
//                         <p>
//                           There are many variations of passages of Lorem Ipsum
//                           available, but the majority have suffered alteration
//                           in some form, by injected humour, or randomized words
//                           which don’t look even believable.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="pq-testimonial-media">
//                       <div className="pq-testimonial-meta">
//                         <h2>Dr. John Martin</h2>
//                         <span>Cancer Research</span>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
 
//             <div ref={prevRef} className="swiper-button-prev-custom">
//               <i className="fas fa-chevron-left"></i>
//             </div>
//             <div ref={nextRef} className="swiper-button-next-custom">
//               <i className="fas fa-chevron-right"></i>
//             </div>

//             <style>
//               {`
//                 .swiper-button-prev-custom,
//                 .swiper-button-next-custom {
//                   position: absolute;
//                   // top: 50%;
//                   bottom: 30%;
//                   transform: translateY(-50%);
//                   z-index: 10;
//                   background: rgba(0, 0, 0, 0.7);
//                   color: white;
//                   border-radius: 50%;
//                   width: 40px;
//                   height: 40px;
//                   display: flex;
//                   align-items: center;
//                   justify-content: center;
//                   cursor: pointer;
//                 }

//                 .swiper-button-prev-custom {
//                   left: -50px;
//                 }

//                 .swiper-button-next-custom {
//                   right: -50px;
//                 }

//                 .swiper-button-prev-custom:hover,
//                 .swiper-button-next-custom:hover {
//                   background: rgba(0, 0, 0, 1);
//                 }
//               `}
//             </style>
//           </div>
//         </div>
//       </div>
//     </section>
    
//   );
// };

// export default Testimonials;
