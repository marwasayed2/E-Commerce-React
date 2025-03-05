
import { Link, useLocation } from 'react-router-dom'
import './style.css'
import { motion } from "framer-motion";
export default function Thank() {

    const location = useLocation();
    const { userData } = location.state || {};
    console.log(userData);

    return (
        <div className='Thank animated-bg'>
            <div className='text-center py-5'>
                <motion.div
                    className="message"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Thank you for shopping with us, {userData.firstName}!</h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        We look forward to seeing you again!
                    </motion.p>
                    <motion.p
                        className='text-bg-primary text-white'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        The product will reach you as soon as possible.
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <Link to={'/'} className='btn btn-secondary'>Home</Link>
                </motion.div>
            </div></div>
    )
}
