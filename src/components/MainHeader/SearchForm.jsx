// import React, { useState } from "react";
// import { SearchBackground } from "./SearchBackground";
// import { AudioOutlined } from '@ant-design/icons';
// import './SearchForm.scss';
// import { Link } from "react-router-dom";
// import { Input, Space, ConfigProvider } from 'antd';
// import RecordingModal from "./Recording/RecordingModal";
// const { Search } = Input;



// export const SearchForm = () => {



//   const [search, setSearch] = useState(false)

//   const [searchReq, setsearchReq] = useState('')

//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const isEmptyForm = (e) => {
//     if (searchReq === 0) {
//       e.preventDefault()
//       return
//     }
//     return
//   }

//   const suffix = (
//     <AudioOutlined
//       onClick={e => {
//         e.stopPropagation()
//         setIsModalOpen(!isModalOpen)
//       }}
//       style={{
//         fontSize: 16,
//         color: '#1677ff',
//         display: 'flex',
//         justifyContent: 'center'
//       }}
//     />
//   );

//   return (
//         <div className="search--form" style={{display:'flex', justifyContent: 'center'}}>
//             <ConfigProvider
//               theme={{
//                 token: {
//                   fontSize: 16,
//                 }
//               }}
//             >
//               <div style={{width: '100%', zIndex: "900", display: 'flex'}}>
//                 <Search 
//                   allowClear 
//                   size="large" 
//                   placeholder="input search text" 
//                   value={searchReq}
//                   onChange={(e) => setsearchReq(e.target.value)}
//                   enterButton={<Link onClick={isEmptyForm} style={{width: '100%'}} to={`/search/${searchReq}`}>Искать</Link>}
//                   onFocus={() => setSearch(true)}
//                   suffix={suffix}
//                   />
//               </div>
            
//             </ConfigProvider>
            

//             <SearchBackground search={search} searchReq={searchReq} />

//             {search ? 
//             <div className="search-background" onPointerUp={() => setSearch(false)}></div> : 
//             null}

//             <RecordingModal searchReq={searchReq} setsearchReq={setsearchReq} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

//         </div>
//     )
// }