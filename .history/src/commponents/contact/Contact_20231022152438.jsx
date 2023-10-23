import "./contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildrenP: 0.1,
    }
  }
}

export const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>hello street New York</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+1 123 456 789</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <div className="phoneSvg">
        <svg width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <defs><style>.a{{fill:"none",stroke:"#000000",strokelinecap:"round",strokelinejoin:"round",}}</style></defs>
          <path className="a" d="M12.1932,16.1987a14.1586,14.1586,0,0,0,.0736,15.7126" />
          <path className="a" d="M31.8013,12.1932a14.158,14.158,0,0,0-15.8144.1431" />
          <path className="a" d="M35.8068,31.8013a14.158,14.158,0,0,0-.1431-15.8144" />
          <path className="a" d="M16.1987,35.8067a14.1584,14.1584,0,0,0,15.7126-.0735" />
          <line className="a" x1="24" y1="2.5" x2="18.6769" y2="10.8857" />
          <line className="a" x1="24" y1="2.5" x2="28.7179" y2="10.6559" />
          <line className="a" x1="24" y1="2.5" x2="24" y2="9.8502" />
          <polyline className="a" points="10.656 10.656 15.986 12.335 16.403 16.403 12.19 16.197 10.656 10.656" />
          <line className="a" x1="10.6559" y1="10.6559" x2="16.4029" y2="16.4029" />
          <polyline className="a" points="37.344 10.656 35.665 15.986 31.597 16.403 31.803 12.19 37.344 10.656" />
          <line className="a" x1="37.3441" y1="10.6559" x2="31.5971" y2="16.4029" />
          <polyline className="a" points="37.344 37.344 32.014 35.665 31.597 31.597 35.81 31.803 37.344 37.344" />
          <line className="a" x1="37.3441" y1="37.3441" x2="31.5971" y2="31.5971" />
          <polyline className="a" points="10.656 37.344 12.335 32.014 16.403 31.597 16.197 35.81 10.656 37.344" />
          <line className="a" x1="10.6559" y1="37.3441" x2="16.4029" y2="31.5971" />
          <line className="a" x1="45.5" y1="24" x2="37.1143" y2="18.6769" />
          <line className="a" x1="45.5" y1="24" x2="37.3441" y2="28.7179" />
          <line className="a" x1="45.5" y1="24" x2="38.1498" y2="24" />
          <line className="a" x1="24" y1="45.5" x2="29.3231" y2="37.1143" />
          <line className="a" x1="24" y1="45.5" x2="19.2821" y2="37.3441" />
          <line className="a" x1="24" y1="45.5" x2="24" y2="38.1498" />
          <line className="a" x1="2.5" y1="24" x2="10.8857" y2="29.3231" />
          <polyline className="a" points="2.5 24 3.5 23.422 10.656 19.282" />
          <line className="a" x1="2.5" y1="24" x2="9.8502" y2="24" />
          <circle className="a" cx="24" cy="24" r="10.7377" />
          <path className="a" d="M23.3494,23.4611c.4912.6378.3636,2.2322-1.4647,2.1047s-2.6786-2.2817-2.6786-3.5325a4.694,4.694,0,0,1,4.7833-4.0995c3.4439-.1275,4.8045,3.89,4.8045,6.1226s-2.7,6.4627-8.8225,5.9737" />
          <path className="a" d="M24.6411,44.49A20.5008,20.5008,0,0,0,44.4919,24.5833" />
          <path className="a" d="M3.51,24.6411A20.5007,20.5007,0,0,0,23.4218,44.492" />
          <path className="a" d="M23.3588,3.51A20.5008,20.5008,0,0,0,3.508,23.4218" />
          <path className="a" d="M44.49,23.3655A20.5008,20.5008,0,0,0,24.5833,3.5081" /></svg>
        </div>
        
        <form >
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}
