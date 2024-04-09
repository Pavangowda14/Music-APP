import { loader } from '../assets';


const Loader = ({title}) => (
  <div className='w-full flex justify-center items-center flex-col'>
    <img src={loader} alt="loader" className='W-32 h-32 uobject-containe'></img>
    <h1 className='font-bold text-2xl text-white mt-2'>{title || "loading"}</h1>
    </div>
);

export default Loader;
