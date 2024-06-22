import { userData } from "../../data";

export default function SelfWorkTracking() {
  return (
    <div className='rounded shadow bg-white p-4'>
      <h2 className='text-xl font-semibold text-gray-900'>Self Work Tracking</h2>
      <div className='flex rounded-md shadow-sm my-3'>
        <div className='flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-lg font-medium text-white bg-sky-600'>
          {userData.selfWorkTracking.totalSessions}
        </div>
        <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
          <div className='flex-1 truncate px-4 py-4 text-sm'>
            <div className='font-medium text-gray-900 hover:text-gray-600'>
              Total sessions with FitHack
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
