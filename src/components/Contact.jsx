// import React from 'react';

// const Contact = () => {
//   return (
//     <>
//       <div id="contact" className='py-12 '>
//         <div className='max-w-6xl mx-auto px-4'>
//           <h1 className='text-4xl font-semibold text-gray-100 text-center mb-12'>Contact <span className='text-neutral-500'>Me</span></h1>
//           <div className='flex flex-wrap justify-center'>
//             <div className='w-full lg:w-1/2 lg:pr-8 mb-8'>
//               <form action="https://api.web3forms.com/submit" method="POST" className='bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-lg'>
//                 <input type="hidden" name="access_key" value="851a0909-1214-4438-af31-eda2dde38829" />
//                 <div className='mb-4'>
//                   <label htmlFor='name' className='block text-gray-300 text-sm font-medium mb-2'>Name</label>
//                   <input
//                     type='text'
//                     id='name'
//                     name='name'
//                     placeholder='Your Name'
//                     className='w-full bg-gray-800 bg-opacity-70 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     required
//                   />
//                 </div>
//                 <div className='mb-4'>
//                   <label htmlFor='email' className='block text-gray-300 text-sm font-medium mb-2'>Email</label>
//                   <input
//                     type='email'
//                     id='email'
//                     name='email'
//                     placeholder='Your Email'
//                     className='w-full bg-gray-800 bg-opacity-70 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     required
//                   />
//                 </div>
//                 <div className='mb-4'>
//                   <label htmlFor='message' className='block text-gray-300 text-sm font-medium mb-2'>Message</label>
//                   <textarea
//                     id='message'
//                     name='message'
//                     placeholder='Your Message'
//                     rows='4'
//                     className='w-full bg-gray-800 bg-opacity-70 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type='submit'
//                   className='bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-gray-100 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <motion.div
        id="contact"
        className='py-12'
        initial={{ opacity: 0, y: 50 }}
       
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className='max-w-6xl mx-auto px-4'>
          <motion.h1
            className='text-4xl font-semibold text-gray-100 text-center mb-12'
            initial={{ opacity: 0, y: 50 }}
            
            transition={{ duration: 0.8, delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Contact <span className='text-neutral-500'>Me</span>
          </motion.h1>
          <motion.div
            className='flex flex-wrap justify-center'
            initial={{ opacity: 0 }}
         
            transition={{ duration: 0.8, delay: 0.4 }}
            whileInView={{ opacity: 1 }}
          >
            <div className='w-full lg:w-1/2 lg:pr-8 mb-8'>
              <motion.form
                action="https://api.web3forms.com/submit"
                method="POST"
                className='bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-lg'
                initial={{ opacity: 0, y: 20 }}
               
                transition={{ duration: 0.8, delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <input type="hidden" name="access_key" value="851a0909-1214-4438-af31-eda2dde38829" />
                <motion.div
                  className='mb-4'
                  initial={{ opacity: 0, x: -20 }}
                 
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <label htmlFor='name' className='block text-gray-300 text-sm font-medium mb-2'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Your Name'
                    className='w-full bg-gray-800 bg-opacity-70 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </motion.div>
                <motion.div
                  className='mb-4'
                  initial={{ opacity: 0, x: -20 }}
                 
                  transition={{ duration: 0.8, delay: 0.7 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <label htmlFor='email' className='block text-gray-300 text-sm font-medium mb-2'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your Email'
                    className='w-full bg-gray-800 bg-opacity-70 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  />
                </motion.div>
                <motion.div
                  className='mb-4'
                  initial={{ opacity: 0, x: -20 }}
                  
                  transition={{ duration: 0.8, delay: 0.8}}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <label htmlFor='message' className='block text-gray-300 text-sm font-medium mb-2'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Your Message'
                    rows='4'
                    className='w-full bg-gray-800 bg-opacity-70 text-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type='submit'
                  className='bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-gray-100 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out'
                  initial={{ opacity: 0, x: 
                    -20 }}
                  
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
