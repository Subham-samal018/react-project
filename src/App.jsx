 import React from 'react'
 import Section1 from './components/section-1/Section1'
 const App = () => {
   const users=[
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     intro:'',
      tag:'Satisfied'
    },
    {img:'https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
     intro:'',
      tag:'Underserved'
    },
    {img:'https://images.unsplash.com/photo-1733348137613-90f1af8674fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
     intro:'',
      tag:'Underbanked'
    }
    ]
   return (
     <div>
       <Section1 users={users} />
     </div>
   )
 }
 
 export default App
 