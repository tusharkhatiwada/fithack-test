import { userData } from "../../data";
import CircularProgress from "../ui/circularProgress";

export default function Goals() {
  return (
    <div className='my-5 mt-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-900'>Goals</h2>
        <button
          type='button'
          className='ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Add Goal
        </button>
      </div>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'
      >
        {userData.goals.map((goal) => (
          <li key={goal.id} className='col-span-1 flex rounded-md shadow-sm'>
            <div className='flex w-20 flex-shrink-0 items-center justify-center bg-gray-100 text-sm font-medium p-2'>
              <CircularProgress value={goal.progress} color='#16a34a' />
            </div>
            <div className='flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white'>
              <div className='flex-1 truncate px-4 py-2 text-sm'>
                <div className='font-medium text-gray-900 hover:text-gray-600'>
                  {goal.name}
                </div>
                <p className='text-gray-500'>{goal.progress} %</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
