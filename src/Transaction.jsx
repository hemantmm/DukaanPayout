import React from 'react'

function Transaction() {
  return (
    <>
    <div className='mt-3 w-full'>
              <table className='w-full text-sm border-collapse'>
                <thead className='bg-neutral-100 font-normal text-left'>
                  <tr>
                    <th className='pt-3 pb-3 pl-3 pr-3 font-medium text-lg text-neutral-600'>Order ID</th>
                    <th className='pt-3 pb-3 pl-3 pr-3 font-medium text-lg text-neutral-600'>Status</th>
                    <th className='pt-3 pb-3 pl-3 pr-3 font-medium text-lg text-neutral-600'>Transaction ID</th>
                    <th className='pt-3 pb-3 pl-3 pr-3 font-medium text-lg text-neutral-600'>Refund date</th>
                    <th className='pt-3 pb-3 pl-3 pr-3 font-medium text-lg text-neutral-600 text-right'>Order amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b-2 border-solid border-stone-100'>
                    <td className='date pt-4 pb-4 pl-3 pr-3 text-base font-semibold text-sky-700'>#281209</td>
                    <td className='pt-4 pb-4 pl-3 pr-3 text-base flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-green-600'></div>
                      Successful
                    </td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700">131634495747</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base">Today, 08:45 PM</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700 text-right">₹1,125.00</td>
                  </tr>

                  <tr className='border-b-2 border-solid border-stone-100'>
                    <td className='pt-4 pb-4 pl-3 pr-3 text-base font-semibold text-sky-700'>#281208</td>
                    <td className='pt-4 pb-4 pl-3 pr-3 text-base flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-neutral-400'></div>
                      Processing
                    </td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700">131634495747</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base">Yesterday, 3:00 PM</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700 text-right">₹1,125.00</td>
                  </tr>

                  <tr className='border-b-2 border-solid border-stone-100'>
                    <td className='date pt-4 pb-4 pl-3 pr-3 text-base font-semibold text-sky-700'>#281207</td>
                    <td className='pt-4 pb-4 pl-3 pr-3 text-base flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        Successful
                    </td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700">131634495747</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base">12 Jul 2023, 03:00 PM</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700 text-right">₹1,125.00</td>
                  </tr>

                  <tr className='border-b-2 border-solid border-stone-100'>
                    <td className='date pt-4 pb-4 pl-3 pr-3 text-base font-semibold text-sky-700'>#281206</td>
                    <td className='pt-4 pb-4 pl-3 pr-3 text-base flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        Successful
                    </td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700">131634495747</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base">12 Jul 2023, 03:00 PM</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700 text-right">₹1,125.00</td>
                  </tr>

                  <tr className='border-b-2 border-solid border-stone-100'>
                    <td className='date pt-4 pb-4 pl-3 pr-3 text-base font-semibold text-sky-700'>#281205</td>
                    <td className='pt-4 pb-4 pl-3 pr-3 text-base flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        Successful
                    </td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700">131634495747</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base">12 Jul 2023, 03:00 PM</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700 text-right">₹1,125.00</td>
                  </tr>

                  <tr className='border-b-2 border-solid border-stone-100'>
                    <td className='date pt-4 pb-4 pl-3 pr-3 text-base font-semibold text-sky-700'>#281204</td>
                    <td className='pt-4 pb-4 pl-3 pr-3 text-base flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-green-600'></div>
                        Successful
                    </td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700">131634495747</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base">12 Jul 2023, 03:00 PM</td>
                    <td class="pt-4 pb-4 pl-3 pr-3 text-base text-zinc-700 text-right">₹1,125.00</td>
                  </tr>

                </tbody>
              </table>
            </div>
    </>
  )
}

export default Transaction