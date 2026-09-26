import React from 'react'
import Section1 from './components/Section-1/Section1';
import Section2 from './components/Section-2/Section2';

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1723874466229-85b730bb1f5a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Digitally active customers who value seamless banking, personalized services, and convenient access to their everyday financial needs.',
      tag: 'Satisfied',
      num: '1',
    },
    {
      img: 'https://images.unsplash.com/photo-1771244702701-6c9edac63255?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Customers who have banking access but may lack the products, support, or services needed to fully manage their financial goals.',
      tag:'UnderServed',
      num: '2',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1682092105693-1a2566cf2ee1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Customers with limited access to essential financial services who can benefit from simpler, affordable, and accessible digital banking solutions.',
      tag: 'Underbanked',
      num: '3',
    }
  ]

  return (
    <>
   <Section1 users={users} />
   {/* <Section2 /> */}
   </>
  );
}

export default App
