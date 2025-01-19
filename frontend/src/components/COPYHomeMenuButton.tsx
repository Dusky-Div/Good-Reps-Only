// import FourDots from "/assets/FourDots.svg";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { X } from "lucide-react";

// const HomeMenuButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   return (
//     <motion.div className="flex absolute right-4 w-fit h-fit items-center justify-center">
//       <motion.div
//         className={`button flex w-16 h-16 z-50 rounded-full items-center justify-center ${
//           isOpen ? "bg-white" : "bg-[#242424]"
//         }`}
//         onClick={handleClick}
//       >
//         {isOpen ? (
//           <X strokeWidth={2.8} className="w-7 h-7 text-red-600" />
//         ) : (
//           <img src={FourDots} className="filter invert w-8 h-8" />
//         )}
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="flex absolute z-40 -top-7 -right-6 w-svw max-w-[420px] min-h-svh bg-black"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.8 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={() => setIsOpen(false)}
//           />
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="flex absolute h-fit w-fit right-0 top-20 z-40 flex-col gap-1"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               y: 20,
//               transition: { duration: 0.2 },
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeOut",
//             }}
//           >
//             {["My Splits", "My PRs", "PR Analytics", "Settings"].map(
//               (text, index) => (
//                 <motion.div
//                   key={index}
//                   className="component flex w-52 h-fit px-6 py-4 font-medium text-lg bg-[#242424] rounded-lg"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: 20,
//                     transition: { duration: 0.3 },
//                   }}
//                   transition={{
//                     delay: index * 0.04,
//                     duration: 0.3,
//                     ease: "easeOut",
//                   }}
//                 >
//                   {text}
//                 </motion.div>
//               )
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default HomeMenuButton;
