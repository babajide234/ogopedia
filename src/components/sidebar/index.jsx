import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
const Sidebar = () => {
    const style = {
        width: '23%',
        minHeight: '100vh',   
    }
    const sideMenu = [
        {
            id:'1',
            icon: './assets/shuttle 1.png',
            text: 'Welcome',
            url:'/dashboard'
        },
        {
            id:'2',
            icon: './assets/Dahboard.png',
            text: 'Dashboard',
            url:'/dashboard'
        },
        {
            id:'3',
            icon: './assets/ic_wallet.png',
            text: 'Sales',
            url:'/dashboard'
        },
        {
            id:'4',
            icon: './assets/purchase.png',
            text: 'Purchases',
            caret:'./assets/caret-right.png',
            selected:'./assets/pwhite.png',
            sub:[
                {
                    text: 'bills',
                    url:'/dashboard/bills'
                },
                {
                    text: 'Vendors',
                    url:'/dashboard/vendors'
                },
                {
                    text: 'Product & Service',
                    url:'/dashboard/products'
                }
            ]
        },
        {
            id:'5',
            icon: './assets/account.png',
            text: 'Accounting',
            caret:'./assets/caret-right.png',
            sub:[
                {
                    text: 'bills',
                    url:'/dashboard'
                },
                {
                    text: 'Vendors',
                    url:'/dashboard'
                },
                {
                    text: 'Product & Service',
                    url:'/dashboard'
                }
            ]
        },
        {
            id:'6',
            icon: './assets/bank.png',
            text: 'Banking',
            caret:'./assets/caret-right.png',
            sub:[
                {
                    text: 'bills',
                    url:'/dashboard'
                },
                {
                    text: 'Vendors',
                    url:'/dashboard'
                },
                {
                    text: 'Product & Service',
                    url:'/dashboard'
                }
            ]
        },
        {
            id:'7',
            icon: './assets/payroll.png',
            text: 'Payroll',
            caret:'./assets/caret-right.png',
            sub:[
                {
                    text: 'bills',
                    url:'/dashboard'
                },
                {
                    text: 'Vendors',
                    url:'/dashboard'
                },
                {
                    text: 'Product & Service',
                    url:'/dashboard'
                }
            ]
        },
        {
            id:'8',
            icon: './assets/report.png',
            text: 'Reports',
            caret:'./assets/caret-right.png',
            sub:[
                {
                    text: 'bills',
                    url:'/dashboard'
                },
                {
                    text: 'Vendors',
                    url:'/dashboard'
                },
                {
                    text: 'Product & Service',
                    url:'/dashboard'
                }
            ]
        },
        {
            id:'9',
            icon: './assets/users.png',
            text: 'Analytics',
            caret:'./assets/caret-right.png',
            selected:'./assets/userwhite.png',
            sub:[
                {
                    text: 'View Report',
                    url:'/dashboard/report'
                },
                {
                    text: 'To-Do',
                    url:'/dashboard'
                },
                {
                    text: 'Upload Docs',
                    url:'/dashboard'
                },
                {
                    text: 'Chat',
                    url:'/dashboard'
                },
                {
                    text: 'Schedule',
                    url:'/dashboard'
                },
                {
                    text: 'Message Board',
                    url:'/dashboard'
                },
                {
                    text: 'Make Payments',
                    url:'/dashboard'
                },
                {
                    text: 'Billing',
                    url:'/dashboard'
                },
            ]
        },
        {
            id:'10',
            icon: './assets/settings.png',
            text: 'settings',
            caret:'./assets/caret-right.png',
            sub:[
                {
                    text: 'bills',
                    url:'/dashboard'
                },
                {
                    text: 'vendors',
                    url:'/dashboard'
                },
                {
                    text: 'product & Service',
                    url:'/dashboard'
                }
            ]
        }
    ]

    const location = useLocation();
    useEffect(()=>{
        const loc = location.pathname;
        console.log(loc);
        if(loc === '/dashboard'){
            setactive('Welcome');
        } else if(loc === '/dashboard/bills'){
            setactive('Purchases');
        } else if(loc === '/dashboard/report'){
            setactive('Analytics');
        }
    },[location])
    const [open , setopen] = useState(false);
    const [active , setactive] = useState(false);
    const openMenu = (e) => {
        e.preventDefault();
        console.log(location.pathname);
        if(e.currentTarget.id === open){
            setopen(false)
        }else{
            setopen(e.currentTarget.id)
        }
        console.log(e.currentTarget.id);
    }

    // const checkparams = (e) => {
    //     // if (location.pathname === e.currentTarget.)
    //     console
    // }
  return (
      <div className="flex flex-col py-5 bg-gray-100 justify-between" style={style}>
          <div className=" bg-white rounded-3xl shadow-lg w-10/12 mx-auto p-3 flex items-center justify-between mb-10">
              <img src="./assets/logo.png" alt="" className=" w-10 h-10" />
              <h2 className=" text-2xl font-medium text-gray-600">HostBeak</h2>
              <img src="./assets/arrow_right.png" alt="" className="" />
          </div>
          <div className="flex flex-col px-7">
              {
                  sideMenu.map((val,i) => { 
                    return (
                        <>
                            {
                                val.url ? (
                                        <>
                                            <Link to={val.url} key={val.id} className="group grid grid-cols-3 items-center w-full pl-10 h-16 ">
                                                <div className='w-full h-full flex justify-center align-text-bottom'>
                                                    <div className={active === val.text ? 'transition-all flex justify-center items-center  bg-blue-800 w-12 m-1 h-12 rounded-full ':'transition-all flex justify-center items-center  w-6 group-hover:bg-blue-800 group-hover:w-12 m-1 group-hover:h-12 group-hover:rounded-full'}>
                                                        <img src={val.icon} alt="" className=" w-5" />
                                                    </div>
                                                </div>
                                                <h2 className={active === val.text ? "text-sm text-gray-900 font-medium":"transition duration-300  text-gray-400 text-sm group-hover:text-gray-900 font-medium"}>{val.text}</h2>
                                                <div className="">
                                                    {/* <span className=" w-1">2</span> */}
                                                </div>
                                            </Link>
                                        </>
                                    ):(
                                        <>
                                            <button className=" group flex flex-col hover:cursor-pointer" key={i} onClick={openMenu} id={val.id} style={{minHeight:'64px',width:'100%'}}>
                                                <div className="transition-all duration-300  grid grid-cols-3 justify-between items-center w-full pl-10 h-16  ">
                                                    <div className=" w-full h-full flex justify-center align-text-bottom">
                                                        <div className={active === val.text ? "transition-all flex justify-center items-center bg-blue-800 w-12 m-1 h-12 rounded-full":"transition-all flex justify-center items-center  w-6 group-hover:bg-blue-800 group-hover:shadow-2xl group-hover:w-12 m-1 group-hover:h-12 group-hover:rounded-full"}>
                                                            <img src={val.icon} alt="" className=" w-5" />
                                                        </div>
                                                    </div>
                                                    <h2 className={active === val.text ? " text-sm text-gray-900 font-medium":"transition-all duration-300 text-gray-400 text-sm group-hover:text-gray-900 font-medium"}>{val.text}</h2>
                                                    <div className=" flex justify-end">
                                                        <img src={val.caret} alt="" className={active === val.text ? "rotate-90":"group-hover:rotate-90"} />
                                                    </div>
                                                </div>

                                                <ul className={`transition-all duration-300  flex-col w-full  text-left overflow-hidden h-0 ${open === val.id ? 'h-auto':''} ${active === val.text ? 'h-auto':''} ` } >
                                                    {
                                                        val.sub.map((item,key)=>{
                                                            return(
                                                                <>
                                                                    <li key={key} className='' style={{marginLeft:'118px'}}><Link to={item.url} className='capitalize text-gray-400 text-sm hover:text-blue-900  font-medium hover:font-bold'>{item.text}</Link></li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </button>
                                        </>
                                    )
                            } 
                            
                        </>
                    )
                  })
              }
          </div>
          <div className="">
                <Link to='/' className="w-60 group grid grid-cols-3 items-center mx-auto pl-10 h-16 border-b-2 ">
                    <div className='w-full h-full flex justify-center align-text-bottom'>
                        <div className='transition-all flex justify-center items-center  w-6 group-hover:bg-gray-50 group-hover:shadow-lg group-hover:w-12 m-1 group-hover:h-12 group-hover:rounded-full'>
                            <img src='./assets/logout.png' alt="" className=" w-5" />
                        </div>
                    </div>
                    <h2 className="transition duration-300  text-gray-400 text-sm group-hover:text-gray-900 font-medium">Logout</h2>
                    <div className="">
                        {/* <span className=" w-1">2</span> */}
                    </div>
                </Link>
          </div>
          <div className="w-full mt-10">
              <button className=" w-60 mx-auto p-3 font-medium text-xl flex justify-between items-center rounded-lg bg-blue-900 text-white">
                  <img src="/assets/card.png" alt="" className=" w-9 " />
                  <h3 className="">
                    Accept Payments
                  </h3>
                </button>
          </div>
      </div>
  )
}

export default Sidebar