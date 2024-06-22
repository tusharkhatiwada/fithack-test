import { userData } from "../../data";
import weightIcon from "../../assets/weight.png";
import bmiIcon from "../../assets/bmi.png";
import bodyFatIcon from "../../assets/body-fat.png";
// import ActivityRings from "../ui/activityRings";
import { WeightHistory } from "./weightHistory";
import ActivityRings from "../ui/activityRings";
import { classNames, cn } from "../../utils/helper";

export default function HealthStats() {
  const heartRates = userData.healthStats.heartRateEvolution.map((hr) => ({
    intensity: hr.intensity,
    color: getColorForIntensity(hr.intensity),
    value: hr.heartRate,
  }));
  function getColorForIntensity(intensity: string) {
    switch (intensity) {
      case "Low":
        return "#16a34a";
      case "Medium":
        return "#ca8a04";
      case "High":
        return "#dc2626";
      default:
        return "#525252";
    }
  }
  return (
    <div>
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6'>
          <dt>
            <div className='absolute'>
              <img src={weightIcon} alt='Weight Icon' className='w-10 h-10' />
            </div>
            <p className='ml-16 truncate text-sm font-medium text-gray-500'>Weight</p>
          </dt>
          <dd className='ml-16 flex items-baseline pb-6 sm:pb-7'>
            <p className='text-2xl font-semibold text-gray-900'>
              {userData.healthStats.currentWeight}{" "}
              <span className='font-medium text-base text-gray-500'>kg</span>
            </p>
          </dd>
        </div>
        <div className='relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6'>
          <dt>
            <div className='absolute'>
              <img src={bodyFatIcon} alt='Weight Icon' className='w-10 h-10' />
            </div>
            <p className='ml-16 truncate text-sm font-medium text-gray-500'>Body Fat</p>
          </dt>
          <dd className='ml-16 flex items-baseline pb-6 sm:pb-7'>
            <p className='text-2xl font-semibold text-gray-900'>
              {userData.healthStats.bodyFatPercentage}{" "}
              <span className='font-medium text-base text-gray-500'>g</span>
            </p>
          </dd>
        </div>
        <div className='relative overflow-hidden rounded-lg bg-white px-4 pt-5 shadow sm:px-6 sm:pt-6'>
          <dt>
            <div className='absolute'>
              <img src={bmiIcon} alt='Weight Icon' className='w-10 h-10' />
            </div>
            <p className='ml-16 truncate text-sm font-medium text-gray-500'>BMI</p>
          </dt>
          <dd className='ml-16 flex items-baseline pb-6 sm:pb-7'>
            <p className='text-2xl font-semibold text-gray-900'>
              {userData.healthStats.bmi}
            </p>
          </dd>
        </div>
      </dl>
      <div className='my-5 grid grid-cols-1 sm:grid-cols-3 gap-5'>
        <div className='col-span-2 rounded-lg bg-white shadow p-6'>
          <p className='text-xl font-semibold text-gray-900'>Weight History</p>
          <WeightHistory />
        </div>
        <div className='rounded-lg bg-white shadow p-6 relative'>
          <p className='text-xl font-semibold text-gray-900'>Heart Rate</p>
          <ActivityRings rings={heartRates} />
          <div className='flex items-center justify-center absolute bottom-10 right-0 left-0'>
            {heartRates.map((hr) => (
              <div key={hr.intensity} className='flex items-center text-sm mx-3'>
                <div className='flex items-center gap-2'>
                  <div
                    className={cn(`w-4 h-4`)}
                    style={{ backgroundColor: hr.color }}
                  ></div>
                  <p className=''>{hr.intensity}:</p>
                </div>
                <p>{hr.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
