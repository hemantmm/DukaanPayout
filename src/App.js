import './App.css';
import Menubar from './Menubar';
import Transaction from './Transaction';

function App() {
  return (
   <>
    <div className='flex home'>
      {/* <Sidebar /> */}
      <div className='sticky bg-slate-800 h-screen w-56 inset-0 text-stone-300'>
        <div className='flex flex-col h-full'>
          <div className='flex gap-3 pt-4 pr-4 pb-5 pl-4'>
            <div className='userLogo'>
              <img src='https://a56-dukaan.vercel.app/img/store-def.jpg' className='w-11 h-11 rounded' alt='hi' />
            </div>
            <div className='userInfo'>
              <div className='text-white text-s font-medium mb-1'>Nishyan</div>
              <div className='text-zinc-400 text-xs underline'>Visit store</div>
            </div>
            <div className='text-white font-medium ml-8 mt-4'>
            <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-chevron-down-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>  
            </div>
          </div>
          <Menubar />
          
          <div className='flex items-center mt-auto mb-5 ml-4 mr-4 pt-2 pb-2 pl-4 pr-4 gap-3 rounded text-sm bg-slate-600'>
            <div>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr12">
                <rect width="36" height="36" rx="4" fill="white" fill-opacity="0.1"></rect>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99995 9.79751C8.42319 9.79751 7.79995 10.3555 7.79995 11.2475V24.7475C7.79995 25.6395 8.42319 26.1975 8.99995 26.1975H27C27.5767 26.1975 28.2 25.6395 28.2 24.7475V21.8475H23C20.8737 21.8475 19.15 20.1238 19.15 17.9975C19.15 15.8712 20.8737 14.1475 23 14.1475H28.2V11.2475C28.2 10.3555 27.5767 9.79751 27 9.79751H8.99995ZM29.7999 14.1475V11.2475C29.7999 9.65423 28.6323 8.19751 27 8.19751H8.99995C7.36758 8.19751 6.19995 9.65423 6.19995 11.2475V24.7475C6.19995 26.3408 7.36758 27.7975 8.99995 27.7975H27C28.6323 27.7975 29.7999 26.3408 29.7999 24.7475V21.8475H29.85V14.1475H29.7999ZM22 17.9475C22 17.4781 22.3806 17.0975 22.85 17.0975H24.15C24.6194 17.0975 25 17.4781 25 17.9475C25 18.417 24.6194 18.7975 24.15 18.7975H22.85C22.3806 18.7975 22 18.417 22 17.9475ZM20.85 17.9975C20.85 16.8101 21.8126 15.8475 23 15.8475H28.15V20.1475H23C21.8126 20.1475 20.85 19.1849 20.85 17.9975Z" fill="white"></path>
              </svg>
            </div>
            <div className='flex flex-col gap-1'>
              <span>Available credits</span>
              <span className='rounded-2xl font-medium text-white'>222.10</span>
            </div>
          </div>
        </div>
      </div>
      {/* <Navbar /> */}

      <section className='bg-neutral-100 flex-1 overflow-auto'>
        <div className='flex justify-between pt-4 pb-4 pr-8 pl-8 bg-white border-b border-solid border-slate-700'>
          <div className='flex items-center gap-3'>
            <div className='text-xl font-semibold'>
              Payouts
            </div>
            <div className='flex gap-2 text-zinc-500 text-base cursor-pointer mt-1'>
              <div className='infoIcon'>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
                </svg>
              </div>
              <div>How it works?</div>
            </div>
          </div>

          <div className='search'>
            <div className='flex items-center gap-2 pt-1 pb-2 pl-4 pr-4 w-[400px] rounded-lg bg-neutral-100'>
              <div className='searchIcon'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="22" viewBox="0,0,256,256">
                  <g fill-opacity="0.36078" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M20.5,6c-7.99037,0 -14.5,6.50964 -14.5,14.5c0,7.99036 6.50963,14.5 14.5,14.5c3.45636,0 6.63371,-1.22096 9.12891,-3.25l9.81055,9.81055c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-9.81055,-9.81055c2.02904,-2.4952 3.25,-5.67255 3.25,-9.12891c0,-7.99036 -6.50963,-14.5 -14.5,-14.5zM20.5,9c6.36905,0 11.5,5.13096 11.5,11.5c0,3.10261 -1.2238,5.90572 -3.20898,7.9707c-0.12237,0.08994 -0.23037,0.19794 -0.32031,0.32031c-2.06499,1.98518 -4.86809,3.20898 -7.9707,3.20898c-6.36905,0 -11.5,-5.13096 -11.5,-11.5c0,-6.36904 5.13095,-11.5 11.5,-11.5z"></path></g></g>
                </svg>
              </div>
              <input type='text' placeholder="Search features, tutorial, etc." className='outline-none border-none bg-transparent w-full'/>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='flex items-center justify-center h-10 w-10 cursor-pointer bg-neutral-200 text-neutral-200 rounded-full'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D"/>
              </svg>
            </div>
            <div className='flex items-center justify-center h-10 w-10 cursor-pointer bg-neutral-200 text-neutral-200 rounded-full'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVR4nGNgGAWjYBQMGIhhYGD4wcDA8J9IDFIbRYoF8SQY/h+K40j1RTkJhteTajgpltSTazgxltRTajg+S6hmODZLqG44DCQxMDAkwnmjYBQMDwAAptU8wdV6fT0AAAAASUVORK5CYII=" alt='downArrow' />
            </div>
          </div>
        </div>

        <section className='p-8 bg-zinc-50'>
          <div className='flex items-center justify-between'>
            <div className='text-xl font-medium'>Overview</div>
            <div className='flex items-center gap-2 pt-1 pb-1 pl-2 pr-2 rounded bg-white border border-solid border-stone-300 text-zinc-700'>
              <span>This Month</span>
                <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-chevron-down-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
          </div>

          <div className='mt-7 flex justify-between gap-6'>
            <div className='pt-3 pb-0 pr-0 text-white w-full flex flex-col gap-4 rounded-md bg-sky-700 h-auto'>
              <div className='flex gap-2 font-light items-center pt-0 pb-0 pr-5 pl-5'>
                <div className='text-lg font-normal'>Next Payout</div>
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
              </div>
              <div className='flex justify-between items-center pb-0 pl-5 pr-5'>
               <div class="text-[27px] font-semibold">₹2,312.23</div>
                  <div class="flex gap-1 text-sm font-medium cursor-pointer">
                    <div class="underline">23 orders</div>
                      <svg height="22px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                        class="text-white text-lg" transform="rotate(-90)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                  </div>
              </div>

              <div class="pt-3 pb-3 pr-5 pl-5 flex justify-between items-center text-sm font-light rounded-lg bg-sky-800">
                <div class="text-lg font-normal">Next payout date:</div>
                <div>Today, 04:00PM</div>
              </div>
            </div>

            <div class="pt-3 pb-6 pr-5 pl-5 shadow bg-white p-4 rounded-lg w-full flex flex-col gap-4 relative h-fit">
              <div class="flex gap-2 items-center text-neutral-600">
                <div class="text-lg font-normal">Amount Pending</div>
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-3xl font-medium">₹92,312.20</div>
                <div class="flex gap-1 text-base font-medium cursor-pointer text-sky-700">
                  <div class="underline">13 orders</div>
                    <svg height="22px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                        class="text-sky-700 text-lg" transform="rotate(-90)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
              </div>
            </div>

            <div class="pt-3 pb-6 pr-5 pl-5 shadow bg-white p-4 rounded-lg w-full flex flex-col gap-4 relative h-fit">
              <div class="flex gap-2 items-center text-neutral-600">
                <div class="text-lg font-normal">Amount Processed</div>
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-3xl font-medium">₹23,92,312.19</div>
              </div>
            </div>
          </div>

        </section>

        <section className='pt-0 pb-0 pr-8 pl-8 bg-zinc-50'>
          <div  className='text-2xl font-medium'>
            Transactions | This Month
          </div>
          <div className='flex mt-5 gap-4'>
            <div className='text-base rounded-full pt-1 pb-1 pr-4 pl-4  text-stone-500  bg-neutral-200 cursor-pointer'>Payouts (22)</div>
            <div className='text-base rounded-full pt-1 pb-1 pr-4 pl-4 bg-sky-700 text-white cursor-pointer'>Refunds (6)</div>
          </div>
          <div className='mt-5 bg-white rounded-md pt-2 pb-2 pr-3 pl-3'>
            <div className='flex justify-between items-center'>
              <div className='pt-2 pr-2 pb-2 pl-3 border border-solid border-zinc-500 rounded flex gap-2 items-center w-60 text-zinc-500'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="22" viewBox="0,0,256,256">
                  <g fill-opacity="0.36078" fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M20.5,6c-7.99037,0 -14.5,6.50964 -14.5,14.5c0,7.99036 6.50963,14.5 14.5,14.5c3.45636,0 6.63371,-1.22096 9.12891,-3.25l9.81055,9.81055c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-9.81055,-9.81055c2.02904,-2.4952 3.25,-5.67255 3.25,-9.12891c0,-7.99036 -6.50963,-14.5 -14.5,-14.5zM20.5,9c6.36905,0 11.5,5.13096 11.5,11.5c0,3.10261 -1.2238,5.90572 -3.20898,7.9707c-0.12237,0.08994 -0.23037,0.19794 -0.32031,0.32031c-2.06499,1.98518 -4.86809,3.20898 -7.9707,3.20898c-6.36905,0 -11.5,-5.13096 -11.5,-11.5c0,-6.36904 5.13095,-11.5 11.5,-11.5z"></path></g></g>
                </svg>
                <input type='text' className='pt-1 pb-1 pl-0 pr-0 text-sm outline-none border-none w-full' placeholder="Order ID or transaction ID" />
              </div>
              <div className='flex gap-5'>
                <div className='flex items-center gap-2 pt-2 pb-2 pl-3 pr-3 rounded bg-white text-zinc-500 border border-solid border-zinc-500'>
                  Sort
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO2bYWrDMAyFP+WUXdP2LN4dNhhsN9whMgouhM6OnT9NIr0HhgRK6vc5sWSQ4JgyYATe8nUoGfAJTHn8AANBzU+RIFjFfAgI1jDvGoIBX09GfyvXU/6teV75b+B9dp+AD49vglXMD9n0HIB5g2AL5ikAwBMEa5ivAXABwQobXmlTqwFY84xd6tw58SUANQj3tHn3GjtXrQWgBOEQAAw4dRxyegDMn3c6yifQq14AbpX2AmAArnkMEQHcZhO5QwgHIG00EQFAbwD6BNAegDZBFAVQGGRDJeUBKBGalAmiVHjSWQAdhlKA6PNPCoMoDKIwiMIgCoMoDKIwyOukPAAlQigTRKkwOgsQ9DB0nf3vhYAAhmz8snUFWNpLONpKySsA6+zIWFOsdKgOj3P0crUxesGiRS9Z7S08XipabhU8u4CQKmXrLsz3QCg1Lrgy34Lw3Lri0vxDoZuXlt6E0nC18mshuDbfghDCfA1CKPNkHb4j4w/F5bE9L2vcxQAAAABJRU5ErkJggg==" alt='sort' className='w-4 font-black cursor-pointer' />
                </div>
                <div className='flex items-center gap-2 pt-2 pb-2 pl-3 pr-3 rounded bg-white text-zinc-500 border border-solid border-zinc-500'>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nO2ZQWrDMBBFn3zKLpJco9sJ3XRRsmqg0N4kR+qqtPspAhWMsNtmoSBr/oMBQZSg/zOej20QQgghhBDi1kzAvlReh+MAeKlsQjhsZkBeh8NkAOoA1yWAZoBrCKIUMAJiSgGUAq4UQCngSgGUAkZALEIKPABfwBOQrjAg7z2V7x7ZMJ8zkS+VCWsGpLL357MPNsxpJqQ2YcmAWryX7tksCXiuBL2Vh6C1AXnvudr7OsID07RiwrEyYEjx/NLa7yvrpXkxBGmhE5ZqqH/+WhOGFv+XCSHEr5kQSvzchLtSww28IZk6f5vb/HyHzt/mNj+fdX772vx8JgNQB7guATQDXEMQpYARPAYvwH1ndbmlAd55NTFg34Gw/9auhQFT+eHHzmvX6c2aEEIIIYSgJ74B3kFEPhtJVX8AAAAASUVORK5CYII=" alt='download' className='w-6' />
                  
                </div>
              </div>
            </div>
            <Transaction />

            
          </div>
        </section>
      </section>

    </div>
   </>
  );
}

export default App;
