import { motion } from 'framer-motion';
import Logo from '../../assets/images/Logo.png';
import { constants } from '../../utils/contants';


const Motionheader = () => {
    return (
        <>
            <motion.div
                className="bg-green-50"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <header className="text-white px-4 md:px-16 lg:px-36 py-4 flex justify-between items-center">
                    <a href="/">
                        <img src={Logo} alt="Logo" className="h-6 md:h-8" />
                    </a>
                    <div className="flex space-x-0 md:space-x-6">
                        <a href={constants.MerchantWebPannel} target='_blank'>
                            <button className="text-[#5E5C66] px-2 md:px-6 py-2 md:py-3 rounded-[10px] bg-gray-300 hover:bg-[#06C17D] text-sm md:text-md hover:text-white transition duration-300">
                                Partner With Us
                            </button>
                        </a>
                        <a href="/ride">
                            <button className="text-[#5E5C66] px-2 md:px-6 py-2 md:py-3 rounded-[10px] bg-gray-300 hover:bg-[#06C17D] text-sm md:text-md hover:text-white transition duration-300">
                                Ride With Us
                            </button>
                        </a>
                    </div>
                </header>
            </motion.div>
        </>
    )
}

export default Motionheader