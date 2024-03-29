import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'
import {AiFillLinkedin, AiFillYoutube, AiFillTwitterCircle, AiFillGithub, AiFillRedditCircle} from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import { useState, useEffect } from 'react'
import getRepositories from '../utils/githubApi';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [repositories, setRepositores] = useState([]);

  useEffect(() => {
    const username = 'coderwithsense';
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    
    getRepositories(username, token)
      .then(repositories => setRepositores(repositories))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
    <main className='px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-mono'>BlocksDev</h1>
          <ul className='flex items-center h1'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-xl'/></li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8' href='/resume.pdf' download>Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Himanshu Poptani</h2>
          <h3 className='text-2xl py-2 md:text-4xl'>Blockchain Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-400 md:text-2xl'>Freelancer providing services for Blockchain and AI based web apps. Ping me from below...</p>
        </div>
        <div class='text-5xl flex justify-center gap-16 cursor-pointer py-3 text-gray-400'>
          <a href='https://www.linkedin.com/in/hxxp/'><AiFillLinkedin/></a>
          <a href='https://twitter.com/kouder01'><AiFillTwitterCircle/></a>
          <a href='https://www.youtube.com/channel/UCm4HdRAOhqJGdptJRtHDp3g'><AiFillYoutube/></a>
        </div>

        <div class='text-5xl flex justify-center gap-16 cursor-pointer py-3 text-gray-400'>
          <a href='https://www.fiverr.com/himanshupoptani'><SiFiverr/></a>
          <a href='https://github.com/coderwithsense'><AiFillGithub/></a>
          <a href='https://www.reddit.com/user/Intelligent-Species'><AiFillRedditCircle/></a>
        </div>
        <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden'>
          <Image src={deved} layout='fill' objectFit='cover'/>
        </div>
      </section>
      <section>
        <div className='p-2'>
          <h3 className='text-3xl pt-8 lg:text-5xl'>Services I offer</h3>
          <p className='pt-2 leading-8 text-md text-gray-400 lg:text-2xl'>Since the beginning of my journey as a freelance developer, I have remote work for Proficient in developing decentralized applications (dApps) and smart contracts using <span className='text-teal-400'>Ethereum, Solidity, and web3.js.</span></p>
          <p className='pt-2 leading-8 text-md text-gray-400 lg:text-2xl'>Knowledge of decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and blockchain-based identity solutions.</p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='lg:w-40' src={design} width={100} height={100}/>
            <h3 className='text-lg text-teal-600 font-medium pt-8 pb-2 lg:text-3xl'>Designing</h3>
            <p className='py-2 lg:text-xl'>Strong knowledge of blockchain protocols, such as Bitcoin, Ethereum, Hyperledger, and Corda, as well as their underlying consensus mechanisms.</p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='lg:w-40' src={code} width={100} height={100}/>
            <h3 className='text-lg text-teal-600 font-medium pt-8 pb-2 lg:text-3xl'>Core Development</h3>
            <p className='py-2 lg:text-xl'>Skilled in integrating blockchain solutions with other enterprise systems and applications, such as ERP, CRM, and supply chain management systems.</p>
          </div>
          <div className='text-center items-center shadow-lg p-10 rounded-xl my-10'>
            <Image className='lg:w-40' src={consulting} width={100} height={100}/>
            <h3 className='text-lg text-teal-600 font-medium pt-8 pb-2 lg:text-3xl'>Consulting</h3>
            <p className='py-2 lg:text-xl'>Expertise in designing and developing secure and scalable blockchain solutions that meet business requirements.</p>
          </div>
        </div>
      </section>
      <section className='p-6'>
        <h3 className='text-3xl pt-8 p-4 lg:text-5xl p-4 text-center'>My Github Repositories</h3>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-5'>
          {repositories.map((repo) => (
            <div key={repo.id} className='border border-gray-300 rounded-lg p-4'>
              <h4 className='text-xl font-medium text-teal-600'>{repo.name}</h4>
              <p className='text-gray-600'>{repo.description}</p>
              <p className='text-gray-500'>Language: {repo.language}</p>
              <p className='text-gray-500'>Stars: {repo.stargazers_count}</p>
              {/* Add more information or components to display as needed */}
              <a href={repo.html_url} className='text-teal-600'>View on GitHub</a>
            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
  )
}
